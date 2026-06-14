interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alex",
  lastName: "Mercer",
  age: 24,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "San Francisco"
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

const headerRow: HTMLTableRowElement = document.createElement("tr");
const headerName: HTMLTableHeaderCellElement = document.createElement("th");
headerName.textContent = "First Name";
const headerLocation: HTMLTableHeaderCellElement = document.createElement("th");
headerLocation.textContent = "Location";

headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
tbody.appendChild(headerRow);

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement("tr");
  
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  
  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
