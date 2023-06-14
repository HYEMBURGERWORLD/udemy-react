import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // const [관리되고 있는 값, 나중에 새로운 값을 설정하기 위해 호출할 수 있는 함수] = useState(초기값)
  // const [title, setTitle] = useState(props.title);

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
