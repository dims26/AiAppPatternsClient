import type { ChatConfig } from "~/apis/chatApi"
import { sendMessage } from "~/services/chatService"

export interface ChatMessage {
    role: 'user' | 'model'
    content: string
}

export function useChat(chat: ChatConfig) {
    const messages = ref<ChatMessage[]>([])
    const loading = ref(false)
    const error = ref<unknown>(null)

    async function send(prompt: string) {
        messages.value.push({
            role: 'user',
            content: prompt
        })

        loading.value = true
        error.value = null

        try {
            const response = await sendMessage(chat, prompt)

            messages.value.push({
                role: 'model',
                content: response.content
            })
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    function clear() {
        messages.value = []
    }

    return {
        messages,
        loading,
        error,
        send,
        clear
    }
}