
const startTime = new Date("November 12, 2022 09:00:00").getTime();
const eventTime = document.getElementById('event-time');

function lpad(n) {
	return n >= 10 ? String(n) : `0${n}`;
}

function updateTimer() {
	const now = new Date().getTime();
	const diff = startTime - now;

	if (diff < 0) {
		return '00 : 00 : 00 : 00';
	}

	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((diff % (1000 * 60)) / 1000);

	document.getElementById("days").innerHTML=days;
	document.getElementById("hours").innerHTML=hours;
	document.getElementById("minutes").innerHTML=minutes;
	document.getElementById("seconds").innerHTML=seconds;
	
	const formatted = [days, hours, minutes, seconds].map(n => lpad(n)).join('     :      ');

	eventTime.innerText = formatted;
}

setInterval(updateTimer, 250);
updateTimer();