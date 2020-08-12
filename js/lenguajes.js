document.addEventListener('DOMContentLoaded', function() {
    //create gallery divs
    //gallery divs must have display block when are created
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
            delay: 2000,
            disableOnInteraction: false,
        },

        // breakpoints: {
        //     640: {
        //       slidesPerView: 1.5,
        //       spaceBetween: 20,
        //     },
        //     768: {
        //       slidesPerView: 2,
        //       spaceBetween: 40,
        //     },
        //     1024: {
        //       slidesPerView: 3.5,
        //       spaceBetween: 50,
        //     },
        // }
    });

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
            delay: 2000,
            disableOnInteraction: false,
        },
    });

    //time to hide galery divs
    document.getElementById("comun1-1").style.display = "none"; 
    document.getElementById("comun1-2").style.display = "none"; 

}, false);


function changeTo( current, next ){

    let elmExit;
    let elmEnter;

    console.log('Move from: ' + current + ', To: ' + next);

    //animate Exit
    switch (current) {
        case 'home-div':
                exitMethod( current, 'slide-out-left');
            break;
    
        case 'comun1-1':
                exitMethod( current, 'slide-in-right' );
            break;

        case 'comun1-2':
                exitMethod( current, 'slide-in-right' );
            break;

        default:
            break;
    }

    // animate -ENTER- 
    setTimeout(() => {
        switch (next) {
            case 'home-div':
                    enterMethod( next, 'slide-out-left');
                break;

            case 'comun1-1':
                    enterMethod( next, 'slide-in-right' );
                break;

            case 'comun1-2':
                    enterMethod( next, 'slide-in-right' );
                break;
        }
    }, 400);



    function exitMethod( object, animation ){
        elmExit = document.getElementById(object);
        // console.log('elm exit = ');
        // console.log(elmExit)
        // elmExit.classList.add(animation);   
        setTimeout(() => {
            elmExit.style.display= 'none';
            // elmExit.classList.remove(animation);
        } , 300);
    }

    function enterMethod( object, animation){
        elmEnter = document.getElementById(object)
        // console.log('elm enter = ');
        // console.log(elmEnter);
        elmEnter.style.display= 'block';
        // elmEnter.classList.add(animation);    

        setTimeout(()=>{
            elmEnter.style.opacity = 1;
            // elmEnter.classList.remove(animation);
        }, 300);     
    }
}