"use strict";
/*
  
   Countdown Clock
   Author: Jami
   Date:   1/11/21
*/

// Execute the funtion to run and display the countdown
runClock();
setInterval("runClock()", 1000);
// Difine Function to create and run the countdown clock
function runClock() {


	// store the current date and time
	var currentDay = new Date();
	var dateStr = currentDay.toLocaleDateString();
	var timeStr = currentDay.toLocaleTimeString();


	// Display the current date and time//
	document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

	// calculate the days until January 1st
	var newYear = new Date("January 1");
	var nextYear = currentDay.getFullYear() + 1;
	newYear.setFullYear(nextYear);
	var daysLeft = (newYear - currentDay) / (1000*60*60*24);

	// calculate the hours left in the current day
	var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

	// Calculate the minutes and seconds left in the current hour
	var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
	var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

	//Display the time left until new years Eve
	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hrs").textContent = Math.floor(hrsLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);
	document.getElementById("secs").textContent = Math.floor(secsLeft);
}




