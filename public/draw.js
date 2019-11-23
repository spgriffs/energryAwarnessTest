"using strict";

// file for drawing d3 managed svgs

// globals
let chartMargin = {top: 50, right: 50, bottom: 50, left: 50},
    chartWidth = 1000 - chartMargin.left - chartMargin.right,
    chartHeight = 700 - chartMargin.top - chartMargin.bottom;

let xChartAxis;
let yChartAxis;
let chartSvg;
let chartLayers;

var xChartScale = d3.scaleTime()
    .domain([new Date, new Date])
    .nice(d3.timeWeek)
    .range([chartMargin.left, chartWidth - chartMargin.right]);

let yChartScale = d3.scaleLinear()
    .domain([0, 1600])
    .range([chartHeight, 0]);

var area = d3.area()
    .x(d => xChartScale(d.data.date))
    .y0(d => yChartScale(d[0]))
    .y1(d => yChartScale(d[1]))
    ;

// color palette
var chartColorScale = d3.scaleOrdinal()
.domain(_.map(itemList, "filename"))
.range(_.concat(d3.schemeTableau10, d3.schemeCategory10));
// .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf'])
// ;


function drawInit() {
  chartSvg = d3.select('#areaChartSvg')
  .attr("width", chartWidth + chartMargin.left + chartMargin.right)
  .attr("height", chartHeight + chartMargin.top + chartMargin.bottom)
  .append("g")
  .attr("id", "chartGroup")
  .attr("transform", `translate(${chartMargin.left} ,${chartMargin.top})`)
  ;

  chartLayers = chartSvg.append('g')
  .attr("transform", `translate(${chartMargin.left}, 0)`)
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

// function rescaleYAxis(series) { // may not need this
//   yChartScale = d3.scaleLinear()
//     .domain([0, d3.max(series, d => d3.max(d, d => d[1]))]).nice()
//     .range([chartHeight - chartMargin.bottom, chartMargin.top])
//     ;

//   yChartAxis.attr("transform", `translate(${chartMargin.left},0)`)
//   .call(d3.axisLeft(yChartScale))
//   .call(g => g.select(".domain").remove())
//   .call(g => g.select(".tick:last-of-type text").clone()
//       .attr("x", 3)
//       .attr("text-anchor", "start")
//       .attr("font-weight", "bold")
//       .text(data.y))
//       ;
// }

function onDataUpdate(listName) {
  // rescale the chart to the new dates
  rescaleXAxis();
  // var values = _.values(g_dataset);
  var values = _.values(g_dataset);
  var keys = _.keys(values[0]).slice(1);
  var hourResValues = getDataWithHourResolution(keys, values, 12);
  console.log(listName + " has new data has been loaded and is ready to draw");
  var series = d3.stack().keys(keys)(hourResValues);
  chartLayers.selectAll("path")
    .data(series)
    .join("path")
      .attr("fill", ({key}) => chartColorScale(key))
      .attr("d", area)
    .append("title")
      .text(({key}) => key);
  stopSpinner();
}

function onDataUnselected(listName) {
  console.log(listName + " has been unselected");
  // TODO update the vis by removing all unselected data

  // rescale the chart to the new dates
  rescaleXAxis();

}
