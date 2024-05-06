import "./Projects.css";
import "../../components/FetchRepos/FetchRepos.css";
import FetchRepos from "../../components/FetchRepos/FetchRepos";
import RotatingCircle from "../../components/RotatingCircle/RotatingCircle";
import RepoCard from "../../components/RepoCard/RepoCard";

import Button from "../../components/Button/Button";
const Projects = ({ repos, setRepos }) => {
  return (
    <>
      {/* <FetchRepos setRepos={setRepos} repos={repos} /> */}
      <section>
        <h2 className="page__header">My Projects!</h2>
        <div>
          <p className="page__text">
            Here's three of my projects that have been recently updated on
            GitHub.
          </p>
          <p className="page__text">
            If you're interested in exploring them further or checking out more
            of what I've been up to,
          </p>
          <p className="page__text">
            feel free to visit my{" "}
            <Button
              text={"GitHub page"}
              url={"https://github.com/abergstream"}
            />
          </p>
        </div>
      </section>
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
          {/* Show loader (from my github-repo) if api isn't loaded */}
          <RotatingCircle
            circleColor={"var(--primary-text-color"}
            circleDiameter={80}
            circleBorderSize={10}
            circleSpeed={1}
          />
        </div>
      )}
    </>
  );
};

export default Projects;
