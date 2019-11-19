"use strict";

// format [{label: data: []}....]
//$ python -m SimpleHTTPServer 8080

// global dataset 
let g_dataset = {};

function onItemChecked(item){
  console.log("checked:" + item.value + " - reading in data...");
  if (item.checked) {
    readInDataItem(item.value, item.label, onDataUpdate);
  } else {
    setAsUnselected(item.value, onDataUnselected);
  }
}

function readInDataItem(itemName, label, onNewDataCallback){
  $.ajax({
    url: `/data/${itemName}/`,
    success: function(data){
      var found = $(data).find("li > a");
        var fileCount = 1;
        for (var i = 0; i < found.length; i++)
        {
          var filename = found[i].innerHTML;
          d3.csv(`data/${itemName}/${filename}`).then(function (fileData){
            // Example input:
            // 0: {01/09/2011 00:00:02;0;0: "01/09/2011 00:00:04;2;0"}
            // 1: {01/09/2011 00:00:02;0;0: "01/09/2011 00:00:04;2;0"}
            // console.log("file data ...");
            // Item Format: {itemName: {label, selected, days: []}}
            // Data format: {date, val, valAverage}
  
            var dayData = _.map(fileData, function (row) {
              var str1 = row[_.keys(row)[0]].split(";");
              var dateStr = str1[0].split(" ");
              // return {day: dateStr[0], time: dateStr[1], 
              //         val: parseInt(str1[1]), valAverage: parseInt(str1[2])};
              var dateArray = dateStr[0].split("/");
              var timeArray = dateStr[1].split(":");
              var date = new Date(
                parseInt(dateArray[2]),
                parseInt(dateArray[1]),
                parseInt(dateArray[0]),
                parseInt(timeArray[0]),
                parseInt(timeArray[1]),
                parseInt(timeArray[2]));
              return {
                date: date, 
                val: parseInt(str1[1]), valAverage: parseInt(str1[2])
              };
            });
            
            if (g_dataset[itemName]) { // if the item is already defined
              g_dataset[itemName].days.push(dayData);
            } else {
              g_dataset[itemName] = {
                startDate: dayData[0].date, // the data is ordered by time
                label: label, 
                selected: true, 
                days: []};
              g_dataset[itemName].days.push(dayData);
            }
            console.log(`read data: ${itemName} file ${fileCount} of ${found.length}`);
            if (fileCount === found.length) {
              g_dataset[itemName].endDate = dayData[dayData.length - 1];
              onNewDataCallback(itemName);
            }
            fileCount++;
          });
        }
    }
  }); 
}

function setAsUnselected(itemName, onUnselectedCallback) {
  g_dataset[itemName].selected = false;
  onUnselectedCallback(itemName);
}