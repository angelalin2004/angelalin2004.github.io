$(window).scroll(function() {
    scroll(0,0);
});
/*
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
*/
$( ".img" ).draggable({ stack: ".img" });
$("#resume").draggable({ handle: "#resume-handle" });
$("#readme").draggable({ handle: "#readme-handle" });
$("#contact").draggable({ handle: "#contact-handle" });