
$(window).scroll(function() {
    scroll(0,0);
});

$(".img").click(function(event){
   if ($(this).hasClass("top")) {}
   else {
     var z = $(".top").css("z-index");
     z = z + 1;
     $(".top").addClass("under");
     $(".top").removeClass("top");
     $(this).removeClass("under");
     $(this).addClass("top");
     $(this).css("z-index", z);
   }  
});

$("#book-1").click(function(event){
  $(".webpage").css("display", "none");
  $("#calc").css("display", "block");
  $("#firefox-url").text(
     "file:///C:/Users/Angela/MealPlanCalculator/index.html");
});
$("#book-2").click(function(event){
  $(".webpage").css("display", "none");
  $("#cape").css("display", "block");
  $("#firefox-url").text(
    "file:///C:/Users/Angela/CAPEAvgStats/index.html");
});
$("#book-3").click(function(event){
  $(".webpage").css("display", "none");
  $("#hueman").css("display", "block");
  $("#firefox-url").text(
    "file:///C:/Users/Angela/Hueman/index.html");
});

$( ".img" ).draggable({ stack: ".img" });
$("#resume").draggable({ handle: "#resume-handle" });
$("#readme").draggable({ handle: "#readme-handle" });
$("#contact").draggable({ handle: "#contact-handle" });
$("#firefox").draggable({ handle: "#firefox-handle" });