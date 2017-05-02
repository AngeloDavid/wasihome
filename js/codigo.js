/**
 * Created by angel on 27/04/2017.
 */
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
    $('#icon1').popover({
        title: "Dirección",
        content: "<p>Juan Pablo Sanz e Iñaquito esquina – Edif. CAMICON 5to piso</p>",
        html: true,
        placement: "bottom",
        trigger: "hover",
    });
    $('#icon2').popover({
        title: "Nuestros Productos",
        content: "<ul><li>Domótica</li><li>Fotos y videos 360°</li><li>Realidad virtual</li><li>Realidad Aumentada</li><li>Tour Virtual</li><li>Drones</li></ul>",
        html: true,
        placement: "bottom",
        trigger: "hover focus"
    });
    $('#icon3').popover({
        content: "<ul><li>Emociones</li><li>Emociones</li><li>Emociones</li></ul>",
        html: true,
        placement: "bottom",
        trigger: "hover"
    });
    $('#icon4').popover({
        content: "<ul><li>Tiempo</li><li>Dinero</li></ul>",
        html: true,
        placement: "bottom",
        trigger: "hover"
    });
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var firstCss ="animated bounceInRight";
    var secondCss="animated bounceInLeft";
    $('#prueba').on('click',function () {
        $('#txt1').addClass(firstCss).one(animationEnd, function() {
            $(this).removeClass(firstCss);
        });
        $('#txt2').addClass(secondCss).one(animationEnd, function() {
                    $(this).removeClass(secondCss );
                });
            })
});
