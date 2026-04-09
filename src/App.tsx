import { Routes, Route } from "react-router-dom"

import Header from './components/Header'
import Home from "./pages/Home"
import Exercise from "./pages/Exercise"
import Documentation from "./pages/Documentation"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Exercise />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App