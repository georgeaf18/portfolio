"use strict";
{
    var nameInput = (document.querySelector('#nameInput')).nodeValue;
    var emailInput = (document.querySelector('#emailInput')).nodeValue;
    var messageInput = (document.querySelector('#messageInput')).nodeValue;
    var submit_btn = document.querySelector('#submit_btn');
    /**************** navbar links bottom border toggler ****************/
    var btns_1 = document.querySelectorAll('.nav-link');
    var _loop_1 = function (i) {
        btns_1[i].addEventListener('click', function () {
            var current = document.querySelector('.active');
            current.classList.remove('active');
            btns_1[i].classList.add('active');
        });
    };
    for (var i = 0; i < btns_1.length; i++) {
        _loop_1(i);
    }
    /**************** navbar animation ****************/
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        triggerElement: '.presentation',
        triggerHook: 'onLeave',
        offset: 400
    })
        .setClassToggle('.nav_bar', 'fixed')
        .addTo(controller);
}
