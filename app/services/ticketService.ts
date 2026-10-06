import { getTickets } from "~/apis/ticketApi";

export async function getTicketsFromService() {
  return await getTickets()
}