function renderData(content) {
  const dataElement = document.createElement('td');
  dataElement.textContent = content;
  return dataElement;
}

function renderRow(rowData) {
  return rowData.map(renderData).reduce((rowElement, cell) => {
    rowElement.appendChild(cell);
    return rowElement;
  }, document.createElement('tr'));
}

export function renderTable(table) {
  return table.map(renderRow).reduce((tableElement, row) => {
    tableElement.appendChild(row);
    return tableElement;
  }, document.createElement('table'));
}
