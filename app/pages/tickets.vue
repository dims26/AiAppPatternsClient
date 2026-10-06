<template>
    <div class="d-flex flex-column h-100">
        <v-toolbar color="primary">
            <v-toolbar-title>Tickets</v-toolbar-title>

            <v-btn icon="mdi-refresh" :loading="loading" @click="load" />
        </v-toolbar>

        <v-alert v-if="error" type="error" class="ma-4">
            Failed to load tickets.
        </v-alert>

        <v-progress-linear v-else-if="loading && !tickets.length" indeterminate />

        <v-empty-state v-else-if="!tickets.length" icon="mdi-ticket-outline" text="No tickets found"
            title="No tickets" />

        <v-expansion-panels v-else class="pa-4">
            <v-expansion-panel v-for="ticket in tickets" :key="ticket.id">
                <v-expansion-panel-title>
                    <div class="d-flex align-center ga-3 w-100">
                        <v-chip size="small" variant="tonal">
                            {{ ticket.type }}
                        </v-chip>

                        <div class="d-flex flex-column">
                            <span class="font-weight-medium">
                                {{ ticket.summary }}
                            </span>

                            <span class="text-caption text-medium-emphasis">
                                {{ ticket.id }}
                            </span>
                        </div>

                        <v-spacer />

                        <v-chip size="small" :color="ticket.status === 'CLOSED'
                            ? 'success'
                            : ticket.status === 'IN_PROGRESS'
                                ? 'warning'
                                : 'primary'
                            ">
                            {{ ticket.status }}
                        </v-chip>
                    </div>
                </v-expansion-panel-title>

                <v-expansion-panel-text>
                    <div class="d-flex flex-column ga-4">
                        <div>
                            <div class="text-caption text-medium-emphasis">
                                Ticket ID
                            </div>

                            <div>
                                {{ ticket.id }}
                            </div>
                        </div>

                        <div>
                            <div class="text-caption text-medium-emphasis">
                                Type
                            </div>

                            <div>
                                {{ ticket.type }}
                            </div>
                        </div>

                        <div>
                            <div class="text-caption text-medium-emphasis">
                                Status
                            </div>

                            <div>
                                {{ ticket.status }}
                            </div>
                        </div>

                        <div>
                            <div class="text-caption text-medium-emphasis">
                                Summary
                            </div>

                            <div>
                                {{ ticket.summary }}
                            </div>
                        </div>

                        <div>
                            <div class="text-caption text-medium-emphasis">
                                Description
                            </div>

                            <div class="text-pre-wrap">
                                {{ ticket.description }}
                            </div>
                        </div>

                        <div v-if="ticket.comments.length">
                            <div class="text-caption text-medium-emphasis mb-2">
                                Comments
                            </div>

                            <v-list density="compact">
                                <v-list-item v-for="(comment, index) in ticket.comments" :key="index" class="px-0">
                                    <v-list-item-title class="text-pre-wrap">
                                        {{ comment }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </div>

                        <div v-else class="text-medium-emphasis">
                            No comments.
                        </div>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script setup lang="ts">
const {
    tickets,
    loading,
    error,
    load
} = useTickets()

onMounted(load)
</script>