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
        eltop = eltop - 80;
        $('html, body').animate({ scrollTop: eltop}, 1000);
    });
});         