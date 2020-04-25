import { getElementAttribute } from "./getElementsFromDocument";
import { fetchReposInfo } from "./fetchReposInfo";
import {
  createDiv,
  createTable,
  createRowIfUpdateAttributePass
} from "./createElements";

const createTablesWithRepos = () => {
  const attributes = getElementAttribute();

  attributes.map(async ({ userAttribute, updateAttribute }) => {
    const div = createDiv(userAttribute);
    const table = createTable();

    const response = await fetchReposInfo(userAttribute);

    if (response) {
      createRowIfUpdateAttributePass(response, updateAttribute, table);
      div.appendChild(table);
      document.body.appendChild(div);
    }
  });
};

createTablesWithRepos();
