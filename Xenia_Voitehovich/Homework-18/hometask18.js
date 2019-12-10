// Задание 1:

var emailTemplate = /^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}[-.]?[a-z\d]{1,10}\.com$/i;

console.log(emailTemplate.test('name_surname-1234@gmail.com'));
console.log(emailTemplate.test('name_surname1234@g-mail.com'));
console.log(emailTemplate.test('name_surname-1234@g--ma..il.com'));
console.log(emailTemplate.test('name_surname-1234@g-ma..il.com'));

//     Задание 2:

function isItPhoneNumber(phoneNumber) {

    phoneNumber = phoneNumber.trim();
    var phoneTemplate = /^(\+?375-?|8-?0)(25|29|33|44|17)-?\d{3}(-?\d{2}){2}$/;
    console.log(phoneTemplate.test(phoneNumber));

}

isItPhoneNumber('+375-25-777-77-77');
isItPhoneNumber('375299999999');
isItPhoneNumber('8-0-44-444-44-44');
isItPhoneNumber('8033-6666666');

isItPhoneNumber('+8-044-444-44-44');
isItPhoneNumber('8033-666');

//     Задание 3:

function countVowelLetters(text) {

    var vowelsTemplate = new RegExp('[уеаоэяиюaeyuio]','igm');
    text = (text.match(vowelsTemplate)) ? text.match(vowelsTemplate).length : 0;
    return console.log('Количество гласных в тексте: ' + text);

}

countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12
countVowelLetters('Wow, it is great!\n' + 'I\'m so happy for you!'); //13
countVowelLetters('BMW');
