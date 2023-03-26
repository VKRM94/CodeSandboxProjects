import "./Infobox.css";

function Infobox({ title = "infoTitle", content = "infoContent" }) {
  return (
    <div className="infoElement">
      <h2 className="infoTitle">{title}</h2>
      <p className="infoContent">{content}</p>
    </div>
  );
}

export default Infobox;
