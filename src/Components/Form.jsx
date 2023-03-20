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
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="crypto">Crypto</option>
            <option value="other">Other</option>
          </select>

          <label className="name-label">
            Name:
            <input
              type="text"
              name="name"
              className="expense"
              placeholder="What was it?"
            />
          </label>
        </div>
        <div className="row2">
          <label className="date-label">
            Date:
            <input type="date" name="date" className="date" />
          </label>
          <label className="amount-label">
            Amount:
            <input
              type="text"
              name="amount"
              className="amount"
              placeholder="How much?"
            />
          </label>
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
