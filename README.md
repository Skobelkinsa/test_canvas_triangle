Тестовое задание для GFX 
=
// 0
-
```js
if(x == NaN) x = 0;
```
Данный пример неверен, т.е. результатом данной проверки всегда будет false. NaN в x может появиться в результате различных математических операций заведомо неверных, например деление на 0 и др. было бы просто не логичным возвращать 0, для того чтобы проверить x на NaN нужно воспользоваться методом isNaN. 
Так же переменная x не определена, но допустим она была определена и в ней NaN тогда правильным примером будет:
```js
var x = NaN;
if(isNaN(x)) x = 0;
```
 
// 1
-
```js
var x = 0.3 - 0.1;
if(x == 0.2) x++;
```
Типичная ошибка JavaScript работает по формату, определяемый стандартом IEEE-754, где числа с плавающей точкой представляются с точностью до 17 разряда (не включая сам 17 разряд). Результатом вычитания будет 0.19999999999999998
Для работы с числами где не нужна точность до 17 разряда, следует округлить x до необходимого знака после запятой:
```html
var x = (0.3 - 0.1).toFixed(2);
if(x == 0.2) x++;
``` 
// 2
-
```js
var a = [0, 1, 2, 3];
for(var i = 0; i < a.lengh; i++) 
	if(a[i] == 2) 
		a.splice(i, 1);
```
Кек :D ошибка в названии lengh правильно:length
 
// 3
-
```js
class A {
	constructor(x = 0, y = 0, z = 0) {
		this.x = x;
		this.y = x;
		this.z = z;
	}
}
class B extends A {
	constructor(x = 0, y = 0, z = 0, w = 0) {
		this.w = w;
		super(x, y, z);
	}	
}
```
В примере несколько ошибок, во первых this.y = x; должен быть по логике this.y = y; Во вторых функцию super() необходимо вызвать до первого обращения к ключевому слову this в теле конструктора.
 ```js
class A {
 	constructor(x = 0, y = 0, z = 0) {
 		this.x = x;
 		this.y = y;
 		this.z = z;
 	}
 }
 class B extends A {
 	constructor(x = 0, y = 0, z = 0, w = 0) {
 		super(x, y, z);
 		this.w = w;
 	}	
 }
 ```
// 4
-
 ```js
class Game {
	start() { }
	clear() { }
	restart() {
		this.clear();
		setTimeout(function() {
		    this.start();
		}, 16);
	}
}

var game = new Game();
game.restart();
```

Тут у  this.start(); нет доступа, если мы хотим отложить выполнение функции start то нужно передать в setTimeout экземпляр класса вызвав метод start()
 ```js
class Game {
	start() { }
	clear() { }
	restart() {
		this.clear();
		setTimeout(function() {
		    new Game().start()
		}, 16);

	}
}

var game = new Game();
game.restart();
 ```
// 5
-
 ```js
function load(url, callback) {
	if(Math.random()>0.5) setTimeout(callback, 100; ); 
	else callback();
}
var count = urls.length;
var urls = [
	'http://www.w0.org', 
	'http://www.w1.org', 
	'http://www.w2.org', 
	'http://www.w3.org'
];
for(var i = 0; i < urls.length; i++) {
	load(urls[i], () => {
		counter--;
		if(counter == 0) 
			console.log('Finally loaded!');
	});
}
```
В этом примере несколько ошибок: 
if(Math.random()>0.5) setTimeout(callback, 100; ); - синтаксическая ошибка ( после 100 не нужен символ ;), var count = urls.length; выполняется до того как была определена переменная url, далее counter тут не определен и вообще складывается стойкое ощущение что тут в роли counter должен быть count представленный выше.
 ```js
function load(url, callback) {
  if(Math.random()>0.5) setTimeout(callback, 100);
else callback();
}

const urls = [
  'http://www.w0.org',
  'http://www.w1.org',
  'http://www.w2.org',
  'http://www.w3.org'
];
let count = urls.length;
for(let i = 0; i < urls.length; i++) {
  load(urls[i], () => {
    count--;
    if(!count)
      console.log('Finally loaded!');
  });
}
```