function animateSVG(svg){

    if (svg === 0 || svg === undefined){return;}


    var el = $(`#${svg} g`);
    el.css({"opacity":"1"})
    el.each(function(graphic){
        
        graphic.animate(
            {"opactity":"0"},
            {duration:200,
            complete:function(){
                //do somthing on completed
            }
        });
        
    });



}