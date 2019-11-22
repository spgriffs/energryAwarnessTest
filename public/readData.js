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

function createNewDatasetObject(dateStr) {
  // just some data for a proof of concept
  var startVal = 4 + Math.round((2 * Math.random()));
  // Uncomment the following lines this is just
  // for testing purposes
  return {
     date: getDateObj(dateStr),
     Alarmclock: startVal,     
    //  Amplifier: startVal,
     BeanToCupCoffeemaker: startVal,
     Breadcutter: startVal,
     CdPlayer: startVal,
    //  Charger: startVal,
    //  Charger: startVal,
     Coffeemaker: startVal,
     Cookingstove: startVal,
     DigitalTvReceiver: startVal,
     Dishwasher: startVal,
     DvdPlayer: startVal,
     EthernetSwitch: startVal,
     Freezer: startVal,
     Iron: startVal,
     Lamp: startVal,
     LaundryDryer: startVal,
     MicrowaveOven: startVal,
    //  Monitor: startVal,
    //  Monitor: startVal,
     Multimediacenter: startVal,
    //  PC: startVal,
    //  PC: startVal,
    //  Playstation3: startVal,
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