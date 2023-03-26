import AccordionItem from "./AccordionItem";
import "./Accordion.css";

const Accordion = ({ tiles }) => {
  return (
    <ul className="accordion">
      {tiles?.map((tile, index) => (
        <AccordionItem key={index} item={tile} />
      ))}
    </ul>
  );
};

export default Accordion;
