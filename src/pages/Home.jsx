import { useSelector } from "react-redux";

const Home = () => {
  const test = useSelector((state) => state.theme.mode);

  return <div>Hem {test}</div>;
};

export default Home;
