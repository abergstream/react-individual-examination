import { useEffect } from "react";
import toast from "react-hot-toast";
const FetchRepos = ({ repos, setRepos }) => {
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
  return null;
};

const sortByDate = (sortedData) => {
  sortedData.sort((a, b) => {
    return new Date(b.updated_at) - new Date(a.updated_at);
  });
  return sortedData;
};

export default FetchRepos;
