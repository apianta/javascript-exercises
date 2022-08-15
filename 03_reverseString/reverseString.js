const reverseString = function (str) {
	return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
};

reverseString("hello there");

// Do not edit below this line
module.exports = reverseString;
