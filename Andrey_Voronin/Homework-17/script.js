//Задание 1

var regEx = /^[a-z]{3,10}[_][a-z]{3,10}[-]\d{4}[@]([a-z0-9]{2,10})([.-]?)([a-z0-9]){2,10}\.com$/i;

    regEx.test('name_surname-1234@gmail.com'); //true
    regEx.test('namenamename_surname-1234@gmail.com'); //false
    regEx.test('namesurname-1234@gmail.com'); //false
    regEx.test('name_surname-1234@gm.ai-l.com'); //false
    regEx.test('name_surname-1234@gma.il.com'); //true
    regEx.test('name_surname-1234@gma-il.com'); //true
    regEx.test('name_surname-1234@gmail.ru'); //false
    regEx.test('name_surname-1234@gmailgmailgmailgmailgmail.com'); //false


//Задание 2


function regExNumber (phone) {
    var regEx = /^(\+?375\-?|8\-?0)(25|29|33|44|17)\-?[1-9]\d{2}(\-?\d{2}){2}$/;
        return regEx.test(phone) ? true : false;
}

regExNumber ('+375-25-777-77-77');
regExNumber ('375299999999');
regExNumber ('8-044-444-44-44');
regExNumber ('8033-6666666');


//Задание 3

function countVowelLetters(text) {
    var vowelArr = text.match(/[аяыиоёуюэеaeiouy]/igm);

    return vowelArr ? vowelArr.length : 'глассные буквы отсутствуют';
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку');
countVowelLetters('впррв ghfghfgh');

//Задание 5
// идея проекта следующая: сделать проект "Прогноз клева рыбы исходя из подтягиваемых
// погодных условий", будет выбираться город, подтягиваться погода, пользователь выбирает вид интересующей рыбки и
// исходя из полученных данных по погоде выводится прогноз клева.
