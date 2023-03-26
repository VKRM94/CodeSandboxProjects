import { useState, useEffect } from "react";
import VerticalProgressBar from "../VerticalProgressBar/VerticalProgressBar";

const ProgressBar = ({ fixedCompletion }) => {
  const [progress, setProgress] = useState(0);
  const [fixedProg, setFixedProg] = useState(0);

  useEffect(() => {
    const progInterval = setInterval(() => {
      setProgress((progress) => progress + 20);
    }, 1000);

    if (progress > 141) {
      setProgress(0);
    }

    return () => clearInterval(progInterval);
  }, [progress]);

  // My attempt at the progress bar setting to a completion position based on clicking the number
  // The issue here is when we click the number, the height is set but it breaks the timer.

  // If I had to do this over differently, the progress bar would live inside the carousel.
  // I'd have a timer logic running that would dictate the position of the progress bar.

  // useEffect(() => {
  //   if (fixedCompletion === 0) {
  //     setFixedProg(0);
  //   } else if (fixedCompletion === 1) {
  //     setFixedProg(50);
  //   } else if (fixedCompletion === 2) {
  //     setFixedProg(200);
  //   }
  // }, [fixedCompletion]);

  return (
    <VerticalProgressBar completed={progress} />
    // <VerticalProgressBar completed={progress} fixedCompletion={fixedProg} />
  );
};

export default ProgressBar;
