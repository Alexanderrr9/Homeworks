//Задача 1

function isMail(mail) {
	return /^([a-z]{3,10}_[a-z]{3,10}-[0-9]{4}@([a-z\d](\.?\-?)){2,20}\.com)$/gi.test(mail);
}

console.log(isMail('name_surname-1234@gmail.com'));

//Задача 2

function isNumber(number) {
	return /^((\+?375-?|8-?0)(25|29|33|44|17)-?[1-9]{1}([\d]{2}-?){3})$/.test(number);
}

console.log(isNumber('+375-25-777-77-77'));
console.log(isNumber('375299999999'));
console.log(isNumber('8-044-444-44-44'));
console.log(isNumber('8033-6666666'));

//Задача 3

function countVowelLetters(text) {
	return text.match(/[аяыиоёуюэеaeiouy]/ig).length;
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12