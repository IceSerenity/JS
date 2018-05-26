document.addEventListener('DOMContentLoaded',function () {




    function br() {
        document.write('<br>')
    }
/*
    var int = 8;
    document.write(int);
    br();
    int = 4;
    document.write(int);
    br();

    var str = 'Hello';
    document.write(str);
    br();

    var bool = true;
    document.write(bool);
    br();

    var und;
    document.write(und); //underfind
    br(); //document.write('<br>');

    int = null;
    document.write(int);//null
    br();

    //null
    //underfind
    //NaN
  */

//Константы
    /*
    const c = 8;
    document.write(c);
    // c = 7; //будет ошибка
    // document.write(c);
    */
/*
    var  x = 4;
    document.write(4 + x);//8
    br();
    document.write(x * x);//16
    br();
    document.write(x / x);//1
    br();
    document.write(x - x);//0
    br();
    document.write(x % 2);//0
    br();
    document.write(9 % 2);//1
    br();
    document.write(1 % 9);//1
*/
/*
// (x == 1 || x == 8) - or
// (x == 1 && x == 8) - and
    var boolTrue = true;
    var boolFalse = false;
    document.write(boolTrue || boolFalse); //true
*/
/*
x!=4;//не равно
 */
/*
//сокращенная запись
var j = 2;
document.write(j += 2); // j = j + 2
    // (j *= 2); // j = j * 2
 */
/*
var i = 1;
i ++; // = i + i;
document.write('i++ = ', i); // 2
    br();

    i --; // = i - i;
    document.write('i-- = ', i); //1
    br();

    var d = i++;
    document.write('d = i++ : ', 'd = ', d ,'i = ',i); //1
    br();

    i = 1;
    var b = ++i;
    document.write('b = ++i : ', 'b = ', b , 'i = ',i); //
    br();

    i = 1;
    d = i--;
    document.write('d = i-- : ', 'd - ', d , 'i - ', i); //1
    br();
    i = 1;
    b = --i;
    document.write('b = --i : ', 'b - ',b, 'i - ',i); // 2
*/
/*
//Типизация
    var x = 1, str = 'a', bool = true;
    document.write('-----typeof-----');
    br();
    document.write(typeof x); //number
    br();
    document.write(typeof str); //string
    br();
    document.write(typeof bool); //boolean
  */
/*
var str = 'Cat';
var str2 = 'Cat';
document.write(str === str2); //true
br();

str = 'Cat';
str2 = 'cat';
var symbOne = str.charCodeAt(0);
var symbTwo = str2.charCodeAt(0);
document.write(symbOne, ' ', symbTwo);
br();
document.write(str === str2); //false
br();

str = 'a';
str2 = 'b';
var symbOne = str.charCodeAt(0);
var symbTwo = str2.charCodeAt(0);
document.write(str > str2, ' ', symbOne, ' ', symbTwo);
br();
*/

/**If else **/
/*
var f = 1;
if (f === 1) {
    document.write('f = 1');
} else {
    document.write('f != 1');
}
*/
/*
var min = +prompt("Введите число: ");
if (min >= 0 && min <= 14) {
    alert ('В первую четверть');
} else if (min >= 15 && min <= 30) {
    alert ('Во вторую четверть');
}else if (min >= 31 && min <= 45) {
        alert ('В третью четверть');
}else if  (min >= 46 && min <= 60) {
        alert ('В четвертую четверть');
}else {
        alert ('Не подходящий параметр');
    }
*/
/*
var user = 'user';
var admin = 'admin';
var login = prompt('введите логин: ');
var passUser = '1111';
var adminpass = '2222';
var password = prompt('Введите пароль: ');
if (user === login && passUser === password) {
    alert ('Вывошли как User ');
}else if (admin === login && adminpass) {
    alert ('Вы вошли как Admin');
} else {
    alert ('Нет такого!');
}
*/
/*
    var x = prompt('Введити число');
    if (x > 100) {
        alert ('значение больше 100');
    } else if ( x < 100) {
        alert ('значение меньше 100');
    } else {
        alert ('значение 100');
    }
*/
/*
    var x = +prompt ('Загадайте число от 1 до 50');
    var y = 1;
    while(y > 0) {
        var c = +prompt ('Угадайте число от 1 до 50');
        if (c > x ) {
            alert ('много');
        } else if (c < x ) {
            alert ('мало');
        } else if (c === x) {
            alert ('угадал');
            break;
        }
    }
 */
/*
    var pass = 1345;
    var pass2 = prompt('Введите пароль для входа');
    var cash = 5000;
    if(pass === pass2) {
        var money = prompt('Введите сумму');
        if(cash < 50 || cash > 3000){
            alert('Вы не можете снять меньше 50 и больше 3000');
        }else {
            alert('Заберите деньги, ваш баланс' + cash + 'грн.');
            alert("Ваш баланс: " + (cash - money));
        }
    }else if (pass2 === ''){
        alert('Ошибка входа, вы не ввели пароль');
    } else {
        alert('Неправильный пароль');
    }
*/

/*
    var summ = prompt('Введите сумму покупки');
    var holiday = summ - summ * 0.15;
    var time = prompt('Введите время покупки');
    if(summ >= 1500 && time === '12.30'){
        alert('Сумма со скидкой: ' + holiday);
    }else{
        alert('Ваша сумма:' + summ);
    }
*/

/** Switch case **/
/*
var count = 4;
switch (count) {
    case 1:
        document.write('1');
        break;
    case 2:
        document.write('2');
        break;
    case 3:
        document.write('3');
        break;
    case 4:
        document.write('4');
        break;
    default:
        document.write('Не один не подошел');
    break;
}
*/
/*
    var countX = +prompt('Введите число от 5 до 10');
    switch(countX) {
        case 10:
            alert('10');
            break;
        case 5:
            alert('5');
            break;
        case 6:
            alert('6');
            break;
        case 8:
        case 7:
            alert('8 или 7');
            break;
    }

*/
/*
    var num = +prompt('Введите число 1,2,3 или 4');
    var result;
    switch(num) {
        case 1:
            result = 'зима';
            break;
        case 2:
            result = 'весна';
            break;
        case 3:
            result = 'лето';
            break;
        case 4:
            result = 'осень';
            break;
            default:
        result = 'Не один не подошел';
        break;
    }
    alert(result);
*/
/*
    var month = +prompt('Введите месяц');
    if(month === 12 || month === 1 || month === 2) {
        alert ('Зима');
    } else if(month === 3 || month === 4 || month === 5) {
        alert ('Весна');
    } else if(month === 6 || month === 7 || month === 8) {
        alert ('Лето');
    } else if(month === 9 || month === 10 || month === 11) {
        alert ('Осень');
    }else{
        alert('Не месяц');
    }
*/
/*
var str = 'abcd';
if (str[0] === 'a'){
    alert('Yes');
}else {
    alert('No');
}
*/


/** loop for, while, do...while**/
/*
var count = 0;
    while (count < 4) {
        alert(count);
        count ++;
    }
*/
/*
var count = 0;
while (count < 4) {
    alert(count);
    count ++;
}

var i = 4;
while (i) {
    alert(i); // когда i станет = 0, значение в скобках станет false и цикл остановится
    i --;
}
*/
/*
count = 0;
do {
    document.write(count);
    count ++;
} while (count < 4);

var count = 4;
do {
    document.write(count);
    count ++;
}while (count < 4);

var x = 1;
do {
    document.write(x);
    x ++;
}while (x < 11);
*/
/*
var  count = 0;
while (++ count < 4) {
    document.write(count);
}

/***For ***/
/*
for (var i = 0; i < 4; i++){
    document.write(i);
}
*/

///Бесконечные циклы
/*
    var x = 1;
    while (true){
        alert(x);
    }
    for (x = 1; x > 0; x ++) {
        alert(x);
    }
*/
/*
    var y = 1;
    var x = 1;
    while(x > 0 && y > 0){
        var counter = +prompt('Введите counter:');
        if(counter == 5) {
            break;
        }
        alert (counter);
        counter++;
    }
*/
/*
    for(var y = 1; y < 5; y ++) {
        document.write('до continue = ' + y + '<br>');
        if(y % 2 == 0){ //проверка на четные числа
            continue;
        }
        document.write('после continue = ' + y + '<br>');
    }
*/
/*
    for(var i = 1; i < 6; i++) {
        if(i == 5) {
            document.write(i + '.');
            continue;
        }
        document.write(i + ',');
    }
*/
/*
    var sum = 0;
    for(var i = 1; i <=100; i ++){
        document.write(i + ' ');
        sum += i;
    }
    document.write('Sum' + sum);
*/
/*
    var x = 3;
    for(var i = 1; i <=10; i ++){
        sum = x * i;
        document.write(3 + '*' + i + '=' + sum + '<br>');
    }
    */
/*
    var x = +prompt('Введите начало');
    var z = +prompt('Введите конец');
    if(z % 2 !=0){
        max = min - 1;
    }
    for(var y = x; y < z; y ++) {
        if (y % 2 == 0) {
            document.write(y + '<br>')
        }
    }
   */
/*
    var x = +prompt ('Введите число от 1 до 50');
    var y = 1;
    while(y > 0) {
        var c = +prompt ('Угадайте число от 1 до 50');
        if (c > x ) {
            alert ('много');
        } else if (c < x ) {
            alert ('мало');
        } else if (c === x) {
            alert ('угадал');
            break;
        }
        y ++;
    }
    */
/*
    var sum = 0;
    var x = +prompt('Введите начало');
    var z = +prompt('Введите конец');
    if (z <= x){
        alert("Error!");
    }else {
        for (var y = x; y <= z; y++) {
            if (y % 2 == 0) {
                sum += y;
            }
        }
    }document.write(sum);
*/
/*
    var a;
    var sum = 0;
    var arf = 0;
    var counter = 0;
    while(a !=0){
        var a = +prompt('Введите число');
        counter ++;
        sum += a;
    } arf = sum / counter;
    document.write(counter + '<br>');
    document.write(sum + '<br>');
    document.write(arf);
*/

/** Functions **/
/*
function ShowHi() {
    alert('Hi!');
}
ShowHi();

    var userName = 'user';
    var a;
    function showHi(){
        a = 'Привет тебе,' + userName + ', от Функции!';
        var hi = 'Привет тебе,' + userName + ', от Функции!';
        document.write( hi );
    }
    showHi();
*/

/** Array **/
/*
//              0   1   2   3
    var arr = ['1','2','3','9'];
    alert(arr[2]); //3
    alert(arr[0]); //1
console.log([]);
*/
/*
var arr = [1,2,3,4,5];
for (var i = 0; i < arr.length;i ++){
    document.write(arr[i]);
}
*/
/*
    var result = 1;
    var arr = [2,3,4,5];
    for (var i = 0; i < arr.length; i++) {
        result = result * arr[i];
    }
    alert(result);
    */
/*
var arr = [10,9,8,7,6,5,4,3,2,1,0];
for (var i = 0; i < arr.length; i ++) {
    if (arr[i] % 2 == 0) {
        document.write(arr[i]);
    }
}

var arr = [10,9,8,7,6,5,4,3,2,1,0];
for (var i = arr.length; i >= 0; i --) {
    if (arr[i] % 2 == 0) {
        document.write(arr[i]);
    }
}*/
/*
var books = ['JavaScript', 'PHP', 'HTML', 'CSS'];
for (var i = 0; i < books.length;i++) {
  document.write( (i + 1) + '. ' + books[i] + '<br>');
}
*/

/** Objects **/
/*
var obj = {
    key1: 1,
    key2: 2
};
*/
/*
var  arr = [
    {
        name:'vasya',
        age: 21
    },
    {
        name: 'petya',
        age: 32
    }
];
for (var i = 0; i < arr.length; i ++) {
    for (var key in arr[i]){
        console.log(key);
        console.log(arr[i][key]);
    }
}
*/



/*
var arr = [1,2,3];
var arr2 = [];
    for (var i = 0; i < arr.length; i ++) {
        ///arr[i] = arr[i] + '1';
        arr2[i] = arr[i] + '1';
    }
    console.log(arr);
    */
    /** foreach **/
  /*var arr = ['1','2','3'];
    //меняем каждый элемент ,добавляя 1
    arr.forEach(
        function (item, index, array) {
            array[index] = item + '1';
        }
    );
    console.log('ARR',arr);
    */
  /*

*/
/*
// можно менять элементы но нельзя записать другой массив
const items = ['item1', 'item2', 'item3'];
const copy = [];
items[0] = '2324r';
console.log(items[0]);
for (var i=0; i < items.length; i++) {
    copy.push(items[i]);
    console.log('for', items[i]);
}
const items2 = ['item1', 'item2', 'item3'];
const copy2 = [];

items2.forEach(function(item){
    copy2.push(item);
    console.log('foreach', item);
});*/
/*
var words = ['one', 'two', 'three', 'four'];
words.forEach(function (item) {
   if (item === 'one') {
       words.shift();
   }
});
console.log(words);
*/
/*
var numberArray = [
    {num1: 1, num2: 2},
    {num3: 3, num4: 4}
];
for (var i = 0; i < numberArray.length; i++ ){
    if(numberArray[i].num3 === 3){
        console.log('num3', numberArray[i].num3);
    }
}
*/
/*
    var cars = [
        {
            name: 'bmw',
            model: 'x5',
            year: '2010'
        },
        {
            name: 'mercedes',
            model: 'clk',
            year: '2012'
        },
        {
            name: 'tavria',
            model: 'svavuta',
            year: '1986'
        }
    ];
    for(var i = 0; i < cars.length; i ++) {
        console.log('Name: ' + cars[i].name + ' ' +'Model: ' + cars[i].model + ' ' + 'Year: ' + cars[i].year);
    }
   */
/*
    var cars = {
        name: ['bmw', 'mercedes', 'tavria'],
        model: ['x5', 'clk', 'slavuta'],
        year: ['2010', '2012', '1986']
    };
    for(var key in cars) {
        console.log(key + ':');
        cars[key].forEach(function(item){
            console.log(item);
        });
    }

    for(var i = 0; i < cars.name.length; i++){
        var str = '';
        for(var key in cars){
            str += ' ' + cars[key][i];
        }
        console.log(str);
    }
  */
/*
var arr = [
    [1,2,3,4,5],
    [1,2,3,4],
    [1,2,3,4,5,6,7]
];
var max = 344444444444444;
for (var i = 0; i < arr.length; i ++){
    if (max > arr[i].length) {
        max = arr[i].length;
    }
}console.log(max);
*/
/*
var human = {
    male: {
        height: 180,
        weight: 80,
        hairColor: 'brown',
        eyeColor: 'green'
    },
    female: {
        height: 170,
        hairColor: 'red',
        eyeColor: 'grey'
    }
};
/*
for (var key in human) {
    document.write(key + ':');
    for (var key2 in human[key]){
document.write( key2 + ':' + human[key][key2]);
    }
}*/

/* добаляем свойство и делаем его невидимым для for...in с помощью свойства
anumerable: false, value - значение по умолчанию и даем возможность менять значение
 */
/*
Object.defineProperty(human.female, '_weight', {
    enumerable: false, ///true
    value: 60,
    writable: true
});

for (var gender in human) {
    console.log(gender + ':');
    for (var property in human[gender]){
        console.log(property + ':' + human[gender][property]);
    }
}

//делаем функции для set и get,
    Object.defineProperty(human.female, 'weight', {
        set: function (value) {
            //устанавливаем в приватную переменную свойство weight
            this._weight = value;
        },
        get: function () {
            //возращает значение свойййства - 20
            return this._weight - 30;
        }
        });
    human.female.weight = 80;
    console.log(human.female.weight);

    //запрещает добавление и изменение свойств с объекте
    var f = Object.freeze(human.male);
    human.male.weight = 100;
    console.log('freeze:' + human.male.weight);

*/
/**delete**/
/*
var colors = {
    red: '#ff0000',
    black: '#000000',
    blue: '#0000ff'
};
console.log(colors);
colors.green = '#00ff00'; //добавить ключ-значение
console.log(colors);
delete colors.green; //удалили
 */
/*
var user = {
    name: 'vasya',
    surname: 'pupkin',
    age: 50,
    option: {
        recieveMessages: false,
        recieveEmails: false
    }
};
    var arr = [
        [1,2,3,4,5],
        [1,2,3,4],
        [1,2,3,4,5,6],
        [1,2,3,4,5,6,7,8],
        [5,6,7],
        [1,2,3,4,5,6,6,6,7],
        [1,2,3,4,5,6,7,4,5,6,7]
    ];

    var human = {
        male: {
            height: 180,
            weight: 80,
            hairColor: 'brown',
            eyeColor: 'green'
        },
        female: {
            height: 170,
            hairColor: 'red',
            eyeColor: 'grey'
        }
    };
/*
  delete user.option.recieveEmails;
  user.option.recieveMessages = true;

  for(var key in user) {
      //если  значение ключа не является объектом
      if (typeof user[key] !== 'object') {
          console.log(key + ':' + user[key]);
      }else {
          //если объект, то перебираем его ключи
          for (var subkey in user[key]) {
              console.log(subkey + ':' + user[key][subkey]);
          }
      }
  } */
/*
console.log(user.length);
console.log(arr.length);
console.log(human.length);
*/
/*
    var data = [
        {
            name: 'Vasya',
            surname: 'Pupkin',
            type: 'student'
        },
        {
            name: 'Petya',
            surname: 'Vasechkin',
            type: 'teacher'
        },
        {
            name: 'Maksim',
            surname: 'Maksimov',
            type: 'student'
        },
        {
            name: 'Ignat',
            surname: 'Ignatenko',
            type: 'teacher'
        },
        {
            name: 'Foma',
            surname: 'Fomin',
            type: 'teacher'
        },
        {
            name: 'Sergey',
            surname: 'Seregin',
            type: 'student'
        },
        {
            name: 'Foma',
            surname: 'Pupkin',
            type: 'teacher'
        },
        {
            name: 'Foma',
            surname: 'Fomin',
            type: 'teacher'
        },
        {
            name: 'Sergey',
            surname: 'Seregin',
            type: 'student'
        }
    ];
var counter = 0;
var currentIndex = 0;

    while (counter < 2) {
        if (currentIndex === data.length) {
            console.log('iter', currentIndex);
            break;
        }
        if (data[currentIndex].type === 'teacher') {
            counter++;
            console.log(data[currentIndex].name + ' ' + data[currentIndex].surname);
        }
        currentIndex++;
    }
    var b = 0;
    for(var i = 0;i < data.length;i++) {

            if (data[i].type === 'teacher') {
                console.log(data[i]);
                b++;
            }
            if (b === 2) {
                break;
            }
    }
*/
/*
var user2 = {
    name: 'vasya',
    surname: 'ppupkin',
    age: 50,
    getFullName: function () {
        //this ссылка на текущий объект
        console.log(this.name + ' ' + this.surname);
    }
};
//если тако ключ есть и он является фукцией, то вызываем функию
    if (user2.getFullName && user2.getFullName instanceof Function) {
        user2.getFullName();
    }
    //функциональное выражение
    user2.getUserInfo = function () {
        console.log(this.name + ' ' + this.name + ' ' + this.age);
    };
    if (user2.getUserInfo && user2.getUserInfo instanceof Function) {
        user2.getUserInfo();
        user2.age = 51;
        user2.getUserInfo();
    }
*/
/*
    var user2 = {
        name: 'vasya',
        surname: 'pupkin',
        age: 50,
        getFullName: function () {
            //this ссылка на текущий объект
            console.log(this.name + ' ' + this.surname);
        },
        getUserInfo: function () {
            return this.name + ' ' + this.surname + ' ' + this.age;
        },
        appearence: {
            height: 172,
            haircolor: 'grey-haired',
            eyecolor: 'blue'
        },
        characterTraits: ['kind', 'smart', 'strong', 'resourcefull']
    };
console.log('user2: ' + user2.getUserInfo());
for (var key in user2.appearence ) {
    console.log(key + ':' + ' ' + user2.appearence[key] );
}
console.log('Charactertraits' + ':');
for(var i = 0; i < user2.characterTraits.length; i++) {
    console.log(user2.characterTraits[i]);
}
*/
/*
var users = [
    {
        name: 'vasya',
        surname: 'pupkin',
        age: 51
    },
    {
        name: 'Petia',
        surname: 'Vasechkin',
        age: 15
    },
    {
        name: 'Fedor',
        surname: 'Ivanov',
        age: 50
    }
    ];
for(var i = 0; i < users.length; i ++) {
    //console.log(users[i]);
    for ( key in users[i]) {
        document.write(users[i][key]);
        if (key === 'age') {
            document.write('<br>');
        }
    }
    }
   /*
    delete users[1];
    */
/*
   users.splice(0,1);

for(var i = 0; i < users.length; i ++) {
        console.log(users[i]);
    }

users.push({
    name: 'Ann',
    surname: 'Ivanova',
    age: 20
});
    for(var i = 0; i < users.length; i ++) {
        console.log(users[i]);
    }
    for(var i = 0; i < users.length; i ++) {
        document.write(i);
    }
console.log(users[1]);
    //удаляем 0 объектов, добавляем новый
    users.splice(4,0, {name: 'Marfa', surname: 'Petro', age: '60'});
    users.splice(-1,1); //удаляет с конца
  */
/*
    const employee = {
        name: 'John',
        phone: '+7 (765) 000-98-34',
        company: 'Opera Software',
        email: 'john@opera.com',
        duties: ['Frontend', 'Optimization', 'Testing']
    };
    for (var key in employee) {
        console.log(key + ':' + employee[key]);
    }
    //записываем ключи объекта в маасив keys, с помощью которого мы можем обращаться к свойствам объекта

    var keys = Object.keys(employee);
    console.log('keys: ', keys);
    //по ключу получаем значение
    keys.forEach(function (key) {
        console.log(key + ': ' + employee[key]);
    });
  */
/*
function bigSum() {
    var sum = 0;
    for (var i = -1000; i <= 1000; i++) {
            sum += i;
    }return sum;
}
var a = bigSum();
console.log(a);
*/
/*
    function bigSum() {
        var sum = 0;

        for (var i = -1000; i <= 1000; i++) {
            var indexStr = i.toString();
            if (indexStr[indexStr.length - 1] === '2'
            || indexStr[indexStr.length - 1] === '3'
            || indexStr[indexStr.length - 1] === '7') {
                sum += i;
            }
        }return sum;
    }
    var a = bigSum();
    console.log(a);
    */

});