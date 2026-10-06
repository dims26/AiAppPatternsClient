import { sendChatMessage, type ChatConfig } from "~/apis/chatApi"

export interface ChatResponse {
    content: string
}

export async function sendMessage(
    chat: ChatConfig, prompt: string): Promise<ChatResponse> {
    const response = await sendChatMessage(chat, prompt)

    switch (chat.type) {
        case 'chat':
            console.log('Chat response', response)
            return {
                content: (response as string)
            }

        case 'rag': {
            const res = response as {
                content: string
                inputTokenCount: number
                outputTokenCount: number
                totalTokenCount: number
            }

            const message = `${res.content}
            
            *STATS*
            inputTokenCount: ${res.inputTokenCount}
            outputTokenCount: ${res.outputTokenCount}
            totalTokenCount: ${res.totalTokenCount}`

            console.log('Templated response', message)

            return { content: message }
        }

        case 'tooling': {
            const res = response as {
                content: string
                executions: {
                    performAction: string
                }[]
            }

            const message = `${res.content}

${res.executions.map((execution, index) => {
                let action = execution.performAction

                try {
                    action = JSON.stringify(JSON.parse(action), null, 2)
                } catch {
                    // Keep the original value if it isn't valid JSON
                }

                return `**Execution ${index + 1}**

performAction:
${action}`
            }).join('\n\n')}`

            console.log('Templated response', message)

            return { content: message }
        }
        case 'routing':
        case 'memory': {
            const res = response as {
                intent: string
                response: string
            }

            const message = `${res.response}

Prompt intent: ${res.intent}`

            console.log('Templated response', message)
            return { content: message }
        }
    }
}