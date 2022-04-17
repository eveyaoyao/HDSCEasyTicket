var selectedMovie;
function changeSelectedMovie(){
	selectedMovie = $("#selectMovie").children(":selected").attr("id");
	if(selectedMovie == "uncharted"){
		console.log($("#moviePic").attr("src"));
		$("#moviePic").attr("src","img/movieList1.jpg");
	}
	else if(selectedMovie=="beasts"){
		$("#moviePic").attr("src","img/movieList2.jpg");
	}
	else if(selectedMovie=="badGuys"){
		$("#moviePic").attr("src","img/movieList3.jpg");
	}
	else if(selectedMovie=="dune"){
		$("#moviePic").attr("src","img/movieList4.jpg");
	}
	else if(selectedMovie=="batman"){
		$("#moviePic").attr("src","img/movieList5.jpg");
	}
	else{
		$("#moviePic").attr("src","img/movieList6.jpg");
	}

}

function contactFormValidator(){
	var contactName = $("#contactName").val();
	var contactEmail = $("#contactEmail").val();
	var message = $("#message").val();

	if(chkUserName(contactName,"Please Enter Your Full Name")){
		if(emailValidator(contactEmail,"Please Enter Correct Email Address")){
			if(chkUserName(message,"Please Enter Message")){
				alert("Thank for your message ! "+ "\nWe will reply you soon." );
				return true;						
			}		
		}		
	}
	return false;
}

function movieFormValidator(){
	var bookName = $("#bookName").val();
	var bookEmail = $("#bookEmail").val();
	var numberTickets = $("#numberTickets").val();

	if(chkUserName(bookName,"Please Enter Your Full Name")){
		if(emailValidator(bookEmail,"Please Enter Correct Email Address")){
			if(chkAmountIsNum(numberTickets,"Please Enter Numbers Only")){
				alert("Thank for your order ! "+ "\nEnjoy the movie" );
				return true;						
			}		
		}		
	}
	return false;
}

function chkUserName(elem, helperMsg){
	if(elem == 0){
		alert(helperMsg);
		return false;
	}
	return true;
}

function chkAmountIsNum(elem, helperMsg){
	var numericExpression = /^[0-9]+$/;
	if(elem.match(numericExpression)){
		return true;
	}else{
		alert(helperMsg);
		return false;
	}
}

function emailValidator(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.match(emailExp)){
		return true;
	}else{
		alert(helperMsg);
		return false;
	}
}

// Video Play
$(function () {
	$(".video").click(function () {
		var theModal = $(this).data("target"),
			videoSRC = $(this).attr("data-video"),
			videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
			$(theModal + ' iframe').attr('src', videoSRCauto);
			$(theModal + ' button.close').click(function () {
			$(theModal + ' iframe').attr('src', videoSRC);
		});
	});
});
