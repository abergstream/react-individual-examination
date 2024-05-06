import { useSelector } from "react-redux";
import "./Home.css";
const Home = () => {
  const test = useSelector((state) => state.theme.mode);

  return (
    <div className="home-container">
      <h2 className="page__header">Hey there!</h2>
      <div>
        <p className="page__text">
          I'm Andreas Bergström, a social enthusiast with a knack for turning
          ideas into creations.
        </p>
        <p className="page__text">
          You could say I have <em>Hobby-ADHD</em> – my mind constantly buzzing
          with new projects, from coding adventures to crafting exquisite
          cutting boards and festive Christmas ornaments.
        </p>
        <p className="page__text">
          Driven by curiosity and fueled by creativity, I thrive on the thrill
          of bringing ideas to life, one project at a time.
        </p>
        <p className="page__text">
          Join me on this journey of exploration and innovation!
        </p>
      </div>
    </div>
  );
};

export default Home;
