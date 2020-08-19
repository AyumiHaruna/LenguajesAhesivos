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
}
