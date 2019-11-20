"using strict";

// file for drawing d3 managed svgs

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

// color palette
var chartColorScale = d3.scaleOrdinal()
.domain(_.map(itemList, "dir"))
.range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf'])
;

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

function rescaleXAxis() {
  var dateSpan = getStartAndEndDates();
  xChartScale = d3.scaleTime()
    .domain([dateSpan.start, dateSpan.end])
    .nice(d3.timeWeek)
    .range([0, chartWidth]);
  xChartAxis.transition().duration(1000).call(d3.axisBottom(xChartScale));
}

function onDataUpdate(listName) {
  console.log(listName + " has new data has been loaded and is ready to draw");
  // rescale the chart to the new dates
  rescaleXAxis();
  // Update area chart TODO
  var keys = _.keys(g_dataset);
  // var stackedData = d3.stack().keys(keys).data(_.values(g_dataset));
  // d3.select("#chartLayers").selectAll("path")
  //   .data(_.values(g_dataset))
  //   .join("path")
  //     .attr("fill", ({key}) => chartColorScale(key))
  //     .attr("d", area)
  //   .append("title")
  //     .text(({key}) => key);
  // ;
}

function onDataUnselected(listName) {
  console.log(listName + " has been unselected");
  // TODO update the vis by removing all unselected data

  // rescale the chart to the new dates
  rescaleXAxis();

}