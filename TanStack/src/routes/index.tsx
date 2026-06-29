import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (count >= 3) {
      navigate({ to: '/org/activities/hackathon' })
    }
  }, [count])

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="text-sm font-medium mt-2 md-2 text-gray-300">
        This is a meeatup tracker app built useing tanstack router. we will
        learn static routing, nesting routing, and data loading. apart from
        this.we will look into the adviced concepts like search and query route,
        and code spliting.
      </p>
      <div className="flex gap-3 mt-5">
        <Link
          to="/org/activities/hackathon"
          className="bg-emerald-700 text-white px-4 py-3 rounded font-bold 
          cursor-pointer"
        >
          Go To Hackathon
        </Link>
        <button
          className="bg-emerald-700 text-white px-4 py-3 rounded font-bold 
          cursor-pointer"
          onClick={() => setCount((prev) => prev + 1)}
        >
          {count === 0
            ? 'Go To hackathon programmaticaly'
            : `${3 - count} - clicks left..`}
        </button>
      </div>
    </div>
  )
}
