const inputNumber = 57;

const arrayOfNumbers = [10, 20, 32, 48, 57, 189, 4567];

function findTheNumber(array, n) {
	const len = Math.round(array.length / 2);
	var firstArray = array.slice(0, len);
	var secondArray = array.slice(len, array.length);

	if (firstArray[len] == n) {
		const numberPosition = arrayOfNumbers.indexOf(inputNumber);
		return console.log(`The position of ${inputNumber} is ${numberPosition}`);
	} else if (secondArray[0] == n) {
		const numberPosition = arrayOfNumbers.indexOf(inputNumber);
		return console.log(`The position of ${inputNumber} is ${numberPosition}`);
	} else if (firstArray[len] && secondArray[0] != n) {
		return findTheNumber(secondArray);
	} else {
		console.log("Number Not Found");
	}
}

findTheNumber(arrayOfNumbers, inputNumber);
