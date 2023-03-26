import "./VerticalProgressBar.css";

const VerticalProgressBar = ({ completed, fixedCompletion = null }) => {
  const heightStyle = fixedCompletion ? fixedCompletion : completed;
  return (
    <div className="containerStyles">
      <div
        style={{ height: `${heightStyle}px` }}
        className="fillerStyles"
      ></div>
    </div>
  );
};

export default VerticalProgressBar;
