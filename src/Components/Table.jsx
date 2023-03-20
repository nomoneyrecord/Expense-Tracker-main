import React from "react";

function Table({ expenses, handleDeleteExpense }) {
  return (
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
              <td className="Amount">
                {parseFloat(expense.amount).toFixed(2)}
              </td>
              <td className="Delete">
                <button
                  className="delete-button"
                  onClick={() => handleDeleteExpense(index)}
                  position
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
