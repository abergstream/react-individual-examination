import { useState } from "react";
import "../components/FetchRepos/FetchRepos.css";
import FetchRepos from "../components/FetchRepos/FetchRepos";
import RotatingCircle from "../components/RotatingCircle/RotatingCircle";
import RepoCard from "../components/RepoCard/RepoCard";

const Projects = () => {
  const [repos, setRepos] = useState(null);

  return (
    <>
      <FetchRepos setRepos={setRepos} repos={repos} />
      My latest updated repos
      {repos ? (
        <>
          <div className="repo-cards-container">
            {repos.map((repo) => {
              return <RepoCard key={repo.id} repo={repo} />;
            })}
          </div>
        </>
      ) : (
        <div className="loader-container">
          <RotatingCircle
            circleColor={"var(--primary-text-color"}
            circleDiameter={100}
            circleBorderSize={15}
            circleSpeed={1}
          />
        </div>
      )}
    </>
  );
};

export default Projects;
