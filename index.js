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
		return console.log(
			`The given words ${stringOne} & ${stringTwo} are anagrams`
		);
	} else {
		return console.log(
			`The given words ${stringOne} & ${stringTwo} are not anagrams`
		);
	}
}

checkAnagram(stringOne, stringTwo);

// Print matrix in snake format:-

const value = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

for (let i = 0; i < 3; i++) {
	if (i % 2 === 0) {
		for (let j = 0; j < 3; j++) {
			console.log(value[i][j]);
		}
	} else {
		for (let j = 3 - 1; j >= 0; j--) {
			console.log(value[i][j]);
		}
	}
	console.log("\n");
}

// PanGram:-

const sentence = "The quick brown fox jumps over the lazy dog";

const isPangram = (string) =>
	new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

console.log(isPangram(sentence));
