import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/org/activities/posts')({
  component: PostsComponent,
})

function PostsComponent() {
  return (
    <h1 className="text-4xl font-extrabold text-white md-4 tracking-tight">
      Posts
    </h1>
  )
}
