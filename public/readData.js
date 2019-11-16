"use strict";

// format [{label: data: []}....]
//$ python -m SimpleHTTPServer 8080
let g_dataset = {};

function onItemChecked(item){
  console.log("checked:" + item.value + " - reading in data...");
  if (item.checked) {
    readInDataItem(item.value, item.label);
  } else {
    // TODO remove data from dataset - set that it is not selected
  }
}

function readInDataItem(itemName, label){
  // TODO iterate through each directory and load all
  // files inside
  /*
  "<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN"><html>
    <title>Directory listing for /data/Alarmclock/</title>
    <body>
    <h2>Directory listing for /data/Alarmclock/</h2>
    <hr>
    <ul>
    <li><a href="dev_59AC89_2011.09.01.csv">dev_59AC89_2011.09.01.csv</a>
    <li><a href="dev_59AC89_2011.09.02.csv">dev_59AC89_2011.09.02.csv</a>
    <li><a href="dev_59AC89_2011.09.03.csv">dev_59AC89_2011.09.03.csv</a>
    <li><a href="dev_59AC89_2011.09.04.csv">dev_59AC89_2011.09.04.csv</a>
    <li><a href="dev_59AC89_2011.09.05.csv">dev_59AC89_2011.09.05.csv</a>
    </ul>
    <hr>
    </body>
    </html>
    " 
  */
  $.ajax({
    url: `/data/${itemName}/`,
    success: function(data){
      var found = $(data).find("li > a");
      // console.log("checked:" + itemName + " - reading in data...");
      // _.each(found, function (d) {
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
            // Data format: {day, time, val, valAverage}
  
            var dayData = _.map(fileData, function (row) {
              var str1 = row[_.keys(row)[0]].split(";");
              var dateStr = str1[0].split(" ");
              return {day: dateStr[0], time: dateStr[1], 
                      val: parseInt(str1[1]), valAverage: parseInt(str1[2])};
            });
            
            if (g_dataset[itemName]) { // if the item is already defined
              g_dataset[itemName].days.push(dayData);
            } else {
              g_dataset[itemName] = {label: label, selected: true, days: []};
              g_dataset[itemName].days.push(dayData);
            }
            console.log(`read data: ${itemName} file ${fileCount} of ${found.length}`);
            fileCount++;
          });
        }
    }
  }); 
}