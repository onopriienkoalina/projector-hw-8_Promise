/*1.
debugger
console.log('start');

const promise1 = new Promise((resolve, reject) => {
console.log(1)
resolve(2)
})

promise1.then(res => {
console.log(res)
})

console.log('end');

Результат виклику буде: start, 1, end, 2. Тому що проміс працює асинхронно і не блокує
потік виконання коду, promise1.then поміститься у API і буде чекати поки виконається
основний код. 
Код працює так:
1) console.log('start');
2) створюється об'єкт promise1 і виводить console.log(1);
ще тут визивається функція resolve(2) і метод .then, який виведе в консоль res коли 
до нього дійде черга.
3) console.log('end');
4) виконується проміс resolve(2) і виводиться в консоль.
*/
/*debugger
Promise.resolve(1)
		.then((x) => x + 1)
		.then((x) => { throw new Error('My Error') })
		.catch(() => 1)
		.then((x) => x + 1)
		.then((x) => console.log(x))
		.catch(console.error)

Результат виклику буде 2. Тому що в середині коду викидується помилка яка зупиняє 
роботу і передає в метод catch, він повертає новий проміс
який вирішується зі значенням яке зазначено в catch, в нашому випадку це 1.
Код працює так:
1) створюється об'єкт Promise.resolve(1)
2) визивається .then і додає 1 до 1 (з об'єкту Promise) та повертає 2
3) викидається помилка
4) .catch перехоплює помилку і повертає 1 (1 указано)
5) .then додає 1 до 1 (1 з .catch) та повертає 2
6) .then виводить 2 в консоль
7) якщо була б помилка .catch би її перехопив і вивів її в консоль
*/
/*debugger
const promise = new Promise(res => res(2));
	promise.then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .finally(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	    });

Результат виклику буде: 2, 4, undefined, 8. 
1) створюється new Promise у якого res(2)
2) .then приймає 2 з res і виводить її у консоль, а потім повертає 2*2
3) .then приймає 4 і виводить її у консоль, а потім повертає 4*2
4) .finally не приймає аргументів та не міняє значення, і не може змінити значення
передане з попереднього .then та не має доступу до результату, тому виводить undefined.
5) .then приймає 8 і виводить її у консоль
*/
