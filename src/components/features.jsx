import React from "react";

export const Features = (props) => {
  const images = [
    'url("../img/slide1.png")',
    'url("../img/slide2.png")',
  ];
  const delay = 5000;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === images?.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
    return (
      <div className="container" style={{overflow: "hidden"}}>
        <div id="features" className="slideShow">
        <div className="col-md-6 col-md-offset-3">
          <h2>Khách hàng đã tin tưởng hợp tác cùng chúng tôi</h2>
        </div>
        </div>
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}>
          {images.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
              style={{ background: images[index], backgroundPosition:"center center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
            ></div>
          ))}
        </div>
  
        <div className="slideshowImages">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowImage${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }