function animateSVG(svg){

    if (svg === 0 || svg === undefined){return;}


    var el = $(`#${svg} g`);
    var time = 200;
    var max = 1000;
    var min = 3000;

    el.css({"opacity":"1"})
    
    el.each(function(index){

        time  = Math.random() * (max - min) + min;
        
    
        $( this ).animate(
            {"opacity":"0"},
            {duration:time,
            complete:function(){
                //do somthing on completed
            }
        });
    

    });
}