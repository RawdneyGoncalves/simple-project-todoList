import { useState } from 'react'
import Card from './components/Card/index'
import './App.css'

function App() {
  return (
    <div className="App">
   <div className='add-todo'> 
<input placeholder='fazer café'/> 
<button>Adicionar</button>

   </div>
   <Card tittle= 'Fazer café' />
    </div>
  )
}

export default App

//JSX 