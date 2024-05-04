import { useState } from "react";
import "../components/FetchRepos/FetchRepos.css";
import FetchRepos from "../components/FetchRepos/FetchRepos";
import CircleDots from "../components/CircleDots/CircleDots";
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
            {/* <RepoCard repo={repos[4]} /> */}
          </div>
        </>
      ) : (
        <div className="loader-container">
          <CircleDots />
        </div>
      )}
    </>
  );
};

export default Projects;
