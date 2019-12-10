// // Задание 1:
var email = prompt('Введите e-mail:');

function isMail(mail) {
    var corrMail = /^[a-z]{3,10}\_[a-z]{3,10}\-\d{4}@([a-z\d]{2,10}(\.|\-)?[a-z\d]{2,10})\.com$/ig.test(mail);
    return corrMail;
}

console.log(isMail(email));


// // Задание 2:
var phoneNumber = prompt('Введите номер телефона:');


function isCorrect(number) {
    var num = /^((8[\-]?0|([\+]?375[\-]?))(33|25|29|44|17)[\-]?)(\d{3}[\-]?)(\d{2}[\-]?)(\d{2})$/.test(number);
    return num;
}

console.log(isCorrect(phoneNumber));


// Задание 3:

var someText = 'Шла Саша по шоссе И сосала сУшку';

function countVowelLetters(text) {
    var numOfVowels = text.match(/[аяыиоёуюэеaeiouy]/gi);

    return numOfVowels === null ? 'Нет совпадений' : 'Количество совпадений: ' + numOfVowels.length;
}

console.log(countVowelLetters(someText));