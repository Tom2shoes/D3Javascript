// from data.js
let tableData = data;

// YOUR CODE HERE!

let tbody = d3.select("tbody");


tableData.forEach((entry) => {
  let trow = tbody.append("tr");
  Object.entries(entry).forEach(([key, value]) => {
    let tcell = trow.append("td");
    tcell.text(value);
  });
});

// filtering data down
let dateInput = d3.select("#datetime");
let dateButton = d3.select("#filter-btn");

dateButton.on("click", function() {
  d3.event.preventDefault();
  d3.selectAll("td").remove();
  let dateInputValue = dateInput.property("value");
  console.log(dateInputValue);
  let filteredDate = tableData.filter(dates => dates.datetime === dateInputValue);
  console.log(filteredDate);
  
  if (dateInputValue === "") {
    tableData.forEach((entry) => {
      let trow = tbody.append("tr");
      Object.entries(entry).forEach(([key, value]) => {
        let tcell = trow.append("td");
        tcell.text(value);
      });
    });
  }

  filteredDate.forEach((entry) => {
    let trow = tbody.append("tr");
    Object.entries(entry).forEach(([key, value]) => {
      let tcell = trow.append("td");
      tcell.text(value);
    });
  });
});


