$(document).ready(function () {

    const myDate = new Date(); 
    const xmas = Date.parse("Dec 25, "+myDate.getFullYear()) 
    const today = Date.parse(myDate) 

    const daysToChristmas = Math.floor((xmas-today)/(1000*60*60*24)) 


    if (daysToChristmas == 0) 
    $('#days').text("It's Christmas!! Merry Christmas!");

    if (daysToChristmas < 0) 
    $('#days').text("Christmas was "+-1*(daysToChristmas)+" days ago.");

    if (daysToChristmas <= -25) 
    $('#days').text("Advent Calendars open in December.");

    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    //make snow
    console.log(windowWidth)
    snowDrop(150, randomInt(0, windowWidth));
    snow(150, 150);

    setTimeout(function() {
        window.location.href = './calendar.html';
    }, 10000);
});

function snow(num, speed) {
		if (num > 0) {
			setTimeout(function () {
				$('#drop_' + randomInt(1, 250)).addClass('animate');
				num--;
				snow(num, speed);
			}, speed);
		}
	};

	function snowDrop(num, position) {
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (num > 0) {
			var drop = '<div class="drop snow" id="drop_' + num + '"></div>';

			$('body').append(drop);
			$('#drop_' + num).css('left', position);
			num--;
			snowDrop(num, randomInt(0, windowWidth));
		}
	};

function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
