import express from 'express'
import cors from 'cors'
import Anthropic from '@anthropic-ai/sdk'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load env snapshot (written at build/startup time with fresh session credentials)
let envSnap = {}
try {
  envSnap = JSON.parse(readFileSync(resolve(__dirname, '.ai-env.json'), 'utf-8'))
} catch {}

const authToken = envSnap.AUTH_TOKEN || process.env.ANTHROPIC_AUTH_TOKEN || ''
const baseURL = envSnap.BASE_URL || process.env.ANTHROPIC_BASE_URL || ''

const customHeaders = {}
const rawHeaders = envSnap.CUSTOM_HEADERS || process.env.ANTHROPIC_CUSTOM_HEADERS || ''
rawHeaders.split('\n').forEach(line => {
  const idx = line.indexOf(':')
  if (idx > 0) customHeaders[line.slice(0, idx).trim()] = line.slice(idx + 1).trim()
})

const client = new Anthropic({ apiKey: authToken, baseURL, defaultHeaders: customHeaders })

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, systemPrompt } = req.body
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 250,
      system: systemPrompt || 'Ты помощник программы «Точка Роста». Отвечай по-русски кратко.',
      messages,
    })
    res.json({ reply: response.content[0].text })
  } catch (e) {
    console.error('AI error:', e.status, e.message)
    res.status(500).json({ error: e.message })
  }
})

app.listen(3001, () => console.log('AI proxy running on :3001'))
