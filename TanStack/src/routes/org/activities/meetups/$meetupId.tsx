import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/org/activities/meetups/$meetupId')({
  loader: async ({ params }) => {
    const res = await fetch(`http://localhost:4002/events/${params.meetupId}`)
    if (!res.ok) throw new Error('Events are not loading!')
    return await res.json()
  },
  pendingComponent: () => (
    <div className="animate-pulse">Loading meetup data...</div>
  ),
  errorComponent: ({ error }) => (
    <div className="text-red-500">{error.message}</div>
  ),
  component: MeetupsComponent,
})

function MeetupsComponent() {
  const meetup = Route.useLoaderData()
  const details = [
    { label: 'Date', value: meetup.date },
    { label: 'Location', value: meetup.location },
    { label: 'Attendees', value: meetup.attendees },
    { label: 'City', value: meetup.city },
    { label: 'Tech Stack', value: meetup.tech },
  ]
  console.log(meetup)
  return (
    <div className="max-w-2xl mx-auto bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl">
      <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
        {meetup.title}
      </h1>
      <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
        {meetup.description}
      </p>
      <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
        {details.map((detail, index) => {
          if (!detail.value) return null
          return (
            <div
              key={detail.label}
              className={`flex justify-between py-4 px-6 ${
                index !== details.length - 1
                  ? 'border-b border-neutral-800'
                  : ''
              }`}
            >
              <span className="text-neutral-500 font-medium">
                {detail.label}
              </span>
              <span className="text-emerald-400 font-semibold">
                {detail.value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
