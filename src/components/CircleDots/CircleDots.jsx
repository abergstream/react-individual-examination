import "./CircleDots.css";

const CircleDots = ({ circleDotColor, circleDotSize, circleDotDiameter }) => {
  return (
    <div
      className="circle-dots-container"
      style={{
        "--dot-color": circleDotColor ? circleDotColor : "#777",
        "--circle-dot-diameter": circleDotDiameter
          ? circleDotDiameter * 0.75 + "px"
          : "60px",
        "--circle-dot-size": circleDotDiameter
          ? circleDotDiameter * 0.1 + "px"
          : "8px",
      }}
    >
      <span className="circle-dots__dot" style={{ "--i": 1 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 2 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 3 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 4 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 5 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 6 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 7 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 8 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 9 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 10 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 11 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 12 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 13 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 14 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 15 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 16 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 17 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 18 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 19 }}></span>
      <span className="circle-dots__dot" style={{ "--i": 20 }}></span>
    </div>
  );
};

export default CircleDots;
