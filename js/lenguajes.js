document.addEventListener('DOMContentLoaded', function() {
    
    // create menu carousel
    var mySwiper = new Swiper('.gallery1', {
        slidesPerView: 5,
        centeredSlides: true,
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.gal_car_next',
          prevEl: '.gal_car_prev',
        },

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        breakpoints: {
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 50,
            },
        }
    });

}, false);


function changeTo( current, next ){
    console.log('CHANGING');

    let elmExit;
    let elmEnter;

    //animate Exit
    switch (current) {
        case 'home-div':
                exitMethod( current, 'slide-out-left');
            break;
    
        default:
            break;
    }

    // animate -ENTER- 
    setTimeout(() => {
        switch (next) {
            case 'comun1-1':
                    enterMethod( next, 'slide-in-right' );
                break;
        }
    }, 400);


    function exitMethod( object, animation ){
        elmExit = document.getElementById(object);
        // elmExit.classList.add(animation);   
        setTimeout(() => {
            elmExit.style.display= 'none';
            elmExit.classList.remove(animation);
        } , 300);
    }

    function enterMethod( object, animation){
        elmEnter = document.getElementById(object)
        elmEnter.style.display= 'block';
        // elmEnter.classList.add(animation);    

        setTimeout(()=>{
            elmEnter.style.opacity = 1;
            elmEnter.classList.remove(animation);
        }, 300);     
    }
}