import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // props는 어떤 이름으로 사용해도 되지만 보통 정확한 의미 전달을 위해 props를 사용한다
  // 우리가 얻는 속성에 대한 모든 값을 가진 객체를 의미한다.

  return (
    <div className='expense-item'>
      {/* date 객체이기 때문에 문자열로 출력 불가능 -> Error -> toISOString 메서드 사용 */}
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
