import { useDebugValue, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
    <h1 className="head">Simple Expense Tracker</h1>
    <h2 className="add-item">Add a new item:</h2>
      <label className="type-label">Type:
        <input type="text" className="currency" />
      </label>
      <label className="name-label">Name:  
        <input type="text" className="expense" />
      </label>
      <label className="date-label">Date:
        <input type="text" className="date" />
      </label>
      <label className="amount-label">Amount:  
        <input type="text" className="amount" />
      </label>
      <button className="add-button">
        Add a new expense
      </button>
      <table></table>
    </>
)}

export default App
