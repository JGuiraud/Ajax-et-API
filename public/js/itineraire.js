(function(){
	console.log('Start');

	$.ajax({
    url:"https://maps.googleapis.com/maps/api/distancematrix/json?origins=Toulouse|&destinations=Saint-Gaudens|&mode=driving&language=fr-FR&key=AIzaSyCKvd6G89ZLLW7l2jJhB6Ip2LNy4FIOfMc",
    success: function(data){
        var duree = data.rows[0].elements[0].duration.text
        var distance = data.rows[0].elements[0].distance.text
        var origin = data.origin_addresses;
        var destination = data.destination_addresses;
        
        $("#infotitle").append("Entre "+origin+" et "+destination+" en voiture :");
        $("#info").append("<li>La durée est de "+duree+".</li><li> La distance est de "+distance+".</li>");
    }
})


})();