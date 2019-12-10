// Задание 1 ---------------------------------------------------------------------------------------

console.log(/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z0-9]{1,10}(-|\.)?[a-z0-9]{1,10}\.com$/i.test('name_surname-1234@gmail.com'));

// Задание 2 ---------------------------------------------------------------------------------------

function checkPhoneNumber (number) {
    return /^(\+?375-?|8-?0)(25|29|44|33|17)-?[^0]\d{2}-?\d{2}-?\d{2}$/.test(number);
}

console.log(checkPhoneNumber('+375-25-777-77-77'));
console.log(checkPhoneNumber('375299999999'));
console.log(checkPhoneNumber('8-044-444-44-44'));
console.log(checkPhoneNumber('8033-6666666'));

// Задание 3 ---------------------------------------------------------------------------------------

function countVowelLetters1(text) {
    return text.toLowerCase().split(/[^аяыиоёуюэеaeiouy]/).join('').length;
}

console.log(countVowelLetters1('Шла Саша по шоссе И сосала сУшку'));
console.log(countVowelLetters1('ШлCш'));

function countVowelLetters2(text) {
    return text.toLowerCase().replace(/[^аяыиоёуюэеaeiouy]/g, '').length;
}

console.log(countVowelLetters2('Шла Саша по шоссе И сосала сУшку'));
console.log(countVowelLetters2('ШлCш'));

function countVowelLetters3(text) {
    var counter = 0;
    text = text.toLowerCase();
    for (var i = 0; i < text.length; i++) {
        if (/[аяыиоёуюэеaeiouy]/.test(text[i])) {
            counter++;
        }
    }
    return counter;
}

console.log(countVowelLetters3('Шла Саша по шоссе И сосала сУшку'));
console.log(countVowelLetters3('ШлCш'));

function countVowelLetters4(text) {
    var counter = 0;
    text = text.toLowerCase();
    for (var i = 0; i < text.length; i++) {
        if (text[i].search(/[аяыиоёуюэеaeiouy]/) === 0) {
            counter++;
        }
    }
    return counter;
}

console.log(countVowelLetters4('Шла Саша по шоссе И сосала сУшку'));
console.log(countVowelLetters4('ШлCш'));

function countVowelLetters5(text) {
    text = text.toLowerCase().match(/[аяыиоёуюэеaeiouy]/g);
    return text ? text.length : 0;
}

console.log(countVowelLetters5('Шла Саша по шоссе И сосала сУшку'));
console.log(countVowelLetters5('ШлCш'));

// Задание 5 ---------------------------------------------------------------------------------------

/*
Проект для учета финансовых расходов:
 - должны легко и удобно записываться расходы
 - основные группы расходов должны быть внесены заранее и была возможность добавить новые.
 - должна поддерживаться мультивалютность внесения расходов - рубли и $ (курс пересчета $ должен браться с нац. банка)
 - при отображении расходов - можно выбрать в какой валюте отображать и все расходы приведутся к единой валюте
 - должна быть статистика за неделю, месяц, год. Может быть какая-то детализация по группам
Актуальность - в связи со сменой работы и уменьшением дохов, нужно их учитывать и оптимизировать
*/