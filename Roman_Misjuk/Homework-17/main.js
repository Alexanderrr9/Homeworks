// Задание 1
var regexp = /^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@([a-z0-9]{2,10})([.-]?)([a-z0-9]){2,10}\.com$/i;

console.log(regexp.test('name_surname-1234@gmail.com'));
console.log(regexp.test('name_surname@gmail.com'));
console.log(regexp.test('1234@gmail.com'));
console.log(regexp.test('name_surname-1234@gmail.gmail.com'));
console.log(regexp.test('name_surname-1234@gmail-gmail.com'));
console.log(regexp.test('name_surname-1234@gmail.gm.ail.com'));
console.log(regexp.test('name_surname-1234@gmail.g-mail.com'));
console.log(regexp.test('name_surname-1234@gmail..gmail.com'));
console.log(regexp.test('name_surname-1234@gmail.gmail..com'));
console.log(regexp.test('name_surname-1234@gmail.gmail-.com'));
console.log(regexp.test('name_surname-1234@gmai-l.gm-ail.com'));

// Задание 2
function testString (str) {
	var regexp = /^(\+?375-?|8-?0)(25|29|33|44|17)-?[1-9]{3}-?\d{2}-?\d{2}$/;
  	var result = str.search(regexp);
	return (result != -1) ? true : false;
}
console.log(testString('+375-25-777-77-77'));
console.log(testString('375299999999'));
console.log(testString('8-044-444-44-44'));
console.log(testString('8033-6666666'));
console.log(testString('+375-25-077-77-77'));
console.log(testString('8-044-044-44-44'));
console.log(testString('375290999999'));
console.log(testString('+8033-6666666'));
console.log(testString('8-0-33-6666666'));


//Задание 3
function countVowelLetters(text) {
	var regexp = /[ауоыиэяюёеaeiouy]/gim;
	var result = text.match(regexp);
	return (result === null) ? 0 : result.length;
}
console.log(countVowelLetters('Шла Саша по шоссе И сосала сУшку'));
console.log(countVowelLetters('There is the river in the forest'));

//Задание 5
Идея итогового проекта:
	  Либо:
	- Расширенный калькулятор расчета вебсайта + 'продажная' форма-квиз,
		направленная на закрытие сделки. В идеале, при использовании калькулятора, будет
		кнопка 'распечатать' или сохранить в pdf, при нажатии на которую - сформируется
		отдельный pdf документ со всеми выбранными позициями, их стоимостью, а также
		итоговой стоимостью проекта. При заполнении формы квиза, в зависимости от времени
		заполнения (будет работать таймер) - будет генерироваться скидка на продукт. Также
		после заполнения квиза-формы - данные будут отправляься на сервер, на котором существует
		php файл (либо node.js функционал?), ответственный за отправку по e-mail результатов
		опроса владельцу сайта, на котором размещен калькулятор и форма квиз.

	- Либо калькулятор расчета ипотечного кредита(Mortgage Closing Cost Calculator) (на английском языке).
		Аналогичный функционал.




