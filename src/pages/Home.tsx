import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="max-w-3xl mx-auto mt-10 text-center">

      <h1 className="text-3xl font-bold mb-6">
        Aprenda SQL praticando
      </h1>

      <p className="text-gray-600 mb-8">
        Resolva exercícios de SQL e veja se sua query está correta.
      </p>

      <Link
        to="/questions"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Começar exercício
      </Link>

    </div>
  )
}

export default Home