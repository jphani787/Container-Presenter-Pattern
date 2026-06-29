import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { z } from 'zod'

const searSchema = z.object({
  city: z.string().catch('all'),
  tech: z.string().catch('all'),
})

export const Route = createFileRoute('/org/activities/meetups/')({
  validateSearch: searSchema,
  loaderDeps: ({ search: { city, tech } }) => ({ city, tech }),
  loader: async ({ deps }) => {
    const res = await fetch('http://localhost:4002/events')
    if (!res.ok) throw new Error('Could not load data!')
    let events = await res.json()
    if (deps.city && deps.city !== 'all') {
      events = events.filter((event: any) =>
        event.city.toLowerCase().includes(deps.city.toLowerCase()),
      )
    }

    if (deps.tech && deps.tech !== 'all') {
      events = events.filter((event: any) =>
        event.tech.toLowerCase().includes(deps.tech.toLowerCase()),
      )
    }
    return events
  },
  pendingComponent: () => (
    <div className="animate-pulse">Loading meetups data..</div>
  ),
  errorComponent: ({ error }) => (
    <div className="text-red-500">{error.message}</div>
  ),
  component: MeetupComponent,
})

function MeetupComponent() {
  const meetups = Route.useLoaderData()
  const { city, tech } = Route.useSearch()
  const navigate = Route.useNavigate()

  const handleFilter = () => {
    navigate({ search: { city: 'Bengaluru', tech: 'Full-Stack' } })
  }

  const clearFilter = () => {
    navigate({ search: { city: 'all', tech: 'all' } })
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-center bg-neutral-900 p-4 rounded-lg">
        <p className="text-emerald-400">
          Current Filters: City: {city || 'All'} | Tech: {tech}
        </p>
        <button
          onClick={handleFilter}
          className="bg-emerald-600 text-white px-4 py-2 rounded font-bold cursor-pointer"
        >
          Filter Events
        </button>
        <button
          onClick={clearFilter}
          className="bg-neutral-700 text-white px-4 py-2 rounded font-bold cursor-pointer"
        >
          Clear
        </button>
        <Link
          to="create"
          className="bg-emerald-600 text-white px-4 py-2 rounded font-bold cursor-pointer"
        >
          Create
        </Link>
      </div>
      <div className="grid gap-4">
        {meetups.length === 0 ? (
          <p className="text-neutral-500">No meetups found for this filter.</p>
        ) : (
          meetups.map((meetup) => (
            <>
              <br />
              <Link
                key={meetup.id}
                to="$meetupId"
                params={{ meetupId: meetup.id }}
                className="block p-4 border border-neutral-700 rounded-lg hover:border-emerald-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-white">{meetup.title}</h3>
                <p className="text-neutral-400">{meetup.location}</p>
              </Link>
            </>
          ))
        )}
      </div>
    </div>
  )
}
