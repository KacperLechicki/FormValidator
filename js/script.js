'use strict';

const userInput = document.querySelector('#username');
const passInput = document.querySelector('#password');
const rpassInput = document.querySelector('#r_password');
const emailInput = document.querySelector('#email');

const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');

const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.popup-close');

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

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

//len określa wymaganą długość input'a
const checkLength = (input, len) => {
	if (input.value.length < len) {
		showError(
			input,
			//wpisywanie do błędu label'i (z usuniętym dwukropkiem) oraz wymaganej długości
			`${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} musi mieć min. ${len} znaków!`
		);
	}
};

const checkPasswrds = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, 'Hasła muszą być jednakowe!');
	}
};

const checkMail = (email) => {
	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (regex.test(email.value)) {
		clearError(email);
	} else {
		showError(email, 'E-mail jest niepoprawny!');
	}
};

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

clearBtn.addEventListener('click', (e) => {
	e.preventDefault();

	//iterowanie po tablicy wszystkich inputów i czyszczenie ich zawartości oraz błędów
	[userInput, passInput, rpassInput, emailInput].forEach((el) => {
		el.value = '';
		const formBox = el.parentElement;
		formBox.classList.remove('error');
	});
});

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm([userInput, passInput, rpassInput, emailInput]);
	checkLength(userInput, 5);
	checkLength(passInput, 8);
	checkPasswrds(passInput, rpassInput);
	checkMail(emailInput);
});
