#!/bin/bash
# Export current session env vars needed for Anthropic proxy
export ANTHROPIC_AUTH_TOKEN="$ANTHROPIC_AUTH_TOKEN"
export ANTHROPIC_BASE_URL="$ANTHROPIC_BASE_URL"
export ANTHROPIC_CUSTOM_HEADERS="$ANTHROPIC_CUSTOM_HEADERS"
node /home/user/app/server.js
