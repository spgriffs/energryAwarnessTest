"using strict";

// globals
let chartMargin = {top: 50, right: 50, bottom: 50, left: 50},
    chartWidth = 1000 - chartMargin.left - chartMargin.right,
    chartHeight = 700 - chartMargin.top - chartMargin.bottom;

let xChartAxis;
let yChartAxis;
let chartSvg;

var xChartScale = d3.scaleTime()
    .domain([new Date, new Date])
    .nice(d3.timeWeek)
    .range([0, chartWidth]);

let yChartScale = d3.scaleLinear()
    .domain([0, 160])
    .range([chartHeight, 0]);

function drawInit() {
  chartSvg = d3.select('#areaChartSvg')
  .attr("width", chartWidth + chartMargin.left + chartMargin.right)
  .attr("height", chartHeight + chartMargin.top + chartMargin.bottom)
  .append("g")
  .attr("id", "chartGroup")
  .attr("transform", `translate(${chartMargin.left} ,${chartMargin.top})`)
  ;

  xChartAxis = chartSvg.append('g')
  .attr("transform", `translate(${chartMargin.left}, ${chartHeight})`)
  .call(d3.axisBottom(xChartScale)); 

  yChartAxis = chartSvg.append('g')
  .attr("transform", `translate(${chartMargin.left},0)`)
  .call(d3.axisLeft(yChartScale));
}

function onDataUpdate(listName) {
  console.log(listName + " has new data has been loaded and is ready to draw");
  // TODO update the vis by adding the new data
}

function onDataUnselected(listName) {
  console.log(listName + " has been unselected");
  // TODO update the vis by removing all unselected data
}