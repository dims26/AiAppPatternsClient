<template>
    <v-sheet class="flex-grow-1 min-h-0 overflow-y-auto pa-4">
        <div class="d-flex flex-column ga-3">
            <v-card v-for="(message, index) in messages" :key="index" :class="[
                'pa-3',
                message.role === 'user'
                    ? 'align-self-end bg-primary'
                    : 'align-self-start'
            ]" max-width="70%">
                <v-card-text class="text-pre-wrap">
                    {{ message.content }}
                </v-card-text>
            </v-card>

            <v-progress-circular v-if="loading" color="primary" indeterminate size="20" />
        </div>
    </v-sheet>
</template>

<script setup lang="ts">
defineProps<{
    messages: ChatMessage[]
    loading: boolean
}>()
</script>