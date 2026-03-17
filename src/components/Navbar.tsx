import { useState } from 'react'
import { Link } from 'react-router-dom'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full bg-gray-900 fixed top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider">BAB</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-10 text-gray-200 font-tomorrow text-sm">
          <Link to="/"><li className="cursor-pointer hover:text-purple-400 transition-colors">Home</li></Link>
          <li className="cursor-pointer hover:text-purple-400 transition-colors" onClick={() => scrollTo('about')}>About</li>
          <li className="cursor-pointer hover:text-purple-400 transition-colors" onClick={() => scrollTo('projects')}>Projects</li>
          <li className="cursor-pointer hover:text-purple-400 transition-colors" onClick={() => scrollTo('workExp')}>CV</li>
          <Link to="/hobbies"><li className="cursor-pointer hover:text-purple-400 transition-colors">Hobbies</li></Link>
        </ul>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center">
          <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-900 text-gray-200 flex flex-col items-center gap-y-4 py-6 font-tomorrow">
          <Link to="/" onClick={() => setIsOpen(false)}><li className="cursor-pointer hover:text-purple-400 transition-colors">Home</li></Link>
          <li className="cursor-pointer hover:text-purple-400 transition-colors" onClick={() => { scrollTo('about'); setIsOpen(false) }}>About</li>
          <li className="cursor-pointer hover:text-purple-400 transition-colors" onClick={() => { scrollTo('projects'); setIsOpen(false) }}>Projects</li>
          <li className="cursor-pointer hover:text-purple-400 transition-colors" onClick={() => { scrollTo('workExp'); setIsOpen(false) }}>CV</li>
          <Link to="/hobbies" onClick={() => setIsOpen(false)}><li className="cursor-pointer hover:text-purple-400 transition-colors">Hobbies</li></Link>
        </ul>
      )}
    </nav>
  )
}

export default Navbar