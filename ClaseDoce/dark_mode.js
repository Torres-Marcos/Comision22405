$(".checkbox").click(function(){
    if($("input.checkbox").is(":checked")){
        $(".theme").attr("href","light.css");
    } else {
        $(".theme").attr("href","dark.css");
    }
});