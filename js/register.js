/**
 * Created by janghunlee on 2017. 11. 6..
 */

var content_location = 1;

$(".next-btn-box").click(function () {
   content_location = content_location + 1;

   if(content_location == 2){
       $(".main-content").css({
            "display":"none"
       });

       $(".register-success").css({
            "display":"none"
       });

       $(".shangus-box").css({
            "display":"flex"
       });

       $(".header-content-box").removeClass("choose");
       $(".sec").addClass("choose");
   }
   else{
       $(".main-content").css({
           "display":"none"
       });

       $(".bottom-content").css({
           "display":"none"
       });

       $(".shangus-box").css({
           "display":"none"
       });

       $(".register-success").css({
           "display":"flex"
       });

       $(".header-content-box").removeClass("choose");
       $(".third").addClass("choose");
   }
});

$(".back-btn-box").click(function () {
    content_location = content_location - 1;
    if(content_location == 1){
        $(".main-content").css({
            "display":"flex"
        });

        $(".register-success").css({
            "display":"none"
        });

        $(".shangus-box").css({
            "display":"none"
        });

        $(".header-content-box").removeClass("choose");
        $(".fr").addClass("choose");
    }
    else if(content_location == 0){
        content_location = 1;
    }
    else{
        $(".main-content").css({
            "display":"flex"
        });

        $(".register-success").css({
            "display":"none"
        });

        $(".shangus-box").css({
            "display":"none"
        });

        $(".header-content-box").removeClass("choose");
        $(".sec").addClass("choose");
    }
});