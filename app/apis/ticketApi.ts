export type HelpdeskTicketStatus = 'OPEN' | 'IN_PROGRESS' | 'CLOSED'

export type HelpdeskTicketType = 'INCIDENT' | 'REQUEST'

export interface HelpdeskTicket {
  id: string
  type: HelpdeskTicketType
  summary: string
  description: string
  status: HelpdeskTicketStatus
  comments: string[]
}

export async function getTickets() {
  const config = useRuntimeConfig()

  return await $fetch<HelpdeskTicket[]>('/tooling/tickets', {
    baseURL: config.public.apiBase,
    method: 'GET'
  })
}