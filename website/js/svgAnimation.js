function animateSVG(svg){

    if (svg === 0 || svg === undefined){return;}


    var el = $(`#${svg} g, rect, path`);
    var time = 200;
    var max = 1000;
    var min = 2000;

    el.css({"opacity":"0"})
    
    el.each(function(index){

        time  = Math.random() * (max - min) + min;
        
    
        $( this ).animate(
            {"opacity":"1"},
            {duration:time,
            complete:function(){
                //do somthing on completed
            }
        });
    

    });
}