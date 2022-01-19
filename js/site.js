// display message to the user
function getMessage() {
	let userMessage = document.getElementById("message").value;
	Swal.fire(
		'Button Clicked!',
		userMessage,
		'success!'
	)
}

function getValues() {
	let firstNumber = document.getElementById("firstNumber").value;
	let secondNumber = document.getElementById("secondNumber").value;

	firstNumber = parseInt(firstNumber);
	secondNumber = parseInt(secondNumber);

	if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {

		let number = generateNumbers(firstNumber, secondNumber);
		displayNumbers(number);
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Whoops...',
			text: 'Only Integers are allowed for FizzBuzz.'
		});
	}
}

function generateNumbers(fizzValue, buzzValue) {
	let returnArray = [];
	let isFizz = false;
	let isBuzz = false;

	for (let i = 0; i <= 100; i++) {
		
		// check if fizzValue && buzzValue are fizz/buzz
		isFizz = (i % fizzValue == 0);
		isBuzz = (i % buzzValue == 0);

		if (isFizz && isBuzz) {
			returnArray.push("FizzBuzz");
		} else if (isFizz) {
			returnArray.push("Fizz");
		} else if (isBuzz) {
			returnArray.push("Buzz");
		} else {
			returnArray.push(i);
		}
	}

	return returnArray;
}


function displayNumbers(numbers) {
	let templateRows = "";
	let className = "";

	for (let i = 0; i < numbers.length; i++) {

		let number = numbers[i];

		if (number % 2 == 0) {
			className = "even"
		} else {
			className = "odd"
		}

		let row = `<tr><td> class="${className}">${number}</td></tr>`;
		templateRows += row;
	}
	document.getElementById("results").innerHTML = templateRows;
}