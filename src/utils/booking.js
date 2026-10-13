import { daysBetween } from './date'

// Status för en bokning räknat på "i dag" – skickas in så att den går att testa.
export const bookingStatus = (booking, today = new Date()) => {
  if (booking.cancelled) return 'Avbokad'
  // Bokningar är "Kommande" på själva speldagen. De blir "Spelad" först nästa dag.
  return daysBetween(booking.date, today) > 0 ? 'Spelad' : 'Kommande'
}
