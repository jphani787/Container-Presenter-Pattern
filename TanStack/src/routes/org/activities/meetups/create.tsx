import {
  createFileRoute,
  redirect,
  useRouter,
  useNavigate,
} from '@tanstack/react-router'

export const Route = createFileRoute('/org/activities/meetups/create')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated()) {
      throw redirect({
        to: '/login',
        search: {
          alert: 'You must be logged in to create a meetup.',
        },
      })
    }
  },

  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('http://localhost:4002/events/', {
      method: 'POST',
      body: JSON.stringify({
        id: 'new-meetup',
        title: 'New Developer Meetup',
        location: 'Bangalore',
      }),
    })
    await router.invalidate()
    navigate({ to: '../' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="bg-emerald-600 p-2 rounded">
        Submit Meetup
      </button>
    </form>
  )
}
