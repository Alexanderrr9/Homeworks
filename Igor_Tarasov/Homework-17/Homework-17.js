// Задание 1
/^[a-z]{3,10}_[a-z]{3,10}(-[1-9]{0,4})*@[a-z0-9]{1,10}[-.]*[a-z0-9]{1,10}.com$/.test('name_surname@gmmail.com');


// Задание 2

function testPhone(str) {
    switch (str[0]) {
        case '+' :
        case '3' :
            return /^\+*(375(25|29|33|44|17)\d{7})|(375-(25|29|33|44|17)-\d{3}-\d{2}-\d{2})$/.test(str);
        case '8' :
            return /^8(-0(25|29|33|44|17)-\d{3}-\d{2}-\d{2})|(0(25|29|33|44)-\d{7})$/.test(str);

    }
}

testPhone('+375-25-777-77-77')
testPhone('375299999999')
testPhone('8-044-444-44-44')
testPhone('8033-6666666')

// Задание 3

function countVowelLetters(text) {
    try {
        return text.match(/[аяыиоёуюэеaeiouy]/ig).length
    } catch {
        return 0
    }

}

countVowelLetters('Шла Саша по шоссе И сосала сУшку')
