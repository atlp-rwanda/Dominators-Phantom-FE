import "./customButton.css";

function CustomButton(props) {
  return (
    <button className={props.classes} onClick={props.onclick}>
      {props.children}
    </button>
  );
}
export default CustomButton;
