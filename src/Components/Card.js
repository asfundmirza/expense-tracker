import "./Card.css";
//making custom component for border radius so that we can use whereEver we want

function Card(props) {
  const classes = "card " + props.className; //after 'card(space)' is very important
  return <div className={classes}>{props.children}</div>;
}
export default Card;
