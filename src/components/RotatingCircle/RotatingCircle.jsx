import "./RotatingCircle.css";

const RotatingCircle = ({
  circleDiameter,
  circleBorderSize,
  circleColor,
  circleSpeed,
}) => {
  return (
    <div
      className="container"
      style={{
        "--circle-color": circleColor ? circleColor : "red",
        "--circle-diameter": circleDiameter ? `${circleDiameter}px` : "50px",
        "--circle-border-size": circleBorderSize
          ? `${circleBorderSize}px`
          : "5px",
        "--rotating-circle-speed": circleSpeed ? `${circleSpeed}s` : "1s",
      }}
    ></div>
  );
};

export default RotatingCircle;
