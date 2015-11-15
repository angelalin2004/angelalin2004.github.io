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
$(".img").draggable();  
});