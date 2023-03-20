import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({
    type: 'Select',
    name: '',
    date: '',
    amount: '',
  });
  
  const handleChange = (e) => {
    e.preventDefault();
    setExpense({
      ...expense,
      [e.target.id]: e.target.value,
    })
  }

  const handleAddExpense = (e) => {
    e.preventDefault(); 
    if (expense.type === 'Select') {
      alert ('Please select a payment type');
      return;
    };
    setExpenses([...expenses, expense]); 
    resetExpense();
  };

  const handleDeleteExpense = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  const resetExpense = () => {
    setExpense({
      type: 'Select',
      name: '',
      date: '',
      amount: '',
    });
  }

  return (
    <div className="main-content">
      <Header />
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
            <input type="text" name="name" className="expense" placeholder="What was it?"/>
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
                <tr key={index} className="delete">
                  <td className="Type">{expense.type}</td>
                  <td className="Name">{expense.name}</td>
                  <td className="Date">{expense.date}</td>
                  <td className="Amount">{expense.amount}</td>
                  <td className="Delete">
                    <button className="delete-button" onClick={() => handleDeleteExpense(index)} position>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default App;
