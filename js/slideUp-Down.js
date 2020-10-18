$(function(){
    'use strict';



    $('.logo img').click(function(){
        $('main article:first').slideUp(1000);

    });

    $('aside').click(function(){
        $('main article:first').slideDown(1000);
    })


})

