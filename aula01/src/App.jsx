import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GreetingAdicao from './components/Adicao'
import GreetingSubtracao from './components/Subtracao'
import GreetingMultiplicacao from './components/Multiplicacao'
import GreetingDivisao from './components/Divisao'

import App2 from './components/PrecisoEstudar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
  
      <h1>OPERAÇÕES</h1>
      <div>
        <GreetingAdicao num1={12} num2={12}/>
        <GreetingSubtracao num1={12} num2={6}/>
        <GreetingMultiplicacao num1={12} num2={24}/>
        <GreetingDivisao num1={24} num2={12}/>
      </div>

      <App2 nomeDaTecnologia/>
      
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
