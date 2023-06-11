import './Card.css';

// wrapper component
function Card(props) {
  // 이 사용자 지정 컴포넌트에 있는 열고 닫는 태그 사이에 있는 컨텐츠

  // card(디폴트 클래스값), props.className
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
