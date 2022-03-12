$(document).ready(function(){

    $( "#menu-home" ).click(function(){
        var eltop = $( "#section-home" ).offset().top;
        $('html, body').animate({ scrollTop: eltop}, 1000);
    });

    $( "#menu-features" ).click(function(){
        var eltop = $( "#section-features" ).offset().top;
        eltop = eltop - 215;
        $('html, body').animate({ scrollTop: eltop}, 1000);
    });

    $( "#menu-saiba-mais" ).click(function(){
        var eltop = $( "#section-saiba-mais" ).offset().top;
        eltop = eltop - 210;
        $('html, body').animate({ scrollTop: eltop}, 1000);
    });

    $( "#menu-depoimentos" ).click(function(){
        var eltop = $( "#section-depoimentos-clientes" ).offset().top;
        eltop = eltop - 170;
        $('html, body').animate({ scrollTop: eltop}, 1000);
    });

    $( "#menu-duvidas" ).click(function(){
        var eltop = $( "#section-duvidas-frequentes" ).offset().top;
        eltop = eltop - 170;
        $('html, body').animate({ scrollTop: eltop}, 1000);
    });

    // Invocando o componente de collapsible
    $('.collapsible.expandable').collapsible();

});
