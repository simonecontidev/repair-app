import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen grid place-items-center bg-emerald-50">
      <div className="p-6 rounded-2xl bg-white border text-center">
        <h1 className="text-2xl font-semibold">RePair • Setup OK</h1>
        <p className="opacity-70 mt-2">Tailwind, lucide-react e framer-motion installati</p>
      </div>
    </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
