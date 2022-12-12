'use strict';

const userInput = document.querySelector('#username');
const passInput = document.querySelector('#password');
const rpassInput = document.querySelector('#r_password');
const emailInput = document.querySelector('#email');

const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');

const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.popup-close');

clearBtn.addEventListener('click', (e) => {
	e.preventDefault();

	[userInput, passInput, rpassInput, emailInput].forEach((el) => {
		el.value = '';
		const formBox = el.parentElement;
		formBox.classList.remove('error');
	});
});

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');

	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};

const checkLength = (input, regex) => {
	if (input.value.length < regex) {
		showError(
			input,
			`${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} musi mieć min. ${regex} znaków!`
		);
	}
};

const checkPasswrds = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, 'Hasła muszą być jednakowe!');
	}
};

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm([userInput, passInput, rpassInput, emailInput]);
	checkLength(userInput, 5);
	checkLength(passInput, 8);
	checkPasswrds(passInput, rpassInput);
});
