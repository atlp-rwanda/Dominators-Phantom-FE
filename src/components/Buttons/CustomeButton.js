import "./customButton.css";

function CustomButton(props) {
  return <button className={props.classes}>{props.children}</button>;
}
export default CustomButton;
