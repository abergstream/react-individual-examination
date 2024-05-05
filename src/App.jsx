import "./App.css";
import { Toaster } from "react-hot-toast";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  // const notify = () => toast.success("Here is your toast.");
  const theme = useSelector((state) => state.theme.mode);
  return (
    <BrowserRouter>
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
      <section className="wrapper">
        <Nav />
        <section className="main__wrapper">
          <Routes>
            <Route index element={<Home />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/about"} element={<About />} />
          </Routes>{" "}
        </section>
      </section>
    </BrowserRouter>
  );
}

export default App;
