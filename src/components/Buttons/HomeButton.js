import "./customButton.css";

function HomeButton({ children }) {
  return (
    <div>
      <button className="btn btn-green">{children}</button>
    </div>
  );
}

export default HomeButton;
