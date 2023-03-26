import "./Header.css";

function Header({ title = "headerTitle" }) {
  return <h1 className="sectionTitle">{title}</h1>;
}

export default Header;
