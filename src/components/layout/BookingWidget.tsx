import { useState } from 'react'
import { BOOKING } from '@/data/site'

/**
 * "Check Availability" bar — a solid card that floats over the hero's lower edge.
 * The real engine is external (STAAH); on submit we hand off to it.
 */
export function BookingWidget() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')

  return (
    <div className="relative z-20 px-6">
      <form
        action={BOOKING.engine}
        method="get"
        target="_blank"
        className="mx-auto -mt-14 grid w-full max-w-5xl grid-cols-1 divide-y divide-line overflow-hidden rounded-sm border border-line bg-surface shadow-[0_24px_60px_-28px_rgba(43,40,35,0.45)] md:-mt-16 md:grid-cols-[1fr_1fr_1fr_auto] md:divide-x md:divide-y-0"
      >
        <Field label="Check In">
          <input
            type="date"
            required
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-transparent text-sm text-ink outline-none"
          />
        </Field>
        <Field label="Check Out">
          <input
            type="date"
            required
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-transparent text-sm text-ink outline-none"
          />
        </Field>
        <Field label="Promo Code">
          <input
            type="text"
            placeholder="Optional"
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft/50"
          />
        </Field>
        <button
          type="submit"
          className="btn btn-solid justify-center rounded-none px-8 py-5 md:px-10"
        >
          Book Now
        </button>
      </form>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5 px-6 py-4">
      <span className="eyebrow text-[0.6875rem]">{label}</span>
      {children}
    </label>
  )
}
