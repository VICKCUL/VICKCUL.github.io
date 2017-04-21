$(document).ready(function(){
	// These are the pages
	var pages = ["work", "personal", "activities", "about"];
	
	// These are the z-indexes of all the pins
	var z_index_original_order = { "work" : [6,7,8], "personal" : [0,1,2], "activities" : [3,4,5], "about": [0,1,2]};

	// Which page is currently clicked -- starts with about being clicked
	var page_clicked = {"work": false, "personal": false, "activities": false, "about": true};

	// Every time bringToFront is run, sendToBack is run on all the other pages
	var bringToFront = function (classValue, hover) {
		if (hover == true) {
			$("." + classValue + "shadow").animate({"z-index": "20"}, 0);
			$("." + classValue).animate({"z-index": "21"}, 0);
			$("." + "pin" + classValue).animate({"z-index": "22"}, 0).hide();
		} else {
			$("." + classValue + "shadow").animate({"z-index": "12"}, 0);
			$("." + classValue).animate({"z-index": "13"}, 0);
			$("." + "pin" + classValue).animate({"z-index": "14"}, 0).show();
		}
		if (classValue !== "personal") {
			$("." + classValue + "shadow").animate({"left": "-10"}, 0);
			$("." + classValue).animate({"left": "-10"}, 0);
			$("." + "pin" + classValue).animate({"left": "-10"}, 0);
		}
	};
// goal is to hide the pin for everything that is not clicked; and put the pages back in their original z-index order;
	var sendToBack = function (classValue) { 
		var z1 = z_index_original_order[classValue][0];
		var z2 = z_index_original_order[classValue][1];
		var z3 = z_index_original_order[classValue][2];
		if (!page_clicked[classValue]) {
			$("." + classValue + "shadow").animate({"z-index": z1}, 0);
			$("." + classValue).animate({"z-index": z2}, 0);
			$("." + "pin" + classValue).animate({"z-index": z3}, 0).hide();
		} else {
			$("." + "pin" + classValue).show();
		}
		$("." + classValue + "shadow").animate({"left": "0"}, 0);
		$("." + classValue).animate({"left": "0"}, 0);
	};

	// Only run on "about" link on the nav bar
	function shake(classValue){
		$("."+classValue).css({
        	"transform-origin": "100 100",
        	"transform":  "matrix(1, 0, 0.05, 1, 1, 1)"
        });
        $("." + classValue + "shadow").css({
        	"transform-origin": "0 0",
        	"transform":  "matrix(1.005, 0, 0.004, 1, 1, .01)"
        });
        setTimeout( function() { 
        	$("."+classValue).css({
        		"transform-origin": "100 100",
        		"transform":  "matrix(1, 0, 0, 1, 1, 1)"
        	}).fadeIn(400);
	        $("." + classValue + "shadow").css({
	        	"transform-origin": "0 0",
	        	"transform":  "matrix(1, 0, 0, 1, 1, 1)"
	        }).fadeIn(400);
         },
        400);
	}

	$(".divtoclick").mouseout( function() {
		// leaving any of the clickable divs resets the order so that the clicked image is on top
		var pageToBringToFront = "about";
        pages.forEach(function (page) {
            sendToBack(page);
            if (page_clicked[page]) {
                pageToBringToFront = page;
            }
        });
        bringToFront(pageToBringToFront, false);
	});

	$(".workdiv").mouseover(function() {
		pages.forEach( function(page) {
			sendToBack(page);
		});
		bringToFront("work", true);
	});
	$(".personaldiv").mouseover(function() {
		pages.forEach( function(page) {
			sendToBack(page);
		});
		bringToFront("personal", true);
	});
	$(".activitiesdiv").mouseover(function() {
		pages.forEach( function(page) {
			sendToBack(page);
		});
		bringToFront("activities", true) 
	});
    $(".aboutdiv").mouseover(function() {
        pages.forEach( function(page) {
            sendToBack(page);
        });
        bringToFront("about", true)
    });
	$(".workdiv").click(function () {
		page_clicked = { "work" : true, "activities": false, "about" : false, "personal" : false };
		pages.forEach( function(page) {
			sendToBack(page);
		});
		bringToFront("work", false);
		$.ajax({
			url: "/work",
			method: "GET"
		}).done( function(data) {
			$("#content").html(" ");
			$("#content").html(data);
		});
	});
	$(".activitiesdiv").click(function () {
		page_clicked = { "work" : false, "about" : false, "personal" : false, "activities": true };
		pages.forEach( function(page) {
			sendToBack(page);
		});
		bringToFront("activities");
		$.ajax({
			url: "/activities",
			method: "GET"
		}).done( function(data) {
			$("#content").html(" ");
			$("#content").html(data);
		});
	});
	$(".personaldiv").click(function () { 
		page_clicked = { "work" : false, "activities": false, "about" : false, "personal" : true };
		pages.forEach( function(page) {
			sendToBack(page);
		});
		bringToFront("personal");
		$.ajax({
			url: "/personal",
			method: "GET"
		}).done( function(data) {
			$("#content").html(" ");
			$("#content").html(data);
		});
	});
	$(".aboutdiv").click( function() {
		page_clicked = { "work" : false, "activities": false, "personal" : false, "about" : true };
		pages.forEach( function(page) {
			sendToBack(page);
		});
		bringToFront("about");
		shake("about");
		$.ajax({
			url: "/about",
			method: "GET"
		}).done( function(data) {
			$("#content").html(data);
		});
	})
	$(".aboutdiv").click();
})

