import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import FetchRepos from "../components/FetchRepos/FetchRepos";

const Projects = () => {
  const [sortBy, setSortBy] = useState("pushed_at");
  return (
    <>
      <button
        onClick={() => {
          setSortBy("updated_at");
        }}
      >
        Ändra
      </button>
      <FetchRepos />
    </>
  );
};
export default Projects;
