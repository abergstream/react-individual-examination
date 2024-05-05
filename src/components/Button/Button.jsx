import "./Button.css";
const Button = ({ text, url }) => {
  return (
    <button
      className="button"
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      {text}
    </button>
  );
};

export default Button;
