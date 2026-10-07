<template>
    <div class="d-flex flex-column h-100 min-h-0 overflow-hidden">
        <v-toolbar color="primary">
            <v-btn icon="mdi-arrow-left" to="/" />

            <v-toolbar-title>
                {{ chat.type.charAt(0).toUpperCase() + chat.type.slice(1) }}
            </v-toolbar-title>
        </v-toolbar>

        <div class="d-flex flex-column flex-grow-1 min-h-0">
            <ChatMessageList :messages="messages" :loading="loading" />

            <ChatInput :loading="loading" @send="send" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ChatType } from '~/apis/chatApi';

const route = useRoute()

const chat = {
    sessionId: route.query.sessionId as string | undefined,
    type: route.query.type as ChatType
}

const { messages, loading, error, send } = useChat(chat)
</script>