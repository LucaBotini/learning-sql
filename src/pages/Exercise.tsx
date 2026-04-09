import { useState } from "react"

const exercise = {
  question: "Selecione todos os registros da tabela users",
  answer: "SELECT * FROM users"
}

function Exercise() {

  const [query, setQuery] = useState("")
  const [result, setResult] = useState("")

  function checkAnswer() {

    if (query.trim().toLowerCase() === exercise.answer.toLowerCase()) {
      setResult("Correto!")
    } else {
      setResult("Resposta incorreta")
    }

  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">

      <h2 className="text-2xl font-bold mb-4">
        Exercício SQL
      </h2>

      <p className="mb-6 text-gray-700">
        {exercise.question}
      </p>

      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite sua query SQL aqui..."
        className="w-full h-40 p-3 border rounded font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={checkAnswer}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Verificar resposta
      </button>

      {result && (
        <div className="mt-4 text-lg font-semibold">
          {result === "Correto!" ? (
            <span className="text-green-600">✔ {result}</span>
          ) : (
            <span className="text-red-600">❌ {result}</span>
          )}
        </div>
      )}

    </div>
  )
}

export default Exercise