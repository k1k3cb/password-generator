// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const rangeElement = document.getElementById('range');
const spanLenghtElement = document.getElementById('span-lenght');
const strengthValueElement = document.getElementById('strength-value');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generatorBtnElement = document.getElementById('generator-button');
const formElement = document.getElementById('form');
const generatorResultElement = document.getElementById('generator-result');
let checkboxes;

// comprobar que checkboxes están marcados y activar btn

const passwordStrength = () => {
	 checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
	// console.log(checkboxes.length);

	spanLenghtElement.textContent = rangeElement.value;
	if (rangeElement.value > 4) {
		strengthValueElement.textContent = 'NO OPTIONS CHECKED';
	} else {
		strengthValueElement.textContent = 'TOO SHORT';
	}

	if (checkboxes.length === 1 && rangeElement.value > 4) {
		strengthValueElement.textContent = 'TOO WEAK!';
	}
	if (checkboxes.length === 2 && rangeElement.value > 4) {
		strengthValueElement.textContent = ' WEAK';
	}
	if (checkboxes.length === 3 && rangeElement.value > 4) {
		strengthValueElement.textContent = 'MEDIUM';
	}
	if (checkboxes.length === 4 && rangeElement.value > 4) {
		strengthValueElement.textContent = 'STRENGTH';
	}
	if (checkboxes.length >= 1 && rangeElement.value > 5) {
		generatorBtnElement.classList.add('button-active');
	} else {
		generatorBtnElement.classList.remove('button-active');
	}
};

const generatePassword = () => {
	const passwordLength = rangeElement.value;
	let password = '';
	let strings = '';

	if (checkboxes[0]) {
		strings += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}
	if (checkboxes[1]) {
		strings += 'abcdefghijklmnopqrstuvwxyz';
	}
	if (checkboxes[2]) {
		strings += '0123456789';
	}
	if (checkboxes[3]) {
		strings += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
	}

	// console.log(passwordLength);
	// console.log('probando probando uno dos');


// mejor que un for usar  for of

	 for (let i = 0; i < passwordLength; i++) {
			const position = Math.floor(Math.random() * strings.length);
			password += strings[position];
		}
		console.log(password);		
		generatorResultElement.value = password;
};

generatorBtnElement.addEventListener('click', () => {
	// console.log('a ver si salta');
	if (generatorBtnElement.classList.contains('button-active')) {
		generatePassword();
	}
});



rangeElement.addEventListener('input', passwordStrength);
uppercaseElement.addEventListener('click', passwordStrength);
lowercaseElement.addEventListener('click', passwordStrength);
numbersElement.addEventListener('click', passwordStrength);
symbolsElement.addEventListener('click', passwordStrength);
formElement.addEventListener('submit', e => {
	e.preventDefault();
});
