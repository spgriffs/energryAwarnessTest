"use strict";

/*
# python 2
python -m SimpleHTTPServer
# python 3
python -m http.server
*/

// global dataset
let g_dataset = {};

let areaChartId = "area-chart";

Date.prototype.addHours = function(h){
  this.setHours(this.getHours()+h);
  return this;
}

function onItemChecked(item){
  console.log("checked:" + item.value + " - reading in data...");
  if (item.checked) {
    readInDataItem(item.value, onDataUpdate, areaChartId);
  } else {
    setAsUnselected(item.value, onDataUnselected);
  }
  // console.log("got here");
}

function getDateObj(str) {
  var dateStr = str.split(" ");
  var dateArray = dateStr[0].split("/");
  var timeArray = dateStr[1].split(":");
  // new Date(year, month, day, hours, minutes, seconds, milliseconds);
  return new Date(
    parseInt(dateArray[2]),
    parseInt(dateArray[0]),
    parseInt(dateArray[1]),
    parseInt(timeArray[0]),
    parseInt(timeArray[1]),
    parseInt(timeArray[2]));
}

// returns the data vales array
// with hour sum intervals
function getDataWithHourResolution(keys, valuesArray, numHours = 1) {
  // go to the next interval and sum all of the
  // values for each interval
  var curDate = new Date(valuesArray[0].date.getTime());
  var hoursResRecords = [];
  curDate.addHours(1);
  var sumObj = createNewDatasetObject("", curDate);
  _.each(valuesArray, function(secondResRecord) {
    if (secondResRecord.date > curDate) {
      // update hour record
      hoursResRecords.push(sumObj);
      curDate.addHours(1);
      sumObj = createNewDatasetObject("", curDate);
    }
    // otherwise add the record values
    _.each(keys, function(key) {
      sumObj[key] += secondResRecord[key];
    })
  });

  // add the final sum object for the last hour
  hoursResRecords.push(sumObj);

  return hoursResRecords;
}

function getStartAndEndDates() {
  var keys = _.keys(g_dataset);
  var startDate = new Date();
  var endDate = new Date();
  if (keys.length > 0) {
   startDate = getDateObj(keys[0]);
   endDate = getDateObj(keys[keys.length -1]);
  }
  return {
    start: startDate,
    end: endDate,
  };
}

function readInDataItem(itemName, onNewDataCallback, optElementId = undefined){
  if (optElementId) startSpinner(optElementId);
  if (getItemLoadStatus(itemName) > 0) return;
  setItemLoadStatus(itemName, 1); // loading
  d3.csv(`compressedData/${itemName}.csv`).then(function (fileData){
    _.each(fileData, function(row) {
      var str1 = row[_.keys(row)[0]].split(";");
      if (!g_dataset[str1[0]]) {
        g_dataset[str1[0]] = createNewDatasetObject(str1[0]);
      }
      g_dataset[str1[0]][itemName] = parseInt(str1[2]);
    });
    setItemLoadStatus(itemName, 2); // loaded
    onNewDataCallback(itemName);
  });
}

function setAsUnselected(itemName, onUnselectedCallback) {
  // TODO remove the data from the dataset
  // g_dataset[itemName].selected = false;
  onUnselectedCallback(itemName);
}

function createNewDatasetObject(dateStr, optDate = null) {
  // just some data for a proof of concept
  // var startVal = 4 + Math.round((2 * Math.random()));
  var startVal = 0;
  // Uncomment the following lines this is just
  // for testing purposes
  return {
     date: optDate ? new Date(optDate.getTime()) : getDateObj(dateStr),
     Alarmclock: startVal,
     Amplifier: startVal,
     BeanToCupCoffeemaker: startVal,
     Breadcutter: startVal,
     CdPlayer: startVal,
     Charger_PSP: startVal,
     Charger_Smartphone: startVal,
     Coffeemaker: startVal,
     Cookingstove: startVal,
     DigitalTvReceiver: startVal,
     Dishwasher: startVal,
     DvdPlayer: startVal,
     EthernetSwitch: startVal,
     Freezer: startVal,
     Iron: startVal,
     Lamp: startVal,
    //  LaundryDryer: startVal,
    //  MicrowaveOven: startVal,
     Monitor_CRT: startVal,
    //  Monitor_TFT: startVal,
     Multimediacenter: startVal,
    //  PC_Desktop: startVal,
    //  PC_Laptop: startVal,
     Playstation3: startVal,
    //  Printer: startVal,
    //  Projector: startVal,
    //  Refrigerator: startVal,
    //  RemoteDesktop: startVal,
    //  Router: startVal,
    //  SolarThermalSystem: startVal,
    //  Subwoofer: startVal,
    //  Toaster: startVal,
    //  TV-CRT: startVal,
    //  TV-LCD: startVal,
    //  USBHarddrive: startVal,
    //  USBHub: startVal,
    //  VacuumCleaner: startVal,
    //  VideoProjector: startVal,
    //  Washingmachine: startVal,
    //  WaterBoiler: startVal,
    //  WaterFountain: startVal,
    //  WaterKettle: startVal,
    //  XmasLights: startVal,
  };
}