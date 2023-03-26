import "./UpperSection.css";
import Header from "../../shared/Header/Header";
import Content from "../../shared/Content/Content";
import Button from "../../shared/Button/Button";
import Carousel from "../../shared/Carousel/Carousel";

function UpperSection() {
  const title = "Lorem ipsum dolor sit amet, est mollis evertitur ut,";
  const content =
    "Lorem ipsum dolor sit amet, est mollis evertitur ut, clita utinam quaeque ad sed, an legere concludaturque eum. Duo omnis solet dissentiet te, ea sed quis erat reprehendunt, cetero consetetur philosophia mel in.";
  return (
    <>
      <div className="upperLeftHalf">
        <h3
          style={{ textTransform: "uppercase", height: "20px" }}
          className="upperHeading"
        >
          Lorem Ipsum Dolor
        </h3>
        <div className="upperTitle">
          <Header title={title} />
        </div>
        <div className="upperContent">
          <Content content={content} />
        </div>
        <div className="buttonContainer">
          <Button buttonText={"Learn More"} />
        </div>
      </div>
      <div className="upperRightHalf">
        <Carousel />
      </div>
    </>
  );
}

export default UpperSection;
