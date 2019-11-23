"using strict";

// load status [0 - not loaded, 1 - loading, 2 - loaded and read]
let itemList = [
  { label: "Alarmclock", filename: "Alarmclock", loadOnStart: false, loadStatus: 0 },
  { label: "Amplifier", filename: "Amplifier", loadOnStart: false, loadStatus: 0 },
  { label: "Bean To Cup Coffee Maker", filename: "BeanToCupCoffeemaker", loadOnStart: false, loadStatus: 0 },
  { label: "Bread Cutter", filename: "Breadcutter", loadOnStart: false, loadStatus: 0 },
  { label: "Cd Player", filename: "CdPlayer", loadOnStart: false, loadStatus: 0 },
  { label: "Charger PSP", filename: "Charger_PSP", loadOnStart: false, loadStatus: 0 },
  { label: "Charger Smartphone", filename: "Charger_Smartphone", loadOnStart: false, loadStatus: 0 },
  { label: "Coffee Maker", filename: "Coffeemaker", loadOnStart: false, loadStatus: 0 },
  { label: "Cooking Stove", filename: "Cookingstove", loadOnStart: false, loadStatus: 0 },
  { label: "Digital Tv Receiver", filename: "DigitalTvReceiver", loadOnStart: false, loadStatus: 0 },
  { label: "Dishwasher", filename: "Dishwasher", loadOnStart: false, loadStatus: 0 },
  { label: "Dvd Player", filename: "DvdPlayer", loadOnStart: false, loadStatus: 0 },
  { label: "Ethernet Switch", filename: "EthernetSwitch", loadOnStart: false, loadStatus: 0 },
  { label: "Freezer", filename: "Freezer", loadOnStart: false, loadStatus: 0 },
  { label: "Iron", filename: "Iron", loadOnStart: false, loadStatus: 0 },
  { label: "Lamp", filename: "Lamp", loadOnStart: false, loadStatus: 0 },
  // { label: "Laundry Dryer", filename: "LaundryDryer", loadOnStart: false, loadStatus: 0 },
  // { label: "Microwave Oven", filename: "MicrowaveOven", loadOnStart: false, loadStatus: 0 },
  { label: "Monitor CRT", filename: "Monitor_CRT", loadOnStart: false, loadStatus: 0 },
  // { label: "Monitor TFT", filename: "Monitor-TFT", loadOnStart: false, loadStatus: 0 },
  { label: "Multi-media Center", filename: "Multimediacenter", loadOnStart: false, loadStatus: 0 },
  // { label: "PC Desktop", filename: "PC_Desktop", loadOnStart: false, loadStatus: 0 },
  // { label: "PC Laptop", filename: "PC_Laptop", loadOnStart: false, loadStatus: 0 },
  { label: "Playstation3", filename: "Playstation3", loadOnStart: false, loadStatus: 0 },
  // { label: "Printer", filename: "Printer", loadOnStart: false, loadStatus: 0 },
  // { label: "Projector", filename: "Projector", loadOnStart: false, loadStatus: 0 },
  // { label: "Refrigerator", filename: "Refrigerator", loadOnStart: false, loadStatus: 0 },
  // { label: "Remote Desktop", filename: "RemoteDesktop", loadOnStart: false, loadStatus: 0 },
  // { label: "Router", filename: "Router", loadOnStart: false, loadStatus: 0 },
  // { label: "Solar Thermal System", filename: "SolarThermalSystem", loadOnStart: false, loadStatus: 0 },
  // { label: "Subwoofer", filename: "Subwoofer", loadOnStart: false, loadStatus: 0 },
  // { label: "Toaster", filename: "Toaster", loadOnStart: false, loadStatus: 0 },
  // { label: "TV CRT", filename: "TV_CRT", loadOnStart: false, loadStatus: 0 },
  // { label: "TV LCD", filename: "TV_LCD", loadOnStart: false, loadStatus: 0 },
  // { label: "USB Harddrive", filename: "USBHarddrive", loadOnStart: false, loadStatus: 0 },
  // { label: "USB Hub", filename: "USBHub", loadOnStart: false, loadStatus: 0 },
  // { label: "Vacuum Cleaner", filename: "VacuumCleaner", loadOnStart: false, loadStatus: 0 },
  // { label: "Video Projector", filename: "VideoProjector", loadOnStart: false, loadStatus: 0 },
  // { label: "Washing Machine", filename: "Washingmachine", loadOnStart: false, loadStatus: 0 },
  // { label: "Water Boiler", filename: "WaterBoiler", loadOnStart: false, loadStatus: 0 },
  // { label: "Water Fountain", filename: "WaterFountain", loadOnStart: false, loadStatus: 0 },
  // { label: "Water Kettle", filename: "WaterKettle", loadOnStart: false, loadStatus: 0 },
  // { label: "Xmas Lights", filename: "XmasLights", loadOnStart: false, loadStatus: 0 }
];

function getItemLoadStatus(filename) {
  var item = _.find(itemList, function (i) {
    return i.filename === filename;
  });
  return item.loadStatus;
}

function setItemLoadStatus(filename, status) {
  var idx = _.findIndex(itemList, function (i) {
    return i.filename === filename;
  });
  itemList[idx].loadStatus = status;
}

let days = [
    {name: "Sunday", value: "100"},
    {name: "Monday", value: "100"},
    {name: "Tuesday", value: "100"},
    {name: "Wednesday", value: "100"},
    {name: "Thursday", value: "100"},
    {name: "Friday", value: "100"},
    {name: "Saturday", value: "100"}
];

function pageInit() {

  var itemSelection = d3.select("#mySidebar").selectAll("label").data(itemList);
  itemSelection.enter()
    .append("label")
    .html(d => {
      // load a number of sets initially
      if (d.loadOnStart) {
        onItemChecked({checked: true, value: d.filename, label: d.label});
        return `<input type="checkbox" checked value="${d.filename}" onclick="onItemChecked(this)" /> ${d.label}`;
      }
      return `<input type="checkbox" value="${d.filename}" onclick="onItemChecked(this)" /> ${d.label}`;
    })
    ;

  drawCalender();

  drawInit();
}
