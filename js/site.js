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
	alert("Hello Sloth");
}

function getValues2() {
	let firstNumber = document.getElementById("firstNumber").value;
	let secondNumber = document.getElementById("secondNumber").value;

	firstNumber = parseInt(firstNumber);
	secondNumber = parseInt(secondNumber);

	if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {

		generateNumbers(firstNumber, secondNumber);
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Whoops...',
			text: 'Only Integers are allowed for FizzBuzz.'
		})
	}
}

function generateNumbers(firstNumber, secondNumber) {
	let numbers = [];
	for (let i = firstNumber; i < secondNumber; i++) {
		numbers.push(i);
	}
	return numbers;
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