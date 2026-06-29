import { auth } from '#/utils/auth'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { z } from 'zod'

const loginSearchSchema = z.object({
  alert: z.string().optional(),
})

export const Route = createFileRoute('/login')({
  validateSearch: loginSearchSchema,
  component: LoginPage,
})

function LoginPage() {
  const { alert } = Route.useSearch()
  const navigate = useNavigate()
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    auth.login()

    navigate({
      to: '/org/activities/meetups/create',
    })
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh]">
      <div className="w-full max-w-md bg-neutral-900 p-8 rounded-xl border border-neutral-800 shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
        <p className="text-neutral-400 mb-6">Sign in to manage your meetups.</p>

        {/* 3. Conditionally render the alert if the bouncer sent them here */}
        {alert && (
          <div className="mb-6 p-4 bg-red-950/30 border border-red-900/50 text-red-400 rounded-lg text-sm font-medium">
            ⚠️ {alert}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="developer@example.com"
              className="w-full bg-neutral-950 border border-neutral-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-500 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-neutral-950 border border-neutral-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-500 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-lg transition-colors mt-2"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-neutral-500">
          Don't have an account?{' '}
          <Link
            to="/"
            className="text-emerald-400 hover:text-emerald-300 hover:underline"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
