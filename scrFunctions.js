document.addEventListener('DOMContentLoaded',function () {

    /* Все переменные внутри функции – это свойства специального
    внутреннего объекта LexicalEnvironment, который создаётся при
    её запуске. Мы будем называть этот объект «лексическое окружение»
    или просто «объект переменных». При запуске функция создает объект
    LexicalEnvironment, записывает туда аргументы, функции и переменные.
        Процесс инициализации выполняется в том же порядке, что и для
    глобального объекта, который, вообще говоря, является частным
    случаем лексического окружения. В отличие от window, объект
    LexicalEnvironment является внутренним, он скрыт от прямого доступа. */

    /**Вложенные функции**/
    /*
     function sayHiBye (firstName, lastName) {
        alert("Привет, " + getFullName() );
        alert('Bye, ' + getFullName() );
        function getFullName() {
            return firstName + ' ' lastName;
        }
    }
    sayHiBye('Vasya', 'Vasin');
     alert(getFullName()); //недоступна
     */

    /** Каррирование - когда функия возращает ункцию и возращаемая функция сразу же вызывается**/
    /*
    function curry(greeting) {
        return function (name) {
            alert(greeting + ', ' + name);
        }
    }
    curry('Hi')('Vasya');

    //может быть любая вложенность

    function curryHard(greeting) {
        return function (name) {
            return function (surname) {
                alert(greeting + ', ' + name + ' ' + surname);
            }
        }
    }
    curryHard('Hi')('Vasya')('Vasin');
    */
    /*
    function f2() {
        alert('f2.test: ' + f2.test);
        f2.test ++;
    }
    f2.test = 1;
    f2();
    f2();
    */
    /** рекурсивные функии - функции которые вызывают сами себя**/
    //1*2
    /*
    function factorial(x) {
        if(x !== 1) {
            //2* factorial(2-1)
            return x * factorial(x - 1); //return 2*1
        }else {
            return x;
        }
    }
    alert(factorial(2));
    */
    /*
    function factorial(x) {
        if(x !== 1) {
            //3* factorial(3-1)
            return x * factorial(x - 1); //return 3*1
        }else {
            return x;
        }
    }
    alert(factorial(3));
    */
    //Бесконечная рекурсивная функция
    /*
    function factorail (x) {
        if(x !== 1) {
            console.log(x);
            return x * factorail(x);
        }else {
            return x;
        }
    }
    var f = factorail(10);
    alert(f);
    */
    //Степень через рекурсию
/*
    function grade(x,n) {
        if (x !== 0 && n !== 1){
            return x * grade(x, n - 1);
        }else {
            return x;
        }
    }
    var f = grade(2,3);
    alert(f);
    */
/** Использование return с множественным выбором**/
/*
var r = 0;
function rtrn() {
    if (r) {
        return true
    }else {
        return false;
    }
}
console.log('rtrn',rtrn());
 */
/*
function sum(a,b,c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}
console.log(sum());

function sum1(a,b,c) {
    if (!a || !b || !c) {
        throw new Error('errow')
    }
    return a + b + c;
}
console.log(sum1());

    function sum2(a,b,c) {
        if (!a || !b || !c) {
            throw new ReferenceError('error');
        }
        return a + b + c;
    }
    console.log(sum2());
    */
/** Ссылка на объект и копирование объекта**/
/*
var obj = {
    k1: 'v',
    k2: 'e'
};

//таким образом мы не копируемб а создаем ссылку на первый  obj
    var obj2 = obj;

// поменяв значение свойств второго объекта поменялось и у первого
obj2.k1 = 'y';
*/

// метод для копирования объекта
 /*
    var obj = {
        k1: 'v',
        k2: 'e'
    };
 /*
var obj2 = Object.assign({}, obj);
console.log(obj);
*/
 /*
//assign копирует объект без ссылки только если объект плоский
    var obj = {
        k1: 'v',
        k2: {
            k3: 'e',
            k4: 'o'
        }
    };

var obj2 = Object.assign({}, obj);
obj2.k2.k3 = 'changed';
console.log(obj);
console.log(obj2);
*/
 /*
 //объединяем плоские объекты в один
    var ob = {a: 'a'};
    var ob2 = {b: 'b'};
    var ob3 = {c: 'c'};
    var ob4 = Object.assign ( {}, ob,ob2,ob3);
    console.log('ob4',ob4);
    */
 /*
 //но если есть одинаковые ключи, копирует последний
    var ob = {a: 'a'};
    var ob2 = {a: 'a1'};
    var ob3 = {c: 'c'};
    var ob4 = Object.assign ( {}, ob,ob2,ob3);
    console.log('ob4',ob4);
    */
 /*
    function sum(){
        var res = 0;
        for(var i = 0; i < arguments.length; i++){
            res += arguments[i];
        }
        return res;
    }

    console.log(sum(1,2,3,4,5,6,7,8,9,10,11));
    */
 //функция которая принимает массив и неограниченное кол-во аргументов
    /*
 function pushToArrayMultiple(array, el) {
//Выводит агрументы, которые функция получила отнас
     console.log('args', arguments);
     //преобразовываем массив в строку, потому что строка это примитивный тип данных и он не изменится
     // по ссылке, как в случае в объектами и преобразовываем ее обратно в массив и записываем в переменную
     var res = JSON.parse(JSON.stringify(array));
     //добавили в массив элементы
     res.push(el);
     //теперь добавляем остальное неопределенное кол-во аргументов в массив
     if (arguments.length > 2) {
         for (var i = 2; i < arguments.length; i++) {
             res.push(arguments[i]);
         }
     }return res;
 }
 var arr = ['asd'];
 var newArr = pushToArrayMultiple(arr, '1', '2', '3', '4');
 console.log(newArr);
 */
    /** Concat - складывает массивы в один. Вызывается в пустом массиве и в него добавляются все элементы **/
    /*
    var newArr = [].concat(['asd'], ['sdf','sdf']);
    console.log(newArr.length);


    var newArr1 = [1,2,3].concat(['asd'], ['sdf','sdf']);
    console.log(newArr.length);
*/
    /** set Timeout**/
    /*
    function func() {
        alert('Hello!');
    }
    setTimeout(func, 1000); // it works after 1 sec
    // with arguments doesn't works in IE9

    function func2(phrase, who) {
        alert(phrase + ', ' + who);
    }
    setTimeout (func2, 2000, 'Hello', 'Vasya');

    // or something like that
    setTimeout (function () {alert('Hi')},4000);
    */
    /*
    var timeId = setTimeout(function () { alert('stop')}, 5000);
    setTimeout(function () {
        clearTimeout(timeId);
    }, 1000); //6000 - don't work
*/
    // Рекурсивный setTimeout
    /*
     var timerId = setTimeout(function tick() {
         alert('tic');
             timerId = setTimeout(tick,2000);
     }, 2000);

     setTimeout (function () {
         clearTimeout(timerId);
         alert('stop');
     }, 10000);
*/
    /** setInterval**/
        //begin repeat function with interval 0,5 sec
   /*
    var timerId = setInterval(function () {
        alert('tic');
    }, 500);

    //above 10 sec stop repeating
    setTimeout(function () {
        clearInterval(timerId);
        alert('stop');
    }, 10000);
*/
   // Т.к. DOM-свойство onclick, в итоге одно, то назначить более одного обработчика так нельзя.
/*
    var elem = document.getElementById('elem');
    function counter() {
        for (var i = 1; i <=10; i++) {
            alert(i);
        }
    }
    elem.onclick = counter;
   /* elem.onclick = function () {
        alert('Thanks');*/
/*
    function sayThanks() {
        alert('Thanks');
    }
    elem.onclick = sayThanks;
    //Если обработчик не нужен - его всегда можно убрать
    elem.onclick = null;
*/
/*
function handler() {
    alert('addEventListener');
}
var btn = document.getElementById('btn');
btn.addEventListener("click", handler);
btn.removeEventListener("click", handler);

    function handler1() {
        alert('Thanks');
    }
    btn.addEventListener("click", handler1);

*/
function fun() {
    var str = prompt('Enter name of your broweser');
    var res = str.toLowerCase();
    console.log(res);
}
fun();

});