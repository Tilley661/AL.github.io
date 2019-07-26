
var globals ={
    animating:false,
    percentage:-1,
    svgToAnimate:"city-scape",
}


$(document).ready(function(){
    animate(globals.svgToAnimate)
})

$('#container').bind('mousewheel DOMMouseScroll', function(event) {
	console.log(JSON.stringify(globals))
	if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

        globals.percentage -= 10;
        if (globals.percentage < 0){return};
	} else {
		globals.percentage += 10;
		if (globals.percentage > 100){return};
	}

	animate(svgToAnimate);

});




function animate(svg){

    if (svg === 0 || svg === undefined){return;}

	var start =
	{
		opacity:"0"
	}

	var end = 
	{
		opacity:"1"
	}




    var el = $(`#${svg} g, rect, path`);
    var time = 200;
    var max = 1000;
    var min = 200;
    
    el.each(function(index){

        time  = Math.random() * (max - min) + min;
        
    
        $( this ).animate(
            {"opacity":end.opacity * globals.percentage},
            {duration:time,
            complete:function(){
                //do somthing on completed
            }
        });
    

    });


}
