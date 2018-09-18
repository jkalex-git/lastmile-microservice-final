$(document).ready(function() {
	function minTommss(minutes){
		 var sign = minutes < 0 ? "-" : "";
		 var min = Math.floor(Math.abs(minutes))
		 var sec = Math.floor((Math.abs(minutes) * 60) % 60);
		 return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
	}
	$("#ResponseDiv").hide();
    $("#getStoreButton").click(function () {
		var custAddress = $('#custAddressText').val();
		var appUrl = "http://localhost:8765/lastmile/findDepotStore";
		$.ajax({
        url: appUrl,
		type: "get",
		data: {
			custAdrs: custAddress
		},
		error: function(xhr) {
			$("#ResponseDiv").hide();
			alert("Status: "+ xhr.status + " " + xhr.statusText);
		},
		success: function(result) {
			var hr = Math.floor(Math.abs(result.time));
			var min = Math.floor(Math.abs(result.time)*60);
			$("#storeAddress").text(result.store);
			$("#depotAddress").text(result.depot);
			$("#distance").text(result.distance);
			$("#time").text(minTommss(result.time * 60));
			$("#ResponseDiv").show();
		}
		});
     });
});