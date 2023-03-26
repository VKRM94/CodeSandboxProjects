import "./Content.css";

function Content({ content = "contentText" }) {
  return <p className="sectionContent">{content}</p>;
}

export default Content;
