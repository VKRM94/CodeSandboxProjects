import LowerSection from "./components/LowerSection/LowerSection";
import UpperSection from "./components/UpperSection/UpperSection";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="upperSection">
        {/* <div>1</div>
        <div>2</div> */}
        <UpperSection />
      </div>
      <div className="lowerSection">
        {/* <div>3</div>
        <div>4</div> */}
        <LowerSection />
      </div>
    </div>
  );
}
