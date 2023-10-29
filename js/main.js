$(function (){
    AOS.init();
    $(".open-nav-mobile").click(function (){
        $("#header-main #nav-mobile").addClass('open')
    });
    $(".close-menu").click(function (){
        $("#header-main #nav-mobile").removeClass('open')
    });
})
