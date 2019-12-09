// Задание 1
/^[a-z]{3,10}_[a-z]{3,10}(-[1-9]{4})?@[a-z\w]{1,10}[-.]?[a-z\w]{1,10}.com$/i.test('name_surname@gmmail.com');


// Задание 2

function testPhone(str) {
    return /^(\+?375|8-?0)-?(17|25|29|33|44)-?[1-9]\d{2}-?\d{2}-?\d{2}$/.test(str)
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
