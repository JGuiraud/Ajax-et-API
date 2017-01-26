(function(){
	console.log('Start');

	$('#sendAjaxBtn').click(function(){

	$.ajax({
    url:"http://api.openweathermap.org/data/2.5/weather?q=toulouse,fr&appid=18dbc1f6fec0ac7d427f0afadd23f99e&units=metric",
    success: function(data){
        var temp = data.main.temp
        var humidity = data.main.humidity
        var lon = data.coord.lon
        var lat = data.coord.lat
        $("#temp").append(
            "<li> la température est de "+temp+ " °C. </li><li> L'humidité est de " +humidity+ " % </li><li> La longitude est "+ lon + ".</li><li> La latitude est "+lat+".</li>"
            )
    }
})
	});

})();