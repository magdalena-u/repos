const getAllReposElements = () => [...document.getElementsByTagName("repos")];

export const getElementAttribute = () => {
  const elements = getAllReposElements();

  return elements.map(element => {
    const userAttribute = element.getAttribute("data-user") || "";
    const updateAttribute = element.getAttribute("data-update") || "";

    return { userAttribute, updateAttribute };
  });
};
