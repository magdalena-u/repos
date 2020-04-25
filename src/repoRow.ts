export class RepoRow {
  name: string;
  description: string;
  updated: string;
  url: string;

  constructor(name: string, description: string, updated: string, url: string) {
    this.name = name;
    this.description = description;
    this.updated = updated;
    this.url = url;
  }

  createRow() {
    const tableRow = document.createElement("tr");

    tableRow.innerHTML = `
       <td>${this.name}</td>
       <td>${this.description}</td>
       <td>${this.updated}</td>
       <td><a href=${this.url}/>click</td>
      `;

    return tableRow;
  }
}
