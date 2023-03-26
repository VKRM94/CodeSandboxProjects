import "./LowerSection.css";
import Header from "../../shared/Header/Header";
import Content from "../../shared/Content/Content";
import Infobox from "../Infobox/Infobox";
import Image from "../../shared/Image/Image";
import Accordion from "../../shared/Accordion/Accordion";

function LowerSection() {
  const title = "Wissenswertes";
  const content =
    "Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condimentum nisl non gravida in. ";

  const tiles = [
    {
      title: "Bewirb dich bei uns massa",
      content:
        "Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condtum."
    },
    {
      title: "Morbi amet aenean",
      content:
        "Repeat1: Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condtum."
    },
    {
      title: "Nunc condimentum nis",
      content:
        "Repeat2: Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condtum."
    }
  ];
  return (
    <>
      <div className="lowerHeading">
        <div className="lowerTitle">
          <Header title={title} />
        </div>
        <div className="lowerContent">
          <Content content={content} />
        </div>
      </div>
      <div className="lowerBody">
        <div className="lowerLeftHalf">
          <div className="leftImageContainer">
            <Image
              src={
                "https://chester.co.nz/wp-content/uploads/2019/02/kimon-maritz-183501-unsplash.jpg"
              }
              height={"280px"}
            />
          </div>
          <div className="rightImageContainer">
            <Image
              src={
                "https://images.unsplash.com/photo-1510671413300-d4f969094b15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"
              }
              height={"45%"}
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1671627618084-d4eb0d72dd96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }
              height={"45%"}
            />
          </div>
        </div>
        <div className="lowerRightHalf">
          <div className="infoBox">
            <Infobox title={"2260"} content={"Integer massa"} />
            <div className="verticalSeparator" />
            <Infobox title={"1324"} content={"Nisl non gravidl"} />
          </div>
          <div className="accordionContainer">
            <Accordion tiles={tiles} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LowerSection;
