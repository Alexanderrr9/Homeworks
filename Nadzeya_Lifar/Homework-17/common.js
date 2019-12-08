
//Задание 1 для проверки email
/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@([a-z\d]{2,10}(\.|-)?[a-z\d]{2,10})\.com$/.test('name_surname-1234@gmail.com');


//Задание 2 для проверки номера телефона
function checkNumber (number) {
     var phoneNumber = number.match(/^(\+?375\-?|8\-?0)(25|29|33|44|17)\-?[1-9]\d{2}(\-?\d{2}){2}$/);

     return phoneNumber ? true : false;
}
checkNumber ('+375-25-777-77-77');
checkNumber ('375299999999');
checkNumber ('8-044-444-44-44');
checkNumber ('8033-6666666');

//Задание 3 для подсчета гласных
function countVowelLetters(text) {
    var vowelArr = text.match(/[аяыиоёуюэеaeiouy]/igm);

    return vowelArr ? vowelArr.length : 'No vowels here!';
}
countVowelLetters('Шла Саша по шоссе И сосала сУшку');
countVowelLetters('Шл Сш п шсс ссл сшк');