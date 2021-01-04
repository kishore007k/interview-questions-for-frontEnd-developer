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

// Find if the two string are anagrams or not

// Conditions:
	// -> The length of both the strings should match
	// -> The characters in both the strings should match
	// -> It is not necessary that the result world should make sense(meaning)

const stringOne = "EAT";
const stringTwo = "TEE";

function checkAnagram(fs, ss) {
	const firstWord = fs.split("").sort().join("");
	const secondWord = ss.split("").sort().join("");
	if (firstWord == secondWord) {
		return console.log(`The given words ${stringOne} & ${stringTwo} are anagrams`);
	} else {
		return console.log(`The given words ${stringOne} & ${stringTwo} are not anagrams`);
	}
}

checkAnagram(stringOne, stringTwo);
