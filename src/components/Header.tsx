import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold">
          Learning SQL ⚡
        </h1>

        <nav className="flex gap-6">
          <Link 
            to="/" 
            className="hover:text-gray-300"
          >
            Home
          </Link>

          <Link 
            to="/questions" 
            className="hover:text-gray-300"
          >
            Questions
          </Link>

                    <Link 
            to="/documentation" 
            className="hover:text-gray-300"
          >
            Documentation
          </Link>
        </nav>

      </div>
    </header>
  )
}

export default Header