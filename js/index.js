$(document).ready(function(){

    $( "#menu-home, #menu-home-mobile" ).click(function(){
        var eltop = $( "#section-home" ).offset().top;
        $('html, body').animate({ scrollTop: eltop}, 1000);
    });

    $( "#menu-features, #menu-features-mobile" ).click(function(){
        closeMenuMobile();
        var eltop = $( "#section-features" ).offset().top;
        eltop = eltop - 215;
        $('html, body').animate({ scrollTop: eltop}, 1000);
    });

    $( "#menu-saiba-mais, #menu-saiba-mais-mobile" ).click(function(){
        closeMenuMobile();
        var eltop = $( "#section-saiba-mais" ).offset().top;
        eltop = eltop - 230;
        $('html, body').animate({ scrollTop: eltop}, 1000);
    });

    $( "#menu-depoimentos, #menu-depoimentos-mobile" ).click(function(){
        closeMenuMobile();
        var eltop = $( "#section-depoimentos-mobile" ).offset().top;
        eltop = eltop - 90;
        $('html, body').animate({ scrollTop: eltop}, 1000);
    });

    $( "#menu-duvidas, #menu-duvidas-mobile" ).click(function(){
        closeMenuMobile();
        var eltop = $( "#section-duvidas-frequentes" ).offset().top;
        eltop = eltop - 170;
        $('html, body').animate({ scrollTop: eltop}, 1000);
    });

    // Invocando o componente de collapsible
    $('.collapsible.expandable').collapsible();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    
});


function closeMenuMobile(){
    $('.btn-mobile-menu').click()
}


