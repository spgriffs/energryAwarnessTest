"use strict";

// format [{label: data: []}....]
let g_dataset = [];

function onItemChecked(item){
  console.log("checked:" + item.value + " - reading in data...");
  if (item.checked) {
    readInDataItem(item.value);
  } else {
    // TODO remove data from dataset
  }
}

function readInDataItem(itemName, fileLoadedCallback){
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
      _.each(found, function (d) {
        var filename = d.innerHTML;
        d3.csv(`data/${itemName}/${filename}`).then(function (fileData){
          // Example:
          // 0: {01/09/2011 00:00:02;0;0: "01/09/2011 00:00:04;2;0"}
          // console.log("file data ...");
          // TODO parse each file field and place into the data set
          // in a easy way to retrieve it
        });
      });
    }
  }); 
}