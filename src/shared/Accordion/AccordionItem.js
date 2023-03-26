import { useRef, useState } from "react";
import "./AccordionItem.css";

const AccordionItem = ({ item }) => {
  const { title, content } = item;
  const [clicked, setClicked] = useState(false);

  const contentEl = useRef();
  const tileHeight = contentEl?.current?.scrollHeight + 10;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordionItem ${clicked ? "active" : ""}`}>
      <span
        style={clicked ? {} : { visibility: "hidden" }}
        className="rightSpan"
      >
        &#8594;
      </span>
      <div className="accordionContent">
        <button
          className="accordionTile"
          onClick={handleToggle}
          style={clicked ? { opacity: "1" } : { opacity: "0.2" }}
        >
          {title ?? "Acc Title"}
          <span className="tileToggle">{clicked ? "—" : "+"} </span>
        </button>
        <div
          ref={contentEl}
          className="contentContainer"
          style={clicked ? { height: tileHeight } : { height: "0px" }}
        >
          <div className="content">{content ?? "Acc Content"}</div>
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
