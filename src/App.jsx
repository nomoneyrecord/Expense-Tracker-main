import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(1);
  const [expenses, setExpenses] = useState([{ type: "cash" }]);

  const handleAddExpense = (event) => {
    event.preventDefault(); // prevent form submission

    const type = event.target.form.elements.type.value;
    const name = event.target.form.elements.name.value;
    const date = event.target.form.elements.date.value;
    const amount = event.target.form.elements.amount.value;

    const newExpense = { type, name, date, amount };
    setExpenses([...expenses, newExpense]); // add new expense to the array
  };

  return (
    <div className="main-content">
      <h1 className="head">Simple Expense Tracker</h1>
      <h2 className="add-item">Add a new item:</h2>
      <form className="input-form">
        <div className="row1">
          <label className="type-label">
            Type:
            <select name="type" className="payment-type">
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="crypto">Crypto</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="name-label">
            Name:
            <input type="text" name="name" className="expense" placeholder="What was it?" />
          </label>
        </div>
        <div className="row2">
          <label className="date-label">
            Date:
            <input type="date" name="date" className="date" />
          </label>
          <label className="amount-label">
            Amount:
            <input type="text" name="amount" className="amount" placeholder="How much?" />
          </label>
        </div>
        <div className="button">
          <button className="add-button" type="button" onClick={handleAddExpense}>
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td className="Type">{expense.type}</td>
                <td className="Name">{expense.name}</td>
                <td className="Date">{expense.date}</td>
                <td className="Amount">{expense.amount}</td>
                <td className="Delete" type="button">Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
