/**
 * Created by angel on 05/05/2017.
 */
var first=false;
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
var title = 'fadeInLeftBig';
var parr = 'fadeInRightBig';
var services='slideInUp';
$(window).scroll(function(){
    window_y = $(window).scrollTop(); // VALOR QUE SE HA MOVIDO DEL SCROLL
    scroll_critical = parseInt($("#Home").height()) - 250; // VALOR DE TU DIV
    if (window_y > scroll_critical) { // SI EL SCROLL HA SUPERADO EL ALTO DE TU DIV
        if(!first){
            $('#Titulo').addClass("animated "+title).one(animationEnd, function() {
                $(this).removeClass("animated "+title);
            });
            $('#Descripcion').addClass("animated "+parr).one(animationEnd, function() {
                $(this).removeClass("animated "+parr);
            });
            $('#Servicios').addClass("animated "+services).one(animationEnd, function() {
                $(this).removeClass("animated "+services);
            });
        }
        first=true;
    }
});
