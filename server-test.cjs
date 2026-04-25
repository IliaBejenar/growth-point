const express = require('express')
const cors = require('cors')
const https = require('https')
const fs = require('fs')

const envSnap = JSON.parse(fs.readFileSync('/home/user/app/.ai-env.json', 'utf-8'))
const authToken = envSnap.AUTH_TOKEN
const baseURL = new URL(envSnap.BASE_URL)
const customHeaders = {}
envSnap.CUSTOM_HEADERS.split('\n').forEach(line => {
  const idx = line.indexOf(':')
  if (idx > 0) customHeaders[line.slice(0,idx).trim()] = line.slice(idx+1).trim()
})

console.log('Token:', authToken?.slice(0,20))
console.log('BaseURL:', baseURL.href)

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/chat', (req, res) => {
  const { messages, systemPrompt } = req.body
  const payload = JSON.stringify({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 250,
    system: systemPrompt || 'Ты помощник. Отвечай по-русски кратко.',
    messages,
  })
  const options = {
    hostname: baseURL.hostname,
    path: baseURL.pathname + '/v1/messages',
    port: 443,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'content-length': Buffer.byteLength(payload),
      'x-api-key': authToken,
      'anthropic-version': '2023-06-01',
      ...customHeaders,
    }
  }
  const proxyReq = https.request(options, proxyRes => {
    let body = ''
    proxyRes.on('data', c => body += c)
    proxyRes.on('end', () => {
      try {
        const data = JSON.parse(body)
        if (data?.content?.[0]?.text) res.json({ reply: data.content[0].text })
        else { console.error('No text:', JSON.stringify(data).slice(0,200)); res.status(500).json({ error: 'No reply' }) }
      } catch(e) { res.status(500).json({ error: e.message }) }
    })
  })
  proxyReq.on('error', e => res.status(500).json({ error: e.message }))
  proxyReq.write(payload)
  proxyReq.end()
})

app.listen(3001, () => console.log('CJS proxy on :3001'))
