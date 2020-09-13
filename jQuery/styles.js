

$("h1").css("color", "green");


$(document).keypress(function(event) {
    $("h1").text(event.key);
});
