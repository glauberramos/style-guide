 $(function() {
	new Morris.Line({
	  element: 'myfirstchart',
	  data: [
	    { date: '2012-02-10', value: 8 },
	    { date: '2012-02-11', value: 7 },
	    { date: '2012-02-12', value: 5 },
	    { date: '2012-02-13', value: 6 },
	    { date: '2012-02-14', value: 10 },
	    { date: '2012-02-15', value: 6.5 },
	    { date: '2012-02-16', value: 11 },
	    { date: '2012-02-17', value: 9 },
	    { date: '2012-02-18', value: 5.6 },
	    { date: '2012-02-19', value: 7.8 }
	  ],
	  xkey: 'date',
	  ykeys: ['value'],
	  labels: ['Weight'],
	  lineColors: ['#35AAA0'],
	  pointFillColors: ['white'],
	  pointStrokeColors: ['#35AAA0']
	});

	// var data = {
	// 	labels : ["January","February","March","April","May","June","July"],
	// 	datasets : [
	// 		{
	// 			fillColor : "rgba(220,220,220,0.5)",
	// 			strokeColor : "rgba(220,220,220,1)",
	// 			pointColor : "rgba(220,220,220,1)",
	// 			pointStrokeColor : "#fff",
	// 			data : [65,59,90,81,56,55,40]
	// 		},
	// 		{
	// 			fillColor : "rgba(151,187,205,0.5)",
	// 			strokeColor : "rgba(151,187,205,1)",
	// 			pointColor : "rgba(151,187,205,1)",
	// 			pointStrokeColor : "#fff",
	// 			data : [28,48,40,19,96,27,100]
	// 		}
	// 	]
	// }

	// var options = {		
	// 	scaleOverlay : false,
	// 	scaleOverride : false,
	// 	scaleSteps : null,
	// 	scaleStepWidth : null,
	// 	scaleStartValue : null,
	// 	scaleLineColor : "rgba(0,0,0,.1)",
	// 	scaleLineWidth : 1,
	// 	scaleShowLabels : false,
	// 	scaleLabel : "<%=value%>",
	// 	scaleFontFamily : "'Arial'",
	// 	scaleFontSize : 12,
	// 	scaleFontStyle : "normal",
	// 	scaleFontColor : "#666",	
	// 	scaleShowGridLines : true,
	// 	scaleGridLineColor : "rgba(0,0,0,.05)",
	// 	scaleGridLineWidth : 1,	
	// 	bezierCurve : true,
	// 	pointDot : true,
	// 	pointDotRadius : 3,
	// 	pointDotStrokeWidth : 1,
	// 	datasetStroke : true,
	// 	datasetStrokeWidth : 2,
	// 	datasetFill : true,
	// 	animation : true,
	// 	animationSteps : 60,
	// 	animationEasing : "easeOutQuart",
	// 	onAnimationComplete : null
	// }

	// var ctx = document.getElementById("myChart").getContext("2d");
	// var myNewChart = new Chart(ctx).PolarArea(data);
	// var ctx = $("#myChart").get(0).getContext("2d");
	// var myNewChart = new Chart(ctx);
	// new Chart(ctx).Line(data,options);
});