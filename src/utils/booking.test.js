
import { describe, it, expect } from 'vitest'
import { bookingStatus } from './booking'

describe('bookingStatus', () => {
  it('är Avbokad när bokningen är avbokad', () => {
    expect(
      bookingStatus(
        { date: '2999-01-01', cancelled: true },
        new Date('2026-10-15')
      )
    ).toBe('Avbokad')
  })

  it('är Spelad dagen efter speldagen', () => {
    expect(
      bookingStatus(
        { date: '2026-10-14', cancelled: false },
        new Date('2026-10-15')
      )
    ).toBe('Spelad')
  })

  it('är Kommande på speldagen', () => {
    expect(
      bookingStatus(
        { date: '2026-10-15', cancelled: false },
        new Date('2026-10-15')
      )
    ).toBe('Kommande')
  })
})
import { describe, it, expect } from 'vitest'
import { bookingStatus } from './booking'

describe('bookingStatus', () => {
  it('är Avbokad när bokningen är avbokad', () => {
    expect(bookingStatus({ date: '2999-01-01', cancelled: true }, new Date('2026-10-15'))).toBe('Avbokad')
  })

  it('är Spelad dagen efter speldagen', () => {
    expect(bookingStatus({ date: '2026-10-14', cancelled: false }, new Date('2026-10-15'))).toBe('Spelad')
  })

  it('är Kommande på speldagen', () => {
    expect(bookingStatus({ date: '2026-10-15', cancelled: false }, new Date('2026-10-15'))).toBe('Kommande')
  })
})
