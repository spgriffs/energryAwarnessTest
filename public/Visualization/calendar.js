
let days = [
    {name: "Sunday", value: "100"},
    {name: "Monday", value: "100"},
    {name: "Tuesday", value: "100"},
    {name: "Wednesday", value: "100"},
    {name: "Thursday", value: "100"},
    {name: "Friday", value: "100"},
    {name: "Saturday", value: "100"}
];

function drawCalender(){
    var cal = new CalHeatMap();
	cal.init({});
    
    // let calendar = d3.select("#calendar").selectAll("svg").selectAll("g").selectAll("rect").data(days).enter().append("g");

    // calendar.append("rect").attr("width", "5%").attr("height", "45%").style("fill", "#8D230F")
    //     .on("click", function () {
    //         console.log(d3.select(this)["_groups"][0][0]["className"]["baseVal"]);
    //         if(d3.select(this)["_groups"][0][0]["className"]["baseVal"] === "rectSelected"){
    //             console.log("found class");
    //             d3.select(this).attr("class", "");
    //         }else{
    //             console.log("no class");
    //             d3.select(this).attr("class", "rectSelected");
    //         }
    //     })
    //     .on("mouseover", function () {
    //         d3.select(this).style("fill", "#af6557");
    //         d3.select(this).style("cursor", "pointer");
    //     })
    //     .on("mouseout", function () {
    //         d3.select(this).style("fill", "#8D230F");
    //         d3.select(this).style("cursor", "default");
    //     })

    // ;

    // let rec = calendar
    //     .append("rect")
    //     .attr("width", "12.5%")
    //     .attr("height", "45%")
    //     .attr("x", function (d, i) {
    //         return (((13 * i) + .5 + 5) + "%");
    //     })
    //     .attr("day", function (d) {
    //         return d.name;
    //     })
    //     .style("fill", "#8D230F")
    //     .on("click", function () {
    //         console.log(d3.select(this)["_groups"][0][0]["className"]["baseVal"]);
    //         if(d3.select(this)["_groups"][0][0]["className"]["baseVal"] === "rectSelected"){
    //             console.log("found class");
    //             d3.select(this).attr("class", "");
    //         }else{
    //             console.log("no class");
    //             d3.select(this).attr("class", "rectSelected");
    //         }
    //     })
    //     .on("mouseover", function () {
    //         d3.select(this).style("fill", "#af6557");
    //         d3.select(this).style("cursor", "pointer");
    //     })
    //     .on("mouseout", function () {
    //         d3.select(this).style("fill", "#8D230F");
    //         d3.select(this).style("cursor", "default");
    //     })
    // ;
    // calendar.append("text").text(function (d) {
    //     if(typeof d !== 'undefined')
    //     {
    //         return d.name;
    //     }else{
    //         return "Week"
    //     }
    // })
    //     .attr("x", function (d, i) {
    //         return (((13 * i) + 7) + "%");
    //     })
    //     .attr("y","8px")
    // ;
}