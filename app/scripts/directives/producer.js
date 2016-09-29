angular.module('dashboard').
directive('pointChart', function ($parse, $window) {
  var directiveDefinitionObject = {
    restrict: 'EA',
    template: "<svg width='900' height='600'></svg>",
    replace: false,
    scope: {worksData: '=chartData'},
    link: function (scope, element, attrs) {
      scope.$watch('worksData', function() {
        var worksDataToPlot = scope[attrs.chartData];
        // console.log(worksDataToPlot);
        var width = 900;
        var height = 600;
        var padding = 80;
        var xScale, yScale, xAxisGen, yAxisGen;
    
        var d3 = $window.d3;
        // console.log(d3);
        var rawSvg = element.find("svg")[0];
        var svg = d3.select(rawSvg);
        var color = d3.scale.category20();

        var tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("font-size", "24px")
        .text("a simple tooltip");

        function setChartParameters(){
          xScale = d3.scale.linear()
            .domain([0, d3.max(worksDataToPlot, function (d) {
              return d.comments;
            })])
            .range([padding, rawSvg.clientWidth - padding]);

          yScale = d3.scale.linear()
            .domain([0, d3.max(worksDataToPlot, function (d) {
              return parseInt(d.likes.replace(',', ''));
            })])
            .range([rawSvg.clientHeight - 1.5*padding, 0.5*padding]);

          xAxisGen = d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .ticks(worksDataToPlot.length - 1);

          yAxisGen = d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .ticks(worksDataToPlot.length - 1);
        }
           
        function drawLineChart() {

          setChartParameters();

          svg.append("svg:g")
             .attr("class", "x axis")
             .attr("transform", "translate(30,500)")
             .style("font-size", "16px")
             .call(xAxisGen);

          svg.append("svg:g")
            .attr("class", "y axis")
            .attr("transform", "translate(90,0)")
            .style("font-size", "16px")
            .call(yAxisGen);

          // Add the scatterplot
          svg.selectAll("circle")
            .data(worksDataToPlot)
            .enter().append("circle")
            .attr("r", 10)
            .attr("cx", function(d) { return xScale(d.comments); })
            .attr("cy", function(d) { return yScale(d.likes.replace(',', '')); })
            .attr("transform", "translate(30, 0)")
            .on("mouseover", function() {
              // console.log(d3.select(this));
              return tooltip.style("visibility", "visible").text(
                "Comments: " + d3.select(this)[0][0].__data__.comments + ", " +
                "Likes: " + d3.select(this)[0][0].__data__.likes
                );})
            .on("mousemove", function() {
              return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
            .on("mouseout", function() {
              return tooltip.style("visibility", "hidden");})
            .style("opacity", .0)
            .transition()
            .duration(1500)
            .style("opacity", 1) 
            .attr("fill", function(d,i){return color(i);});
;

          // svg.selectAll("circle")
          //   .on("mouseover", function() {
          //     console.log(d3.select(this));
          //     return tooltip.style("visibility", "visible").text("test");})
          //   .on("mousemove", function() {
          //     return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
          //   .on("mouseout", function() {
          //     return tooltip.style("visibility", "hidden");});

          d3.selectAll(".tick > text").style("font-size", "14px");

          // now add titles to the axes
          svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate("+ (padding/4) +","+(height/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
            .text("Likes")
            .attr("font-size", "20px");

          svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate("+ (width/2) +","+(height-(padding/2))+")")  // centre below axis
            .text("Comments")
            .attr("font-size", "20px");
        }

        drawLineChart();
       
      });
    } 
  };
  return directiveDefinitionObject;
});