import { useState, useEffect } from "react";
import "./Carousel.css";
import Image from "../Image/Image";
import VerticalProgressBar from "../VerticalProgressBar/VerticalProgressBar";

const Carousel = () => {
  const data = [
    "https://chester.co.nz/wp-content/uploads/2019/02/kimon-maritz-183501-unsplash.jpg",
    "https://images.unsplash.com/photo-1510671413300-d4f969094b15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80",
    "https://images.unsplash.com/photo-1671627618084-d4eb0d72dd96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  ];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const carouselClickHandler = (idx) => {
    setCurrentIdx(idx);
    if (idx === 0) {
      setProgress(0);
    } else if (idx === 1) {
      setProgress(75);
    } else if (idx === 2) {
      setProgress(140);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIdx === data?.length - 1) {
        return setCurrentIdx(0);
      }
      return setCurrentIdx(currentIdx + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIdx, data.length]);

  useEffect(() => {
    if (!isPaused) {
      const progInterval = setInterval(() => {
        setProgress((progress) => progress + 20);
      }, 1100);
      return () => clearInterval(progInterval);
    }
  }, [progress, isPaused]);

  useEffect(() => {
    if (progress > 120) {
      setIsPaused(true);
      const pauseInterval = setTimeout(() => {
        setIsPaused(false);
        setProgress(0);
      }, 3850);
      return () => clearInterval(pauseInterval);
    }
  }, [progress, isPaused]);

  return (
    <>
      <div className="carouselContainer">
        {data?.map((item, index) => {
          return (
            <div
              className="carouselItem"
              style={{ transform: `translateY(-${currentIdx * 600}px)` }}
              key={index}
            >
              <Image
                src={item}
                className="carouselImage"
                height={"560px"}
                width={"400px"}
              />
            </div>
          );
        })}
      </div>
      <ul className="carouselClickContainer">
        {data?.map((item, index) => {
          return (
            <li
              className={`carouselClickItem ${
                index === currentIdx ? "active" : ""
              }`}
              onClick={() => carouselClickHandler(index)}
              key={index}
            >
              0{index + 1}
            </li>
          );
        })}
      </ul>
      <VerticalProgressBar completed={progress} />
    </>
  );
};

export default Carousel;
