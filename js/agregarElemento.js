
/* para asegurar que esta cargado listo todos los documentos de html */
jQuery(document).ready(function(){
    'use strict';

/* En javaScript hacemos asi para asegurar cargar todo html y es mas pesado

document.addEventListener('DOMContentLoaded',function(event){

});
*/

    $('main article:first').hide();
    
    var copia = $('main article:last').clone();
    $('main').append(copia);
    /*con prepend(copia) lo agrega al inicio*/ 
    

    var copia = $('main article:last').clone();
    $(copia).appendTo('main');


});

