//Задачаа 1
{
    const myObj = {a: 1, b: 2, c: 3, d: 4},
        {a, b, ...obj} = myObj;
    console.log(a, b, obj);
}

//Задача 2
{
    let name = prompt('Введите ваше имя');
    const user = {
        name,
        sayHi() {
            return `Hi, ${this.name}!`;
        }
    };
    alert(user.sayHi());
}

//Задача 3
{
    function showResult({a: x, b: y}, z = 1) {
        return (x ** y) * z;
    }

    alert(showResult({a: 2, b: 3}, 7));
}

//Задача 4
{
    const userInfo = ['Nata', 27];

    function showUserInfo(name, age) {
        return `Hello, I'am ${name} and I'am ${age} years old.`;
    }

    alert(showUserInfo(...userInfo));
}

//Задача 5
{
    function showValues(...arr) {
        for (let value of arr) {
            console.log(value);
        }
    }

    showValues(4, 2, 9, 6);
}

//  Задача 6:
{
    function countVowels(text) {
        text = text.toLowerCase().split('');
        const vowels = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
        let counter = 0;

        text.forEach(letter => {
            if (vowels.includes(letter)) {
                counter += 1;
            }
        });
        return `Количество гласных: ${counter}`;
    }

    alert(countVowels('Шла Саша по шоссе И сосала сУшку'));
}