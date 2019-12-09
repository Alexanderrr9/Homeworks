// Задание 1:

(function checkMail(mail) {
    console.log(/^([a-z]{3,10})[\_]([a-z]{3,10})[\-](\d{4})?@([a-z\d]{2,10})([\.]|[\-]?)([a-z\d]{2,10})[\.]com$/i.test(mail));
})('name_surname-1234@gmail.com');

// Задание 2:

(function phoneNumber() {
    console.log(/^((8[\-]?0|([\+]?375[\-]?))(17|25|29|33|44)[\-]?)[1-9](\d{2}[\-]?)(\d{2}[\-]?)(\d{2})$/.test(prompt('')));

})();

// Задание 3:

function countLatters() {

    var str = prompt(''),
        result = str.match(/[ауоыиэяюёе]/ig);

    try {
        return (result.length) ? result.length : 'Нет совпадений';
    } catch (e) {
        console.log('Нет совпадений');
    }
}

console.log(countLatters());