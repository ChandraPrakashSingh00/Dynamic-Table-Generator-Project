
const table = document.getElementById("dynamicTable");


function addRow() {
  const newRow = table.insertRow(-1);
  const colCount = table.rows[0].cells.length;

  for (let i = 0; i < colCount; i++) {
    const cell = newRow.insertCell(i);
    cell.contentEditable = "true";
    cell.textContent = `Cell ${i + 1}`;
  }
}


function addColumn() {
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    const newCell = rows[i].insertCell(-1);
    newCell.contentEditable = "true";
    newCell.textContent = i === 0
      ? `Header ${rows[i].cells.length}`
      : `Cell ${rows[i].cells.length}`;
  }
}


function removeRow() {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
  } else {
    alert("At least 1 data row is required.");
  }
}

function removeColumn() {
  const totalCols = table.rows[0].cells.length;

  if (totalCols > 1) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
  } else {
    alert("At least 1 column is required.");
  }
}


function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}
