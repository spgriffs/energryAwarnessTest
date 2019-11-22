"using strict";

// load status [0 - not loaded, 1 - loading, 2 - loaded and read]
let itemList = [
  { label: "Alarmclock", filename: "Alarmclock", loadOnStart: false, loadStatus: 0 },
  // { label: "Amplifier", filename: "Amplifier", loadOnStart: true, loadStatus: 0 },
  { label: "Bean To Cup Coffee Maker", filename: "BeanToCupCoffeemaker", loadOnStart: false, loadStatus: 0 },
  { label: "Bread Cutter", filename: "Breadcutter", loadOnStart: false, loadStatus: 0 },
  { label: "Cd Player", filename: "CdPlayer", loadOnStart: false, loadStatus: 0 },
  // { label: "Charger PSP", filename: "Charger-PSP", loadOnStart: false, loadStatus: 0 }, // TODO get columns with dashes to work
  // { label: "Charger Smartphone", filename: "Charger-Smartphone", loadOnStart: false, loadStatus: 0 },
  { label: "Coffee Maker", filename: "Coffeemaker", loadOnStart: false, loadStatus: 0 },
  { label: "Cooking Stove", filename: "Cookingstove", loadOnStart: false, loadStatus: 0 },
  { label: "Digital Tv Receiver", filename: "DigitalTvReceiver", loadOnStart: false, loadStatus: 0 },
  { label: "Dishwasher", filename: "Dishwasher", loadOnStart: false, loadStatus: 0 },
  { label: "Dvd Player", filename: "DvdPlayer", loadOnStart: false, loadStatus: 0 },
  { label: "Ethernet Switch", filename: "EthernetSwitch", loadOnStart: false, loadStatus: 0 },
  { label: "Freezer", filename: "Freezer", loadOnStart: false, loadStatus: 0 },
  { label: "Iron", filename: "Iron", loadOnStart: false, loadStatus: 0 },
  { label: "Lamp", filename: "Lamp", loadOnStart: false, loadStatus: 0 },
  { label: "Laundry Dryer", filename: "LaundryDryer", loadOnStart: false, loadStatus: 0 },
  { label: "Microwave Oven", filename: "MicrowaveOven", loadOnStart: false, loadStatus: 0 },
  // { label: "Monitor CRT", filename: "Monitor-CRT", loadOnStart: false, loadStatus: 0 },
  // { label: "Monitor TFT", filename: "Monitor-TFT", loadOnStart: false, loadStatus: 0 },
  { label: "Multi-media Center", filename: "Multimediacenter", loadOnStart: false, loadStatus: 0 },
  // { label: "PC Desktop", filename: "PC-Desktop", loadOnStart: false, loadStatus: 0 }, 
  // { label: "PC Laptop", filename: "PC-Laptop", loadOnStart: false, loadStatus: 0 },
  { label: "Playstation3", filename: "Playstation3", loadOnStart: false, loadStatus: 0 },
  { label: "Printer", filename: "Printer", loadOnStart: false, loadStatus: 0 },
  { label: "Projector", filename: "Projector", loadOnStart: false, loadStatus: 0 },
  { label: "Refrigerator", filename: "Refrigerator", loadOnStart: false, loadStatus: 0 },
  { label: "Remote Desktop", filename: "RemoteDesktop", loadOnStart: false, loadStatus: 0 },
  { label: "Router", filename: "Router", loadOnStart: false, loadStatus: 0 },
  { label: "Solar Thermal System", filename: "SolarThermalSystem", loadOnStart: false, loadStatus: 0 },
  { label: "Subwoofer", filename: "Subwoofer", loadOnStart: false, loadStatus: 0 },
  { label: "Toaster", filename: "Toaster", loadOnStart: false, loadStatus: 0 },
  // { label: "TV CRT", filename: "TV-CRT", loadOnStart: false, loadStatus: 0 },
  // { label: "TV LCD", filename: "TV-LCD", loadOnStart: false, loadStatus: 0 },
  { label: "USB Harddrive", filename: "USBHarddrive", loadOnStart: false, loadStatus: 0 },
  { label: "USB Hub", filename: "USBHub", loadOnStart: false, loadStatus: 0 },
  { label: "Vacuum Cleaner", filename: "VacuumCleaner", loadOnStart: false, loadStatus: 0 },
  { label: "Video Projector", filename: "VideoProjector", loadOnStart: false, loadStatus: 0 },
  { label: "Washing Machine", filename: "Washingmachine", loadOnStart: false, loadStatus: 0 },
  { label: "Water Boiler", filename: "WaterBoiler", loadOnStart: false, loadStatus: 0 },
  { label: "Water Fountain", filename: "WaterFountain", loadOnStart: false, loadStatus: 0 },
  { label: "Water Kettle", filename: "WaterKettle", loadOnStart: false, loadStatus: 0 },
  { label: "Xmas Lights", filename: "XmasLights", loadOnStart: false, loadStatus: 0 }
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

  let calendar = d3.select("#calendar").selectAll("svg").selectAll("g").selectAll("rect").data(days).enter().append("g");

    calendar.append("rect").attr("width", "5%").attr("height", "45%").style("fill", "#8D230F")
        .on("click", function () {
            console.log(d3.select(this)["_groups"][0][0]["className"]["baseVal"]);
            if(d3.select(this)["_groups"][0][0]["className"]["baseVal"] === "rectSelected"){
                console.log("found class");
                d3.select(this).attr("class", "");
            }else{
                console.log("no class");
                d3.select(this).attr("class", "rectSelected");
            }
        })
        .on("mouseover", function () {
            d3.select(this).style("fill", "#af6557");
            d3.select(this).style("cursor", "pointer");
        })
        .on("mouseout", function () {
            d3.select(this).style("fill", "#8D230F");
            d3.select(this).style("cursor", "default");
        })

    ;

  let rec = calendar
      .append("rect")
      .attr("width", "12.5%")
      .attr("height", "45%")
      .attr("x", function (d, i) {
        return (((13 * i) + .5 + 5) + "%");
      })
      .attr("day", function (d) {
          return d.name;
      })
      .style("fill", "#8D230F")
      .on("click", function () {
          console.log(d3.select(this)["_groups"][0][0]["className"]["baseVal"]);
          if(d3.select(this)["_groups"][0][0]["className"]["baseVal"] === "rectSelected"){
              console.log("found class");
              d3.select(this).attr("class", "");
          }else{
              console.log("no class");
              d3.select(this).attr("class", "rectSelected");
          }
      })
      .on("mouseover", function () {
        d3.select(this).style("fill", "#af6557");
        d3.select(this).style("cursor", "pointer");
      })
      .on("mouseout", function () {
        d3.select(this).style("fill", "#8D230F");
        d3.select(this).style("cursor", "default");
      })
  ;
    calendar.append("text").text(function (d) {
      if(typeof d !== 'undefined')
      {
          return d.name;
      }else{
          return "Week"
      }
      })
      .attr("x", function (d, i) {
        return (((13 * i) + 7) + "%");
      })
      .attr("y","8px")
  ;

  drawInit();
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("main").style.visibility = "hidden";
  document.getElementById("content").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("content").style.marginLeft = "0";
  document.getElementById("main").style.visibility = "visible";
}
