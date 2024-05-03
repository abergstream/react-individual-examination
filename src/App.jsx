import "./App.css";
import { Toaster } from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "./store";
import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";

function App() {
  // const notify = () => toast.success("Here is your toast.");
  // const test = useSelector((state) => state.theme.mode);
  // const dispatch = useDispatch();
  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "1rem",
            color: "#713200",
            fontSize: "1.6rem",
          },
        }}
      />
      <Nav />

      <section className="main__wrapper">
        <Outlet />
      </section>
    </>
  );
}

export default App;
