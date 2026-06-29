import { Link } from '@tanstack/react-router'

const Header = () => {
  return (
    <header className="flex justify-between border-b border-neutral-800 pb-4 mb-8">
      <Link to="/" className="text-4xl">
        Tanstack router
      </Link>
      <nav className="flex gap-6 mt-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jphani787"
        >
          GitHub
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/phani787"
        >
          Insta
        </a>

        <Link to="/about">About</Link>
        <Link to="/org/activities/posts">Posts</Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/phanindra-kumar-5b90011a1/"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  )
}

export default Header
