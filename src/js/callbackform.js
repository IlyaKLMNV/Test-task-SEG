// Валидация формы для обратной связи в футере
const footerForm = document.querySelector('#footerForm');

footerForm.addEventListener('submit', (e) => formFooterSend(e));


function formFooterSend(e, form) {
	e.preventDefault();
	formFooterValidate(form);
}

function formFooterValidate(form) {
	let formReq = footerForm.querySelectorAll('.form-item--required');
	for (let index = 0; index < formReq.length; index++) {
		const input = formReq[index].querySelector('.Y-required');
		const span = formReq[index].querySelector('.placeholder_bottom-text');

		if (input.getAttribute("type") === "checkbox") {
			if (input.checked === false) {
				formAddError(input, span);
			} else {
				formRemoveError(input, span);
			}
		} else {
			if (input.value === "") {
				formAddError(input, span);
			} else {
				formRemoveError(input, span);
			}
		}
	}
}

// Простое решение для валидации формы всплывающего окна

function formFavorWindowSend(e, form) {
	e.preventDefault();
	formFavorWindowValidate(form);
}

function formFavorWindowValidate(form) {
	let formReq = favorWindowForm.querySelectorAll('.form-item--required');
	for (let index = 0; index < formReq.length; index++) {
		const input = formReq[index].querySelector('.Y-required');
		const span = formReq[index].querySelector('.placeholder_bottom-text');

		if (input.getAttribute("type") === "checkbox") {
			if (input.checked === false) {
				formAddError(input, span);
			} else {
				formRemoveError(input, span);
			}
		} else {
			if (input.value === "") {
				formAddError(input, span);
			} else {
				formRemoveError(input, span);
			}
		}
	}
}



function formAddError(input, span) {
	input?.parentElement.classList.add('_error');
	input?.classList.add('_error');
	span?.classList.add('_error');
}
	
function formRemoveError(input, span) {
	input?.parentElement.classList.remove('_error');
	input?.classList.remove('_error');
	span?.classList.remove('_error');
}


//Всплывающее окно услуги 

// Ининциализация
const moreButton = document.querySelector('.more-button');
const buttonXFavorWindow = document.querySelector('.favor-window_container__x');
const favorWindow = document.querySelector('.favor-window');
const favorWindowEmptyContainer = document.querySelector('.favor-window_empty-container');

const showFavorWindow = () => {
	favorWindow.classList.add('open');
	console.log('Сработала showFavorWindow')
}

const closeFavorWindow = () => {
	favorWindow.classList.remove('open');
	console.log('Сработала closeFavorWindow')
}

moreButton.addEventListener('click', showFavorWindow);
buttonXFavorWindow.addEventListener('click', closeFavorWindow);
favorWindowEmptyContainer.addEventListener('click', closeFavorWindow);


// Валидация формы отправки для всплываюшего окна

const favorWindowForm = document.querySelector('#favorWindowForm');
favorWindowForm.addEventListener('submit', (e) => formFavorWindowSend(e));



