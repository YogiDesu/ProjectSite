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

}); //No more code below here//
