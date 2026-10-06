import type { HelpdeskTicket } from '~/apis/ticketApi'
import { getTicketsFromService } from '~/services/ticketService'

export function useTickets() {
  const tickets = ref<HelpdeskTicket[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  async function load() {
    loading.value = true
    error.value = null

    try {
      tickets.value = await getTicketsFromService()
    } catch (err) {
      error.value = err instanceof Error
        ? err
        : new Error('Failed to load tickets')
    } finally {
      loading.value = false
    }
  }

  return {
    tickets,
    loading,
    error,
    load
  }
}