$(function(){
    'use strict';
    $('.navegacion').show();
    $('main article:first img').on('click',function(){
        $(this).attr('src','img/imagen_2.jpg')
    })
});