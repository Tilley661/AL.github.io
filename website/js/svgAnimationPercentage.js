
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
        if (globals.percentage < 0){
            globals.percentage = 0;
            return
        };
	} else {
		globals.percentage += 10;
		if (globals.percentage > 100){
            globals.percentage = 100;
            return
        };
	}

	animate(globals.svgToAnimate);

});




function animate(svg){

    if (globals.animating){return}
    globals.animating = true;


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
    var max = 100;
    var min = 20;
    var percentageMod = (globals.percentage/100);
    
    el.each(function(index){

        time  = Math.random() * (max - min) + min;
        
        console.log("animating element");

        $( this ).animate(
            {"opacity":(end.opacity - start.opacity) * percentageMod},
            {duration:time,
            complete:function(){
                //do somthing on complete
            }
        });
    

    });

    //wait max amouunt of time then set animating to false
    console.log("setting time out for " + max + "millisecsongs")
    setTimeout(function(){
        globals.animating = false;
        console.log("changed animation value to " + globals.animating);
    },max);


}
