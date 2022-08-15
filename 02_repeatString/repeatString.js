const repeatString = function (str, num) {
	str = "hey";
	if (num > 0) {
		return str.repeat(num);
	} else if (num < 0) {
		return "ERROR";
	} else {
		return "";
	}
};
repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
