import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./FetchRepos.css";
const FetchRepos = () => {
  const API_USER = "abergstream";
  const API_URL = `https://api.github.com/users/${API_USER}/repos`;
  // Denna ska bort sen, endast här för att inte göra för många anrop
  const local = JSON.parse(localStorage.getItem("github"));

  const [repos, setRepos] = useState(local);
  const [sortBy, setSortBy] = useState("PUSHED");
  if (!local) {
    useEffect(() => {
      async function getRepos() {
        try {
          const response = await fetch(API_URL);
          const data = await response.json();
          console.log(data);
          data.message === "Not Found"
            ? toast.error(`Could not find user: ${API_USER}`, {
                duration: 8000,
              })
            : toast.success("API loaded.", { icon: "👌🏻", duration: 3000 });
          setRepos(data);
        } catch (error) {
          toast.error(`Could not connect to ${API_URL}`, {
            duration: 8000,
            style: {
              minWidth: "520px",
            },
          });
        }
      }
      getRepos();
    }, []);
  }
  const sortRepos = (data, sortByFn, order) => {
    const sortedData = [...data];
    switch (sortByFn) {
      case "PUSHED":
        sortedData.sort((a, b) => {
          return order == "ASC"
            ? new Date(b.pushed_at) - new Date(a.pushed_at)
            : new Date(a.pushed_at) - new Date(b.pushed_at);
        });
        break;
      case "UPDATED":
        sortedData.sort((a, b) => {
          return order == "ASC"
            ? new Date(b.updated_at) - new Date(a.updated_at)
            : new Date(a.updated_at) - new Date(b.updated_at);
        });
        break;
    }

    return sortedData;
  };
  return (
    <div>
      {repos ? (
        <>
          <div className="repo-container">
            <div
              className="repo__date"
              onClick={() => {
                setRepos(sortRepos(repos, "PUSHED"));
                setSortBy("PUSHED");
              }}
            >
              Pushed at
            </div>
            <div className="repo__name">Repository name</div>

            <div
              className="repo__date"
              onClick={() => {
                setRepos(
                  sortRepos(
                    repos,
                    "UPDATED",
                    sortBy === "UPDATED"
                      ? repos[0].updated_at > repos[repos.length - 1].updated_at
                        ? "ASC"
                        : "DESC"
                      : "ASC"
                  )
                );

                setSortBy("UPDATED");
              }}
            >
              Updated at
            </div>
          </div>
          {repos.map((repo) => {
            return (
              <div key={repo.id} className="repo-container">
                <div className="repo__date">{formatDate(repo.pushed_at)}</div>
                <div className="repo__name">
                  <a href={repo.html_url} target="_blank">
                    {repo.name}
                  </a>
                </div>

                <div className="repo__date">{formatDate(repo.updated_at)}</div>
              </div>
            );
          })}
        </>
      ) : (
        <>Loading..</>
      )}
    </div>
  );
};

const formatDate = (date) => {
  const newDate = date.substring(0, 10);
  const newTime = date.substring(11, 16);
  return `${newDate} ${newTime}`;
};

export default FetchRepos;
