$(function(){
    'use strict';

    $('.logo img').css({'width':'400px'});
    $('main article h2').css({'color':'white'});

    $('aside').css({'background-color':'#e1e1e1',
                    'text-transform':'uppercase',
                    'padding':'20px'});

    
    $('.navegacion ul li a').on('mouseenter',cambiarColor);
    
    function cambiarColor(){
        $('.navegacion').css('background-color','red');

    };
});