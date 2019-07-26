
var globals ={
    animating:false,
    percentage:0,
    svgToAnimate:"city-scape",
    scrollingDirection:"down",
}


$(document).ready(function(){
    $(`#${globals.svgToAnimate} g, rect, path`).css({"opacity":"1"})
})

$('#container').bind('mousewheel DOMMouseScroll', function(event) {
    
    console.log(JSON.stringify(globals))
    
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

        globals.scrollingDirection = "up";
        globals.percentage -= 10;
        if (globals.percentage < 0){
            globals.percentage = 0;
            return
        };
	} else {
        globals.scrollingDirection = "down";
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
    var max = 1000;
    var min = 200;
    var percentageMod = (globals.percentage/100);
    var endOpacity;

    el.each(function(index){

        //take a random number between 0 - 1
        // then as percentage increases to 1 tend to end opacity
        if(globals.scrollingDirection === "down"){
            endOpacity = percentageMod + (Math.random() * (end.opacity - start.opacity)); // randomizes the opacity but will eventually be 1
        }else{
            endOpacity =  (Math.random() * (end.opacity - start.opacity)) - percentageMod; // randomizes the opacity but will eventually be 0
        }
        if (endOpacity > 1){endOpacity = 1};

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
