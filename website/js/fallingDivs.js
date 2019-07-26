////////////Globals
var globals = {
	scrolling: false,
	nextDiv: false,
	divToMove: 1
}

$('#container').bind('mousewheel DOMMouseScroll', function(event) {
	console.log(JSON.stringify(globals))
	if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
		moveFallingDiv("up");
	} else {
		moveFallingDiv("down");
	}
});

function moveFallingDiv(direction) {
	//check div elements exist if not rest to 1
	if (globals.scrolling) {
		return;
	} else {
		globals.scrolling = true;
	}
	var id = globals.divToMove;
	var el = $(`#falling-div-${id}`);
	console.log("element length" + el.length)
	if (el.length === 0) {
		//1 = from start
		//n = from last
    var n = false;
        if (direction === "up"){
		n = $("#container div").length;
    }else{
    	n = 1;
    }
			globals.divToMove = n;
			id = n;
	}
	el = $(`#falling-div-${id}`);
	console.log(globals.scrolling)
	var id = globals.divToMove;
	//theory
	//on first roll
	//move div to bottom of page (use interporlator to slow down near end if needed)
	//on second roll
	//move the current div down - out of site
	//move the next div to the bottom of page
	if (globals.nextDiv === true) {
		//need to move initial div away first
		console.log("removing first div");
		el.animate({
			"opacity": "0",
			"top": "200px"
		}, {
			duration: 200,
			complete: function() {
				//reset element off page
				el.css({
					"top": "-110vh",
					"opacity": "1"
				})
				if (direction === "up") {
					globals.divToMove--
						id--
				} else {
					globals.divToMove++
						id++
				}
				//the only change for this function is to reduce the div count rather than increase
				el = $(`#falling-div-${id}`);
				globals.nextDiv = false;
				console.log("set nextDiv = false");
				globals.scrolling = false;
			}
		});
		return;
	}
	var elPosition = el.position();
	var cTop = elPosition.top;
	var containerPosition = $('#container').position();
	var containerHeight = $('#container').height();
	var fallingDivHeight = el.outerHeight();
	var divSeperation = 10;
	var maxDown = containerHeight - fallingDivHeight;
	el.animate({
		'top': maxDown + 'px'
	}, {
		duration: 400,
		easing: "swing",
		complete: function() {
			console.log("animation completed");
			globals.scrolling = false;
			globals.nextDiv = true
		}
	})
}