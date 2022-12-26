import './styles/style.sass';

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('.Y-required');
		let getSpanErrorText = document.getElementsByClassName('placeholder_bottom-text');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			const span = getSpanErrorText[index];
			formRemoveError(input);
			formRemoveTextError(span);


			// вот сюда надо написать функцию удаления класса *error у span.placeholder 

			if (input.getAttribute("type") === "checkbox" && input.checked === false ) {
				formAddError(input);
				formRemoveTextError(span);
				error++;
			} else {
				if (input.value === "") {
					formAddError(input);
					formAddTextError(span);
					error++;

					// а сюда добавить функцию добавления класса error

					
				}
			}
		}
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formAddTextError(span) {
		span.classList.add('_error')
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	function formRemoveTextError(span) {
		span.classList.remove('_error');
	}



});