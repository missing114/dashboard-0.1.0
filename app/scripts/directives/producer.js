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
        console.log(worksDataToPlot);
        var width = 900;
        var height = 600;
        var padding = 20;
        var pathClass = "path";
        var xScale, yScale, xAxisGen, yAxisGen, lineFun;
            
        var d3 = $window.d3;
        console.log(d3);
        var rawSvg = element.find("svg")[0];
        var svg = d3.select(rawSvg);

        function setChartParameters(){
          xScale = d3.scale.linear()
            .domain([0, d3.max(worksDataToPlot, function (d) {
              // console.log(d.comments);
              return d.comments;
            })])
            .range([padding + 5, rawSvg.clientWidth - 3*padding]);

          yScale = d3.scale.linear()
            .domain([0, d3.max(worksDataToPlot, function (d) {
              // console.log(parseInt(d.likes.replace(',', '')));
              return parseInt(d.likes.replace(',', ''));
            })])
            .range([rawSvg.clientHeight - padding, 0]);

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
             .attr("transform", "translate(30,580)")
             .call(xAxisGen);

          svg.append("svg:g")
            .attr("class", "y axis")
            .attr("transform", "translate(55,0)")
            .call(yAxisGen);

          // Add the scatterplot
          svg.selectAll("dot")
            .data(worksDataToPlot)
            .enter().append("circle")
              .attr("r", 10)
              .attr("cx", function(d) { return xScale(d.comments); })
              .attr("cy", function(d) { return yScale(d.likes.replace(',', '')); })
              .attr("transform", "translate(30, 0)");

          // now add titles to the axes
          svg.append("text")
              .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
              .attr("transform", "translate("+ (padding/2) +","+(height/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
              .text("Likes");

          svg.append("text")
              .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
              .attr("transform", "translate("+ (width/2) +","+(height-(padding/3))+")")  // centre below axis
              .text("Comments");
        }

        drawLineChart();
       
      });
    } 
  };
  return directiveDefinitionObject;
});