//for all pages when page is loaded create navbar
document.addEventListener("DOMContentLoaded", function() {
    // function fron this script
    printNavBar(); 
});

//change the video source 
function changeVideo( key ) {
    //get video div
    let videoTag = document.getElementById("exponentes_video_player");
    //get current url
    let currentUrl = videoTag.src;
    //get max widt of the screen
    let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

     
        var data_origin = exponentesone_data;
        
        //if current url is diferent to new, change to new url
    if( data_origin[key]['url'] != currentUrl) {
        //set new src on the player
        videoTag.src = data_origin[key]['url'];
        
        //autoscroll to video div
        if (vw <= 992) {
            videoBlock[0].scrollIntoView({ block: "start", behavior: "smooth" });
        }
    }
    
   collapseOthers ( key );
}

//collapse the non-selected divs
function collapseOthers(key){

    accordionList = Array.prototype.slice.call(
        document.getElementsByClassName("participante")
    );

    accordionList.forEach(elm => {
        if( parseInt(key) !== parseInt(elm.dataset.sesion) ) {
            if( elm.classList.contains("show") ){
                elm.classList.remove("show");
            }
        }
    });
}

//toggle navBtns and their infoPanels
function changeActiveButton( elm ) {
    navBtns = Array.prototype.slice.call(
        document.getElementsByClassName("navBtns")
    );
    arrInfo = Array.prototype.slice.call(
        document.getElementsByClassName("actInfo")
    );

    objective = elm.dataset.target;
    objective = objective.replace('#','');

    navBtns.forEach(btn => {
        if (btn !== elm) {
            if(btn.classList.contains("active")) {
                btn.classList.remove("active");
            }        
        }
    });
    arrInfo.forEach(col => {
        if( col.id !== objective) {
            col.classList.remove("show");
        } 
    });

    elm.classList.toggle("active");
}

$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});
