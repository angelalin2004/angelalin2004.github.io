
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
$("[class*='col-'] img").mouseenter(function(event){
  $(this).css("border", "2px solid #bbbbbb");
});

$("[class*='col-'] img").mouseleave(function(event){
  $(this).css("border", "2px solid #ffffff");
});
$("#book-calc, #sc-calc").click(function(event){
  $(".webpage").css("display", "none");
  $("#calc").css("display", "block");
  $("#firefox-url").text(
     "http://codepen.io/angelalin2004/full/eAyhK");
  $("#firefox-url").parent().attr("href", "http://codepen.io/angelalin2004/full/eAyhK");
});
$("#book-cape, #sc-cape").click(function(event){
  $(".webpage").css("display", "none");
  $("#cape").css("display", "block");
  $("#firefox-url").text(
    "https://chrome.google.com/webstore/detail/cape-average-stats/ofbopgppcdkefkcaho ogbmpdgeinhjep");
  $("#firefox-url").parent().attr("href", "https://chrome.google.com/webstore/detail/cape-average-stats/ofbopgppcdkefkcahoogbmpdgeinhjep");
});
$("#book-hueman, #sc-hueman").click(function(event){
  $(".webpage").css("display", "none");
  $("#hueman").css("display", "block");
  $("#firefox-url").text(
    "http://codepen.io/angelalin2004/full/NGExgb");
  $("#firefox-url").parent().attr("href", "http://codepen.io/angelalin2004/full/NGExgb");
});
$("#book-tumblr, #sc-tumblr").click(function(event){
  $(".webpage").css("display", "none");
  $("#tumblr").css("display", "block");
  $("#firefox-url").text(
    "https://chrome.google.com/webstore/detail/tumblr-posts-fix/lgnkfodppadkcieeejdo amoflimlocnl");
  $("#firefox-url").parent().attr("href", "https://chrome.google.com/webstore/detail/tumblr-posts-fix/lgnkfodppadkcieeejdoamoflimlocnl");
});
$("#book-10, #sc-10").click(function(event){
  $(".webpage").css("display", "none");
  $("#10boxes").css("display", "block");
  $("#firefox-url").text(
    "http://codepen.io/angelalin2004/full/mydwbB");
  $("#firefox-url").parent().attr("href", "http://codepen.io/angelalin2004/full/mydwbB");
});

$( ".img" ).draggable({ stack: ".img", containment: "#containment-wrapper", scroll: false });
$("#resume").draggable({ handle: "#resume-handle" });
$("#readme").draggable({ handle: "#readme-handle" });
$("#contact").draggable({ handle: "#contact-handle" });
$("#firefox").draggable({ handle: "#firefox-handle" });