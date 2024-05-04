import { useEffect, useState } from "react";
import "./RepoCard.css";
const RepoCard = ({ repo }) => {
  const [contributors, setContributors] = useState();
  const [commits, setCommits] = useState();
  const [languages, setLanguages] = useState();
  useEffect(() => {
    const countContributors = async () => {
      const response = await fetch(
        `https://api.github.com/repos/abergstream/${repo.name}/contributors?page&per_page=100`
      );
      const data = await response.json();
      setContributors(data.length);
    };
    const countCommits = async () => {
      const response = await fetch(
        `https://api.github.com/repos/abergstream/${repo.name}/commits?page=1&per_page=100`
      );
      const data = await response.json();
      setCommits(data.length);
    };
    const getLanguages = async () => {
      const response = await fetch(
        `https://api.github.com/repos/abergstream/${repo.name}/languages`
      );
      const data = await response.json();
      setLanguages(data);
    };
    countContributors();
    countCommits();
    getLanguages();
  }, []);
  let totalCharacters = 0;
  for (let key in languages) {
    totalCharacters += languages[key];
  }
  return (
    <section className="repo-wrapper">
      <div className="repo-card__header-container">
        <h3 className="repo-card__header">{repo.name}</h3>
        <img className="repo-card__logo" src="./github-mark-white.png" />
      </div>
      <div className="repo-card">
        <div className="repo-card__flex repo-card__flex--60">
          <div className="repo-info-container">
            <h3 className="repo-info__heading">{commits}</h3>
            Commits
          </div>
          <div className="repo-info-container">
            <h3 className="repo-info__heading">{contributors}</h3>
            Contributors
          </div>
        </div>
        <section className="repo__languages-wrapper">
          <div className="repo__languages-container repo__language-container--list">
            {languages &&
              Object.entries(languages).map(([language, count]) => (
                <div
                  key={language}
                  className={`repo__language-list repo__language-list--${language.toLowerCase()}`}
                >
                  <strong>{language}</strong>:{" "}
                  {parseFloat((count / totalCharacters) * 100).toFixed(1)}%
                </div>
              ))}
          </div>

          <div className="repo__languages-container">
            {languages &&
              Object.entries(languages).map(([language, count]) => (
                <div
                  key={language}
                  className={`repo__language repo__language--${language.toLowerCase()}`}
                  style={{
                    "--i":
                      parseFloat((count / totalCharacters) * 100).toFixed(1) +
                      "%",
                  }}
                ></div>
              ))}
          </div>
        </section>
        <section className="repo-card__flex">
          <div className="repo-card__date">
            Updated: {formatDate(repo.updated_at)}
          </div>
          <div className="repo-card__date">
            Created: {formatDate(repo.created_at)}
          </div>
        </section>
      </div>
    </section>
  );
};
const formatDate = (date) => {
  const newDate = date.substring(0, 10);
  return newDate;
};
export default RepoCard;
