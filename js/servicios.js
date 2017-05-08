/**
 * Created by angel on 05/05/2017.
 */
var first=false;
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
var title = 'fadeInLeftBig';
var parr = 'fadeInRightBig';
var services='slideInUp';
var  tecnologias=[
    {id:"RV",title:"Realidad Virtual", ver_mas:"<iframe  src='https://www.youtube.com/embed/if8rexwM9oA?rel=0&amp;showinfo=0?ecver=1' frameborder='0' allowfullscreen></iframe>"},
    {id:"FV360",title:"Fotos y videos 360°", ver_mas:"<iframe src='https://www.youtube.com/embed/CoVYHb8uoDM?rel=0&amp;controls=0&amp;showinfo=0?ecver=1' frameborder='0' allowfullscreen></iframe>"},
    {id:"FVA",title:"Fotos y videos Aéreos", ver_mas:""},
    {id:"RA",title:"Realidad Aumentada", ver_mas:""},
    {id:"MR",title:"Maquetas y Render", ver_mas:""},
    {id:"TV",title:"Tour Virtual", ver_mas:""},
    {id:"DI",title:"Domótica – Inmótica", ver_mas:""},
    {id:"TD",title:"Topografía con Drone", ver_mas:""},
    {id:"HG",title:"Hologramas", ver_mas:""}
    ] ;

$(window).scroll(function(){
    window_y = $(window).scrollTop(); // VALOR QUE SE HA MOVIDO DEL SCROLL

    scroll_critical = parseInt($("#Home").height()) - 550; // VALOR DE TU DIV

    if (window_y > scroll_critical) { // SI EL SCROLL HA SUPERADO EL ALTO DE TU DIV
        // console.log(window_y);
        if(!first){

            $('#Titulo').removeClass('hidden');
            $('#Descripcion').removeClass('hidden');
            $('#Servicios').removeClass('hidden');


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

$('#E_Modal').on('show.bs.modal',function (evt) {
    var boton=$(evt.relatedTarget);
    var id_dato=boton.data('whatever');
    var modal =$(this);

    tecnologias.forEach(function (item) {
        if(item.id==id_dato){
            modal.find('.modal-title').text(item.title);
             modal.find('.modal-body').html(item.ver_mas);
        }
        //
    });



    
});