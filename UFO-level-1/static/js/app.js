// from data.js
var tableData = data;
// YOUR CODE HERE!
var tbody = d3.select("tbody");
var tr = d3.select("tr");


var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);

data.forEach(function(ufoReport) {
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});


function runEnter() {
    d3.event.preventDefault(); 
    var inputElement = d3.select("#datetime");
    var inputElement1 = d3.select("#city");
    var inputElement2 = d3.select("#state");
    var inputElement3 = d3.select("#country");
    var inputElement4 = d3.select("#shape");


    var inputValue = inputElement.property("value");
    var inputValue1 = inputElement1.property("value");
    var inputValue2 = inputElement2.property("value");
    var inputValue3 = inputElement3.property("value");
    var inputValue4 = inputElement4.property("value");

    console.log(inputValue);
    console.log(inputValue1);
    console.log(inputValue2);
    console.log(inputValue3);
    console.log(inputValue4);
    // console.log(tableData);

    tbody.html("");
    //var row = tbody.append("tr");


    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    filteredData.forEach(function(ufoReport) {
       var row = tbody.append("tr");
    
        Object.entries(ufoReport).forEach(function([key, value]) {
            //let td1 = tr[1].getRElementsByTagName('td')[1];
            //console.log(td1);
            var cell = row.append("td");
            cell.text(value);
        });
    });

  

    var filteredData1 = tableData.filter(tableData => tableData.city === inputValue1);
    filteredData1.forEach(function(ufoReport) {
        var row = tbody.append("tr");
    
        Object.entries(ufoReport).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });


    var filteredData2 = tableData.filter(tableData => tableData.state === inputValue2);
    filteredData2.forEach(function(ufoReport) {
       var row = tbody.append("tr");
    
        Object.entries(ufoReport).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    var filteredData3 = tableData.filter(tableData => tableData.country === inputValue3);
    filteredData3.forEach(function(ufoReport) {
        var row = tbody.append("tr");
    
        Object.entries(ufoReport).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });


    var filteredData4 = tableData.filter(tableData => tableData.shape === inputValue4);
    filteredData4.forEach(function(ufoReport) {
        var row = tbody.append("tr");
    
        Object.entries(ufoReport).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
 
    console.log(filteredData);
    console.log(filteredData1);
    console.log(filteredData2);
    console.log(filteredData3);
    console.log(filteredData4);

  

}

