// Подключение модуля
//import "inputmask/dist/inputmask.min.js";


const inputMasks = document.querySelectorAll('input');
if (inputMasks.length) {
	for (let index = 0; index < inputMasks.length; index++) {
		const input = inputMasks[index];
		if (input.classList.contains('_date')) {
			//input.classList.add('_mask');
			Inputmask("99.99.9999", {
				//"placeholder": '',
				clearIncomplete: true,
				clearMaskOnLostFocus: true,
			}).mask(input);

		}
		if (input.classList.contains('_tel')) {
			Inputmask("+7(999)999-99-99", {
				//"placeholder": '9',
				clearIncomplete: true,
				clearMaskOnLostFocus: true,
			}).mask(input);
		}
		if (input.classList.contains('_card')) {
			Inputmask("9999-9999-9999-9999", {
				//"placeholder": '9',
				clearIncomplete: true,
				clearMaskOnLostFocus: true,
			}).mask(input);
		}
	};
}