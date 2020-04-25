import { formatDate } from "./helpers/formaData";
import { compareUpdateWithUpdateAttribute } from "./helpers/compareDates";
import { updateDescription } from "./helpers/updateDescription";

import { RepoRow } from "./repoRow";

interface Repo {
  name: string;
  description: string;
  updated_at: string;
  html_url: string;
}

export const createTable = () => {
  const table = document.createElement("table");
  table.innerHTML = `
     <tr>
      <th>Title</th>
      <th>Description</th>
      <th>Update</th>
      <th>url</th>
    </tr>
  `;

  return table;
};

export const createDiv = (user: string) => {
  const div = document.createElement("div");
  div.innerHTML = `
     <h1>${user}</h1>
  `;
  return div;
};

const createRow = (
  name: string,
  description: string,
  date: string,
  url: string,
  table: HTMLElement
) => {
  const updatedDescription = updateDescription(description);
  const row = new RepoRow(name, updatedDescription, date, url);
  const rowElement = row.createRow();

  table.appendChild(rowElement);
};

export const createRowIfUpdateAttributePass = (
  repos: Repo[],
  updateAttribute: string,
  table: HTMLElement
) => {
  repos.map((repo: Repo) => {
    const { name, description, updated_at, html_url } = repo;

    const formatedDate = formatDate(updated_at);

    const isUpdateAfterUpdateAttribute = compareUpdateWithUpdateAttribute(
      updateAttribute,
      formatedDate
    );

    isUpdateAfterUpdateAttribute &&
      createRow(name, description, formatedDate, html_url, table);
  });
};
