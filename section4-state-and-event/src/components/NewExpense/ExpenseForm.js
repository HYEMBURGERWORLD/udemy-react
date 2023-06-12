import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          {/* 최소, 최대 날짜를 정한 이유 : 나중에 필터링 기능 이용위해  */}
          <input type='date' min='2019-01-01' step='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
