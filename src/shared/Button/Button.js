import "./Button.css";

function Button({ buttonText = "buttonText" }) {
  return (
    <button className="profileButton">
      {buttonText}
      <i className="rightArrow" />
    </button>
  );
}

export default Button;
