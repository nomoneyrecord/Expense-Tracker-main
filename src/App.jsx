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
        <select name="tender" className="payment-type">
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="crypto">Crypto</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label className="name-label">Name:  
        <input type="text" className="expense" placeholder="What did you spend on?"/>
      </label>
      <label className="date-label">Date:
        <input type="date" className="date" />
      </label>
      <label className="amount-label">Amount:  
        <input type="text" className="amount" value="0"/>
      </label>
      <button className="add-button">
        Add a new expense
      </button>
      <table></table>
    </>
)}

export default App
