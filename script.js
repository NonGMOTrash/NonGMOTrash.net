var greeting;

greeting = document.getElementById("greeting");

var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var hour = today.getHours();

console.log("hour:"+hour+" day:"+day+" month:"+month);

if (month === 7 && day === 3) {
	// air conditioning appreciation day
	greeting.textContent = "i eefing love air conditioning.";
} else if (month === 7 && day === 4) {
	// 4th of july
	greeting.textContent = "merica";
} else if (month === 8 && day === 31) {
	// halloween
	greeting.textContent = "it's the spooky day oooOooOOoOOo";
} else if (month === 9 && day === 16) {
	// !!!!!!!!!!!!!!
	greeting.textContent = "tis' the day of the trash";
} else if (month === 11 && day === 23) {
	// thanksgiving
	greeting.textContent = "happy free bird day";
} else if (month === 12 && day === 25) {
	// xmas
	greeting.textContent = "merry christmas!! :)";
} else if (hour >= 23 || hour < 6) {
	// night
	greeting.textContent = "hello... you should probably be asleep, but i'm not exactly in a position to judge x)";
} else if (hour >= 6 && hour < 11) {
	// morning
	greeting.textContent = "good morning! (*´▽｀)ゞ";
} else {
	// afternoon
	greeting.textContent = "hello! i hope you're having a nice day....... ";
}
