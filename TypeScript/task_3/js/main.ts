/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create an object with type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert the row and obtain the new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the entity with an added age parameter
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23
};

// Execute update and delete procedures matching instructions
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
