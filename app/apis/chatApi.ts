export type ChatType = 'chat' | 'rag' | 'tooling' | 'routing' | 'memory'

export interface ChatConfig {
  sessionId?: string
  type: ChatType
}

const endpoints: Record<ChatType, string> = {
  chat: '/chat/prompt',
  rag: '/rag/ask-custom-aug',
  tooling: '/tooling/ask',
  routing: '/routing/ask',
  memory: '/memory/ask'
}

export async function sendChatMessage(
  chat: ChatConfig,
  prompt: string
) {

  const config = useRuntimeConfig()

  return await $fetch(endpoints[chat.type], {
    baseURL: config.public.apiBase,
    method: 'POST',
    ...chat.sessionId && {
      headers: { 'X-Session-Id': chat.sessionId }
    },
    body: prompt
  })
}