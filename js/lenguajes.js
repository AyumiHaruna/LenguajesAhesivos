document.addEventListener('DOMContentLoaded', function() {
    
    // index.html functions
    var index = document.getElementsByClassName("home-div");
    if (index != undefined) {
        // add Jelly animation on mouse over
        var jellyList = Array.prototype.slice.call(
            document.getElementsByClassName("pathImg")
        );
        jellyList.forEach(button => {
            button.addEventListener("mouseenter", e => {
                if( !button.classList.contains("jello-horizontal") ){
                    button.classList.toggle("jello-horizontal");
                }
            });
            button.addEventListener("mouseleave", e => {
                if( button.classList.contains("jello-horizontal") ){
                    button.classList.toggle("jello-horizontal");
                }
            });
        });
    }
    

    // nucleo1.html functions
    var nucleo1 = document.getElementsByClassName("comun1-1");
    if (nucleo1 != undefined ){
        // create galleries
        //first gallery
        var mySwipertest = new Swiper('.gallery_container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 5,
            centeredSlides: true,
        
            // Navigation arrows
            navigation: {
            nextEl: '.gal_car_next',
            prevEl: '.gal_car_prev',
            },

            autoplay: {
                delay: 8000,
                disableOnInteraction: true,
            },

            breakpoints: {
                320: {
                    slidesPerView: 2.3,
                  },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                     slidesPerView: 4.5,
                },
            }
        });

        //semblanzas gallery
        var mySwiperSemlanzas = new Swiper('.semblanzas_gal', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            centeredSlides: true,

            // Navigation arrows
            navigation: {
                nextEl: '.gal_sem_next',
                prevEl: '.gal_sem_prev',
            },
    
            autoplay: {
                delay: 8000,
                disableOnInteraction: true,
            },

            breakpoints: {
                320: {
                    slidesPerView: 1.1,
                  },
                768: {
                    slidesPerView: 2.1,
                },
                1024: {
                     slidesPerView: 2.3,
                },
            }
        });

        //second gallery
        var mySecondSwiper = new Swiper('.gallery_container_second', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 5,
            centeredSlides: true,
        
            // Navigation arrows
            navigation: {
            nextEl: '.gal_sec_car_next',
            prevEl: '.gal_sec_car_prev',
            },

            autoplay: {
                delay: 8000,
                disableOnInteraction: true,
            },

            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                  },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                     slidesPerView: 3.5,
                },
            }
        });

        //hide second gallery
        document.getElementById("comun1-2").style.display = "none"; 
    }


    //function for close gallery btn
    var closeBtn = document.getElementById("closePic");
    closeBtn.addEventListener("click", e=>{
        let popUp = document.getElementById("picSelection");
        popUp.style.display = "none";
    });
}, false);


function changeTo( current, next ){

    let elmExit;
    let elmEnter;

    console.log('Move from: ' + current + ', To: ' + next);

    stopAllVideos();

    //animate Exit
    switch (current) {
        case 'home-div':
                exitMethod( current, 'slide-out-left');
            break;
    
        case 'comun1-1':
                exitMethod( current, 'slide-out-left' );
            break;

        case 'comun1-2':
                exitMethod( current, 'slide-out-left' );
            break;

        default:
            break;
    }

    // animate -ENTER- 
    setTimeout(() => {
        switch (next) {
            case 'home-div':
                    enterMethod( next, 'slide-in-right');
                break;

            case 'comun1-1':
                    enterMethod( next, 'slide-in-right' );
                break;

            case 'comun1-2':
                    enterMethod( next, 'slide-in-right' );
                break;
        }
    }, 400);




    function stopAllVideos(){
        videoList = Array.prototype.slice.call(
            document.getElementsByClassName("yVideo")
        );
        videoList.forEach(video => {
            //-----------SUPER IMPORTANT TO ADD "?enablejsapi=1&version=3" IN EACH URL VIDEO SOURCE-------------
            //without that parameter, this function doesn´t work
            video.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        });
    }


    function exitMethod( object, animation ){
        elmExit = document.getElementById(object);
        // console.log('elm exit = ');
        // console.log(elmExit)
        elmExit.classList.add(animation);   
        setTimeout(() => {
            elmExit.style.display= 'none';
            elmExit.classList.remove(animation);
        } , 300);
    }

    function enterMethod( object, animation){
        elmEnter = document.getElementById(object)
        // console.log('elm enter = ');
        // console.log(elmEnter);
        elmEnter.style.display= 'block';
        elmEnter.classList.add(animation);    

        setTimeout(()=>{
            elmEnter.style.opacity = 1;
            elmEnter.classList.remove(animation);
        }, 300);     
    }
}


//muestra pop-up con imagen seleccionada
function showImage( sel ){
    let popUp = document.getElementById("picSelection");
    popUp.style.display = "block";
    let picSel = document.getElementById("picSelected");
    picSel.src = sel.dataset.content;
}