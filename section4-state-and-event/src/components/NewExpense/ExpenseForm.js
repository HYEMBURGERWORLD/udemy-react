import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInpt] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    setUserInpt({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };
  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInpt({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    setUserInpt({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          {/* 최소, 최대 날짜를 정한 이유 : 나중에 필터링 기능 이용위해  */}
          <input type='date' min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
