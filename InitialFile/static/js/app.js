// from data.js
const tableData = data;

// YOUR CODE HERE!
const tbody = d3.select("tbody");

function buildingTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {

        const row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
            cell.text(val);
          }
        );
      });
}