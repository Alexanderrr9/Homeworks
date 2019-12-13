// task 1
{
let {a, b, ...obj} = {a: 1, b: 2, c: 3, d: 4};

console.log(a, b, obj);
}

// task 2
{
  let name = prompt('Введите ваше имя');

  const objName = {
    name,
    sayHi() {
    console.log(`Hi, ${this.name}!`);
    }
  };

  objName.sayHi();
}

//task 3
{
const obj = {a: 2, b: 3};

let getParams = ({a: x, b: y}, z = 1) => {
  return y ** x * z;
}

getParams(obj, 2);
}

// task 4
{
  const nameUser = ['Alex', 25]; 

  let getParams = (x,y) => {

    return `Hello, I'm ${x} and I'm ${y} years old.`;
  }
  getParams(...nameUser);

}

// task 5
{
  let getParams = (...args) => {

    for (let elem of args) {
    console.log(elem);
  }

  }
  getParams(1, 2, 3, 4, 5);

}

// task 6 
{
  function countVowelLetters(text) {
    text = text.toLowerCase().split('');

    const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;

    text.forEach(elem => vowelLetters.includes(elem) ? count++ : count);

    return count;
  }

  countVowelLetters('Шла Саша по шоссе И сосала сУшку'); 
}

