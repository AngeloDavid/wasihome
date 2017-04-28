/**
 * Created by angel on 27/04/2017.
 */
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
    $('#icon1').popover({
        title: "Dirreccion",
        content: "<p>Juan Pablo Sanz e Iñaquito esquina – Edif. CAMICON 5to piso</p>",
        html: true,
        placement: "bottom",
        trigger: "hover",
    });
    $('#icon2').popover({
        title: "Nuestros Productos",
        content: "<ul><li>Fotos 360</li><li>Realidad virtual</li><li>Realidad Aumentada</li></ul>",
        html: true,
        placement: "bottom",
        trigger: "hover focus"
    });
    $('#icon3').popover({
        content: "<p>Te enseñamos mucho más de lo que puedas esperar ...</p>",
        html: true,
        placement: "bottom",
        trigger: "hover"
    });
    $('#icon4').popover({
        content: "Tus ventas en menor tiempo con menos dinero en un solo lugar",
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
