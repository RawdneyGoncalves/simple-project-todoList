import { useState } from 'react'
import Card from './components/Card/index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <div> 
<input placeholder='fazer café'/> 
<button>Adicionar</button>

   </div>
   <Card />
    </div>
  )
}

export default App

//JSX 