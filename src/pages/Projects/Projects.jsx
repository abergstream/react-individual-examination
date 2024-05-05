import { useState } from "react";
import "../../components/FetchRepos/FetchRepos.css";
import FetchRepos from "../../components/FetchRepos/FetchRepos";
import RotatingCircle from "../../components/RotatingCircle/RotatingCircle";
import RepoCard from "../../components/RepoCard/RepoCard";
import "./Projects.css";
import Button from "../../components/Button/Button";
const Projects = () => {
  const [repos, setRepos] = useState(null);

  return (
    <>
      <FetchRepos setRepos={setRepos} repos={repos} />
      <section>
        <h2 className="projects__header">Hey there!</h2>
        <div>
          <p className="projects__text">
            Here's three of my projects that have been recently updated on
            GitHub.
          </p>
          <p className="projects__text">
            They're the result of some of my recent work and passion projects.
          </p>
          <p className="projects__text">
            If you're interested in exploring them further or checking out more
            of what I've been up to,
          </p>
          <p className="projects__text">
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
