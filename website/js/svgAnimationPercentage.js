
var globals ={
    animating:false,
    percentage:0,
    svgToAnimate:"city-scape",
    scrollingDirection:"down",
    firstRoll:true,
}


$(document).ready(function(){
    $(`#${globals.svgToAnimate} g, rect, path`).css({"opacity":"1"})
})

$('#container').bind('mousewheel DOMMouseScroll', function(event) {
    

    if(globals.animating === true){return};
    
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

        globals.scrollingDirection = "up";
        globals.percentage -= 10;

	} else {
        globals.scrollingDirection = "down";
		globals.percentage += 10;

	}

    console.log(JSON.stringify(globals))
	animate(globals.svgToAnimate);

});




function animate(svg){

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
    var max = 1000;
    var min = 200;
    var percentageMod = (globals.percentage/100);
    var endOpacity;

    el.each(function(){

        //take a random number between 0 - 1
        // then as percentage increases to 1 tend to end opacity
        if(globals.scrollingDirection === "down"){
            endOpacity = percentageMod + (Math.random() * (end.opacity - start.opacity)); // randomizes the opacity but will eventually be 1
        }else{
            endOpacity =  (1 - percentageMod) * (Math.random() + 0.25) ; // randomizes the opacity but will eventually be 0
        }

        if(globals.percentage < 0){
            globals.percentage = 0;
            endOpacity = 1;
        }
        if(globals.percentage > 100){
            globals.percentage = 100;
            endOpacity = 0;
        }




        time  = Math.random() * (max - min) + min;
        
        console.log("animating element");

        $( this ).animate(
            {"opacity":endOpacity},
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
