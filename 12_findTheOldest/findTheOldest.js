const findTheOldest = function (array) {
	return array.reduce((oldest, currentPerson) => {
		const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
		const currentAge = getAge(
			currentPerson.yearOfBirth,
			currentPerson.yearOfDeath
		);
		return oldestAge < currentAge ? currentPerson : oldest;
	});
};

const getAge = function (birth, death) {
	if (!death) {
		death = new Date().getFullYear();
	}
	return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;

// const oldest = inventors.sort(function (a, b) {
// 	const lastGuy = a.passed - a.year;
// 	const nextGuy = b.passed - b.year;
// 	return lastGuy > nextGuy ? -1 : 1;
// });
// console.table(oldest);
