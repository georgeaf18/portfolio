"use strict"; {

  /**************** navbar links bottom border toggler ****************/  

const btns = document.querySelectorAll('.nav-link');



for (let i: number = 0; i < btns.length; i++){
    btns[i].addEventListener( 'click', () => {
        
        let current = document.querySelector('.active');
        
        
        current.classList.remove('active');
        
        btns[i].classList.add('active');
        
    });
}

  /**************** navbar animation ****************/  

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.presentation',
    triggerHook: 'onLeave',
    offset: 400
})
.setClassToggle('.nav_bar', 'fixed')
.addTo(controller);




// .setClassToggle('.nav_bar', 'hidden')
// .addTo(controller2);


}

