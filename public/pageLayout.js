"using strict";

let itemList = [
  { label: "Alarmclock", dir: "Alarmclock", loadOnStart: true },
  { label: "Amplifier", dir: "Amplifier", loadOnStart: false },
  { label: "Bean To Cup Coffee Maker", dir: "BeanToCupCoffeemaker", loadOnStart: false },
  { label: "Bread Cutter", dir: "Breadcutter", loadOnStart: false },
  { label: "Cd Player", dir: "CdPlayer", loadOnStart: false },
  { label: "Charger PSP", dir: "Charger-PSP", loadOnStart: false },
  { label: "Charger Smartphone", dir: "Charger-Smartphone", loadOnStart: false },
  { label: "Coffee Maker", dir: "Coffeemaker", loadOnStart: false },
  { label: "Cooking Stove", dir: "Cookingstove", loadOnStart: false },
  { label: "Digital Tv Receiver", dir: "DigitalTvReceiver", loadOnStart: false },
  { label: "Dishwasher", dir: "Dishwasher", loadOnStart: false },
  { label: "Dvd Player", dir: "DvdPlayer", loadOnStart: false },
  { label: "Ethernet Switch", dir: "EthernetSwitch", loadOnStart: false },
  { label: "Freezer", dir: "Freezer", loadOnStart: false },
  { label: "Iron", dir: "Iron", loadOnStart: false },
  { label: "Lamp", dir: "Lamp", loadOnStart: false },
  { label: "Laundry Dryer", dir: "LaundryDryer", loadOnStart: false },
  { label: "Microwave Oven", dir: "MicrowaveOven", loadOnStart: false },
  { label: "Monitor CRT", dir: "Monitor-CRT", loadOnStart: false },
  { label: "Monitor TFT", dir: "Monitor-TFT", loadOnStart: false },
  { label: "Multi-media Center", dir: "Multimediacenter", loadOnStart: false },
  { label: "PC Desktop", dir: "PC-Desktop", loadOnStart: false },
  { label: "PC Laptop", dir: "PC-Laptop", loadOnStart: false },
  { label: "Playstation3", dir: "Playstation3", loadOnStart: false },
  { label: "Printer", dir: "Printer", loadOnStart: false },
  { label: "Projector", dir: "Projector", loadOnStart: false },
  { label: "Refrigerator", dir: "Refrigerator", loadOnStart: false },
  { label: "Remote Desktop", dir: "RemoteDesktop", loadOnStart: false },
  { label: "Router", dir: "Router", loadOnStart: false },
  { label: "Solar Thermal System", dir: "SolarThermalSystem", loadOnStart: false },
  { label: "Subwoofer", dir: "Subwoofer", loadOnStart: false },
  { label: "Toaster", dir: "Toaster", loadOnStart: false },
  { label: "TV CRT", dir: "TV-CRT", loadOnStart: false },
  { label: "TV LCD", dir: "TV-LCD", loadOnStart: false },
  { label: "USB Harddrive", dir: "USBHarddrive", loadOnStart: false },
  { label: "USB Hub", dir: "USBHub", loadOnStart: false },
  { label: "Vacuum Cleaner", dir: "VacuumCleaner", loadOnStart: false },
  { label: "Video Projector", dir: "VideoProjector", loadOnStart: false },
  { label: "Washing Machine", dir: "Washingmachine", loadOnStart: false },
  { label: "Water Boiler", dir: "WaterBoiler", loadOnStart: false },
  { label: "Water Fountain", dir: "WaterFountain", loadOnStart: false },
  { label: "Water Kettle", dir: "WaterKettle", loadOnStart: false },
  { label: "Xmas Lights", dir: "XmasLights", loadOnStart: false }
];

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
        onItemChecked({checked: true, value: d.dir, label: d.label});
        return `<input type="checkbox" checked value="${d.dir}" onclick="onItemChecked(this)" /> ${d.label}`;
      }
      return `<input type="checkbox" value="${d.dir}" onclick="onItemChecked(this)" /> ${d.label}`;
    })
    ;

  let calandar = d3.select("#calendar").selectAll("svg").selectAll("g").selectAll("rect").data(days);

  calandar.enter()
      .append("rect")
      .attr("width", "13%")
      .attr("height", "25%")
      .attr("x", function (d, i) {
        return (13 * i) + "%";
      })
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
