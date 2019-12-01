/*
{
	"946721039":1,
	"946706853":1,
	"946706340":1
}
 */

let cal_dataSet = "";
let cal = new CalHeatMap();

function sumAllActiveData(data){
    console.log(data);
    let sum = 0;
    for(let i in g_itemList){
        //console.log(i);
        //console.log(g_itemList[i]);
        console.log(data[g_itemList[i]['filename']]);
        sum += parseInt(data[g_itemList[i]['filename']]);
    }
    console.log("Sum");
    console.log(sum);
    return sum;
}

function updateCalDataSet(){
    let dayta = getDataWithDayResolution();
    console.log(dayta);
    console.log("start");
    cal_dataSet = [];
    for(let i in dayta){
        let day = {};
        day.date = Math.round(dayta[i]['date']()/1000);
        day.value = sumAllActiveData(dayta[i]);
        cal_dataSet.push(day);
        //cal_dataSet += dayta[i]['date'].valueOf() + ": ";
        //cal_dataSet += sumAllActiveData(dayta[i]) + "\n";
    }
    //console.log(g_dataset);
    console.log("cal_dataSet :)");
    console.log(cal_dataSet);
    var temp = new Date("12/1/2019");
    console.log(temp.getTime());

}
function drawCalender(){

    updateCalDataSet();
    cal.init({
        itemSelector: "#cal-heatmap",
        domain: "month",
        subDomain: "x_day",
        start: new Date(2010, 0, 5),
        data: cal_dataSet,
        cellSize: 20,
        cellPadding: 5,
        domainGutter: 20,
        range: 20,
        domainDynamicDimension: true,
        //previousSelector: "#example-g-PreviousDomain-selector",
        //nextSelector: "#example-g-NextDomain-selector",
        //domainLabelFormat: function(date) {
        //    moment.lang("en");
        //    return moment(date).format("MMMM").toUpperCase();
        //},
        subDomainTextFormat: "%d",
        legend: [20, 40, 60, 80]
    });
    // extent(padding[bottom, top], )
    let brush = d3.brushX().extent([[30, 0],[cal.graphDim.width, cal.graphDim.height]]).on("end", () => {
        // TODO implement to update the data
        console.log("brush end");
  });

  cal.root.append("g").attr("class", "brush").call(brush);
}