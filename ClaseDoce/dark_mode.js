$('#check').click(function(){
    if($('input#check').is(':checked')){
        $('#theme').attr('href','estilos/dark.css');
    } else {
        $('#theme').attr('href','estilos/light.css');
    }
});

