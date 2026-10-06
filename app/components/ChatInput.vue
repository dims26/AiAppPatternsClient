<template>
    <div class="pa-3">
        <v-textarea v-model="message" rows="1" auto-grow hide-details placeholder="Type a prompt..."
            :disabled="loading" @keydown.enter.exact.prevent="submit">
            <template #append-inner>
                <v-btn icon="mdi-send" color="primary" variant="text" :disabled="!message.trim()" :loading="loading" @click="submit" />
            </template>
        </v-textarea>
    </div>
</template>

<script setup lang="ts">
defineProps<{loading: boolean}>()

const emit = defineEmits<{
    send: [message: string]
}>()

const message = ref('')

function submit() {
    const value = message.value.trim()

    if (!value) {
        return
    }

    emit('send', value)
    message.value = ''
}
</script>