const apiBase = "https://api.github.com";

export const fetchReposInfo = (user: string) =>
  fetch(`${apiBase}/users/${user}/repos`)
    .then(res =>
      res.ok
        ? res.json()
        : alert(
            `Sorry, there is no possibility to display data of user ${user}`
          )
    )
    .catch(() => {
      alert("Something goes wrong");
    });
