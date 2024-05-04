import "./ToggleSwitch.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store";

const ToggleSwitch = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const localTheme = localStorage.getItem("theme");
  document.body.classList = `theme-${theme}`;

  return (
    <>
      <input
        id="toggleTheme"
        type="checkbox"
        onChange={() => {
          dispatch(toggleTheme());
          localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
        }}
        checked={
          localTheme
            ? localTheme === "dark"
              ? true
              : false
            : theme === "dark"
            ? true
            : false
        }
      />
      <label htmlFor="toggleTheme" className="toggle__label"></label>
    </>
  );
};

export default ToggleSwitch;
