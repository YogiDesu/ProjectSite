var myPics = [ 
	{ title: "First Project", pic: "http://i.imgur.com/MWDJmZZ.jpg"}, 
	{ title: "Second Project", pic: "http://i.imgur.com/Q1JsjUZ.jpg"}, 
	{ title: "Third Project", pic: "http://i.imgur.com/ESKt3xp.jpg"},
	{ title: "Forth Project", pic: "http://i.imgur.com/vVBxAum.jpg"}
	];


$(document).ready(function(){
	$("#messagebox").css("background-color", "pink");

	$("#subbut").on("click", function(){
		console.log("clicked");
		var comment = $("#messagebox").val();
		console.log($("#messagebox").val());
		$("#visible-comment").html(comment);
	});

	$("#messagebox").on("keyup", function(){
		console.log("keyup happend");
		var nameName=3;
		var name="string";
		var charCount= $("#messagebox").val().length;
		console.log(charCount);
		$("#char-count").html(charCount);
		if(charCount > 50) {
			$("#char-count").css("color","red");
		} else {
			$("#char-count").css("color","black");
		}

	});


	var rows =$(".my-row");
	console.log("row is good");
	for(var i=0; i<rows.length;++i) {
		if (i%2===0) {
			$(rows[i]).css("background-color","orange");
		}
	};

    for(var i=0; i<myPics.length; ++i) {
        $("#" + i ).css("background-image", "url(" + myPics[i].pic + ")" );
    };

    $(".image").mouseenter( function() {
        console.log(myPics[this.id].title);
        $(this).html("<p class='info'><span class='proj-title'>Title:</span> " + myPics[this.id].title + "</p>");
    }).mouseleave( function() {
        $("p.info").html("");
    });

    // Map Script //
    function initialize() {

    	var mapOptions= {
			center: new google.maps.LatLng(37.1000788,-76.5251053,12),
			zoom: 8
		};
	
		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	
		var marker= new google.maps.Marker({
			position: map.getCenter(),
			map: map,
			title: 'Click to zoom'
		});
	
		google.maps.event.addListener(marker, 'click', function(){
			map.setZoom(15);
			map.setCenter(marker.getPosition());
		});
  
	};


    google.maps.event.addDomListener(window,'load', initialize);
	

}); //No more code below here//
