import { useDebugValue, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return ( 
 
  <div className="main-content">
    <h1 className="head">Simple Expense Tracker</h1>
    <h2 className="add-item">Add a new item:</h2>
    <form className="input-form">
    <div className="row1">
    <label className="type-label">Type:
      <select name="tender" className="payment-type">
        <option value="cash">Cash</option>
        <option value="card">Card</option>
        <option value="crypto">Crypto</option>
        <option value="Other">Other</option>
      </select>
    </label>
    <label className="name-label">Name:     
      <input type="text" className="expense" placeholder="What was it?" />
    </label>
    </div>
    <div className="row2">
    <label className="date-label">Date:
      <input type="date" className="date" />
    </label>
    <label className="amount-label">Amount:
      <input type="text" className="amount" placeholder="How much?" />
    </label>
    </div>
    <div className="button">
    <button className="add-button">
      Add a new expense
    </button>
    </div>
    </form>
    <div className="main-table">
      <table>
        <thead className="table-head">
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="Type"></td>
            <td className="Name"></td>
            <td className="Date"></td>
            <td className="Amount"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )}



export default App
