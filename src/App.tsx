import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>XTN</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        just listing my cooler stuff here. this website is hella incomplete twt
      </p>
      <a href='https://github.com/Chris-Coleongco/PushupCounterPytorch'>
      https://github.com/Chris-Coleongco/PushupCounterPytorch
      </a>
      <a href='https://github.com/Chris-Coleongco/ChurnPredictor'>
      https://github.com/Chris-Coleongco/ChurnPredictor
      </a>
    </>
  )
}

export default App
