import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import FormHeader from './Components/FormHeader';
import Form from './Components/Form';
import Table from './Components/Table';

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
      <FormHeader />
      <Form 
      expense ={expense}
      handleAddExpense={handleAddExpense}
      handleChange={handleChange}
      />
      <Table expenses={expenses} 
      handleDeleteExpense={handleDeleteExpense}
      />
    </div>
  );
}

export default App;
