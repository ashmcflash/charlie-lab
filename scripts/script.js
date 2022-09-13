$(document).ready(function () {
  //click on an image, get a message

  $("#dogeOne").click(function () {
    $("#outputDiv").hide();

    console.log("user clicked dogeOne 2");
    $("#outputMsg").text("Despicable human, falling for the guise of much cake. Your incompetence results in the loss of your soul...");
    $("#outputDiv").toggle();
  });

  $("#dogeTwo").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked dogeTwo 2");
    $("#outputMsg").text("with the power of dogeship, you win");
    $("#outputDiv").toggle();
  });

  $( document.body ).click(function() {
    $( "div:dogeOne" ).first().fadeIn( "slow" );
  });
});