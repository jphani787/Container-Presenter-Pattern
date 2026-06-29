import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/org/activities/hackathon')({
  component: HackathonComponent,
})

function HackathonComponent() {
  return (
    <h1 className="text-4xl font-extrabold text-white mb-4">
      Hello Hackathon Page
    </h1>
  )
}
