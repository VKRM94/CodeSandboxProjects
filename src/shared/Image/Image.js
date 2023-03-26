import "./Image.css";

const Image = ({
  src = "noImage",
  height = "auto",
  width = "auto",
  className = ""
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${src})`, width: width, height: height }}
      className={`imageDiv ${className}`}
    />
  );
};

export default Image;
