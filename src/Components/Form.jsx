import React from "react";

function Form({ expense, handleAddExpense, handleChange }) {
  return (
    <div>
      <form className="input-form" onSubmit={handleAddExpense}>
        <div className="row1">
          <label className="type-label">Type:</label>
          <select
            name="type"
            id="type"
            className="payment-type"
            onChange={handleChange}
            value={expense.type}
          >
            <option disabled>Select</option>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="crypto">Crypto</option>
            <option value="other">Other</option>
          </select>

          <label className="name-label">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="expense"
              placeholder="What was it?"
              onChange={handleChange}
              value={expense.name}
              required
            />
        </div>

        <div className="row2">
          <label className="date-label">Date:</label>
            <input 
              type="date" 
              name="date" 
              id="date"
              className="date"
              onChange={handleChange}
              value={expense.date}
              required
              />

          <label className="amount-label">Amount:</label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="amount"
              placeholder="How much?"
              onChange={handleChange}
              value={expense.amount}
              step=".01"
              required
            />
       
        </div>
        <div className="button">
          <button className="add-button" type="submit">
            Add a new expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
