<template>
    <v-toolbar title="Home" color="primary"></v-toolbar>
    <v-container fluid class="pa-2">
        <v-row>
            <v-col class="d-flex flex-column ga-2">
                <v-card :to="{ path: '/chat/chat.vue', query: { type: 'chat' } }">
                    <v-card-title>Basic Chat</v-card-title>
                    <v-card-text>
                        <p>Basic LLM chat functionality</p>
                    </v-card-text>
                </v-card>

                <v-card :to="{ path: '/chat/rag.vue', query: { type: 'rag' } }">
                    <v-card-title>RAG</v-card-title>
                    <v-card-text>
                        <p>Augment LLM with external knowledge</p>
                    </v-card-text>
                </v-card>

                <v-card :to="{ path: '/chat/tooling.vue', query: { type: 'tooling' } }">
                    <v-card-title>Tooling</v-card-title>
                    <v-card-text>
                        <p>Enable LLM with code execution</p>
                    </v-card-text>
                </v-card>

                <v-card :to="{ path: '/chat/routing.vue', query: { type: 'routing' } }">
                    <v-card-title>Service Routing</v-card-title>
                    <v-card-text>
                        <p>Route prompts to relevant services</p>
                    </v-card-text>
                </v-card>

                <v-card :to="{ path: '/chat/memory.vue', query: { sessionId: 'session-1', type: 'memory' } }">
                    <v-card-title>Memory</v-card-title>
                    <v-card-text>
                        <p>Retain context across prompts</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
</script>