$(function(){
    'use strict';
    $('div.logo img').addClass('activo');
    $('.navegacion').show();
    $('main article:first').addClass('activo');


    $('.navegacion ul li a').on('click',function(e){
        $('.navegacion ul li a').removeClass('activo');
        e.preventDefault();
        $(this).addClass('activo');

    });
});

