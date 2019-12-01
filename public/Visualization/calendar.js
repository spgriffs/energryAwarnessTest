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
    cal_dataSet += "{\n";
    for(let i in dayta){
        cal_dataSet += dayta[i]['date'].valueOf() + ": ";
        cal_dataSet += sumAllActiveData(dayta[i]) + "\n";
    }
    cal_dataSet += "}";
    //console.log(g_dataset);
    console.log(cal_dataSet);

}
function drawCalender(){

    //updateCalDataSet();
    cal.init({
        itemSelector: "#cal-heatmap",
        domain: "month",
        subDomain: "x_day",
        start: new Date(2010, 0, 5),
        data: "datas-years.json",
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
}