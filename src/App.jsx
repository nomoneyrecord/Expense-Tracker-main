import { useDebugValue, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return ( 
<div className="main-content">
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
    <input type="text" className="expense" placeholder="What did you spend on?" />
  </label>
  <label className="date-label">Date:
    <input type="date" className="date" />
  </label>
  <label className="amount-label">Amount:
    <input type="text" className="amount" placeholder="How much?" />
  </label>
  <button className="add-button">
    Add a new expense
  </button>
  <table className="main-table">
    <thead className="table-head">
      <tr>
        <th>Type</th>
        <th colSpan="4">Name</th>
        <th>Date</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan="4"></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>
)}



export default App
