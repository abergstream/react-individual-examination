import "./Projects.css";
import RotatingCircle from "../../components/RotatingCircle/RotatingCircle";
import RepoCard from "../../components/RepoCard/RepoCard";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Button from "../../components/Button/Button";
const Projects = ({ repos, setRepos }) => {
  const API_USER = "abergstream";
  const API_URL = `https://api.github.com/users/${API_USER}/repos?page=1&per_page=300`;
  useEffect(() => {
    const getRepos = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        data.message === "Not Found"
          ? toast.error(`Could not find user: ${API_USER}`, {
              duration: 8000,
            })
          : toast.success("API loaded.", { icon: "👌🏻", duration: 3000 });
        const sortedRepos = sortByDate([...data]).slice(0, 3);
        setRepos(sortedRepos);
        console.log(sortedRepos);
      } catch (error) {
        toast.error(`Could not connect to ${API_URL}`, {
          duration: 8000,
          style: {
            minWidth: "520px",
          },
        });
      }
    };
    if (!repos) {
      getRepos();
    }
  }, [API_URL, repos]);
  return (
    <>
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
const sortByDate = (sortedData) => {
  sortedData.sort((a, b) => {
    return new Date(b.updated_at) - new Date(a.updated_at);
  });
  return sortedData;
};
export default Projects;
