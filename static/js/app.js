// from data.js
const tableData = data;

// YOUR CODE HERE!

const tbody = d3.select("tbody");


function fillTable(subTable) {
  subTable.forEach((entry) => {
  const appRow = tbody.append("tr");
  Object.entries(entry).forEach(([key, value]) => {
    const appCell = appRow.append("td");
    appCell.text(value);
  });
})};

// filtering data down
const dateInput = d3.select("#datetime");
const cityInput = d3.select("#city");
const stateInput = d3.select("#state");
const countryInput = d3.select("#country");
const shapeInput = d3.select("#shape");
const filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {
  d3.event.preventDefault();
  d3.selectAll("td").remove();

  

  let dateInputValue = dateInput.property("value");
  let cityInputValue = cityInput.property("value");
  let stateInputValue = stateInput.property("value");
  let countryInputValue = countryInput.property("value");
  let shapeInputValue = shapeInput.property("value");
  

  let filterObject = {
    dateKey: dateInputValue,
    cityKey: cityInputValue,
    stateKey: stateInputValue,
    countryKey: countryInputValue,
    shapeKey: shapeInputValue
  };

  if (dateInputValue !== "") {
    tableData.filter(dates => dates.datetime === dateInputValue);
  }

  let filteredDate = tableData.filter(dates => dates.datetime === dateInputValue);

  
  if (dateInputValue === "") {
    fillTable(tableData);
  }

  else fillTable(filteredDate);

  console.log(filterObject);
  console.log(Object.values(filterObject));


});

fillTable(tableData);


