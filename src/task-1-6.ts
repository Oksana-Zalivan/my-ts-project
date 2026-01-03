// Задача 1. Узагальнений останній елемент
// Функція getLastElement приймає масив і повертає його останній елемент.
// Завдання:
// Зроби функцію узагальненою через тип T.
// Додай явну типізацію дженерика у виклики getLastElement<number>(...), getLastElement<string>(...), тощо.
// Переконайся, що тип повернення — саме T.
// Перевір, що масив змішаних типів не проходить без коректного типу.
// function getLastElement<T>(arr:T[]):T {
//     return arr[arr.length - 1];
// }

// getLastElement<number>([1, 2, 3]);           // 3
// getLastElement<string>(["a", "b", "c"]);     // "c"
// getLastElement<boolean>([true, false, true]); // true



// Задача 2. Узагальнений кортеж з двох значень 
// Функція makePair створює масив з двох елементів.
// Завдання:
// Зроби функцію узагальненою так, щоб вона працювала для двох типів: T і U.
// Тип повернення має бути кортежем [T, U], а не “просто масивом”.
// Додай явні дженерики у виклики: makePair<number, number>(...), makePair<string, string>(...), тощо.
// Перевір поведінку для змішаних типів (наприклад number + string).
// function makePair<T, U>(a: T, b: U): [T, U] {
//     return [a, b];
// }

// makePair<number, number>(1, 2);            // [1, 2]
// makePair<string, string>("a", "b");        // ["a", "b"]
// makePair<boolean, boolean>(true, false);     // [true, false]



// Задача 3. Узагальнена перевірка на наявність
// Функція includesValue перевіряє, чи є значення в масиві.
// Завдання:
// Узагальни функцію типом T.
// arr має бути T[], а value має бути T.
// Додай явні дженерики у виклики.
// Переконайся, що includesValue([1,2,3], "2") не компілюється.
// function includesValue<T>(arr: T[], value: T): boolean {
//     return arr.includes(value);
// }

// includesValue<number>([1, 2, 3], 2);               // true
// includesValue<string>(["a", "b", "c"], "d");       // false
// includesValue<boolean>([true, false], false);       // true



// Задача 4. Узагальнений реверс масиву
// Функція reverseArray повертає новий масив у зворотному порядку.
// Завдання:
// Зроби функцію дженериковою <T>.
// Тип повернення має бути T[].
// Додай явні дженерики у виклики.
// Перевір, що змішані масиви не проходять без правильного узгодження типів.
// function reverseArray<T>(arr: T[]): T[] {
//     return [...arr].reverse();
// }

// reverseArray<number>([1, 2, 3]);           // [3,2,1]
// reverseArray<string>(["a", "b"]);          // ["b","a"]
// reverseArray<boolean>([true, false]);       // [false,true]



// Задача 5. Узагальнене значення за ключем 
// Функція getProp повертає значення поля об’єкта за ключем.
// Завдання:
// Узагальни тип об’єкта T.
// Обмеж ключ K так, щоб це був лише ключ об’єкта: K extends keyof T.
// Тип повернення має бути T[K].
// Перевір, що getProp({name:"Oksana"}, "age") викликає помилку.
// function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }

// getProp<{ name: string, age: number }, "name"> ({ name: "Oksana", age: 38 }, "name"); // "Oksana"
// getProp<{title: string, pages: number}, "pages">({ title: "Book", pages: 120 }, "pages"); // 120



// Задача 6. Узагальнене оновлення об’єкта 
// Функція updateObj повертає новий об’єкт з оновленими значеннями.
// Завдання:
// Узагальни obj типом T.
// Зроби updates таким, щоб дозволялося оновлювати частину полів: Partial<T>.
// Тип повернення має бути T.
// Перевір, що не можна оновити неіснуюче поле.
function updateObj(obj, updates) {
    return { ...obj, ...updates };
}

updateObj({ name: "Oksana", age: 38 }, { age: 39 });
updateObj({ done: false }, { done: true });




// Задача 7. Узагальнене обгортання в масив 
// Функція toArray приймає значення і повертає масив з цим значенням.
// Завдання:
// Зроби функцію узагальненою <T>.
// Тип повернення має бути T[].
// Додай явні типи дженерика у виклики.
// Перевір, що toArray<number>("5") не компілюється.
// function toArray(value) {
//   return [value];
// }

// toArray(5);        // [5]
// toArray("hi");     // ["hi"]
// toArray(true);     // [true]




// Задача 8. Узагальнене злиття масивів 
// Функція concatArrays об’єднує два масиви.
// Завдання:
// Узагальни типом T.
// Обидва параметри мають бути T[], і результат теж T[].
// Додай явні дженерики у виклики.
// Перевір, що concatArrays([1,2], ["3"]) не проходить.
// function concatArrays(a, b) {
//   return a.concat(b);
// }

// concatArrays([1, 2], [3, 4]);           // [1,2,3,4]
// concatArrays(["a"], ["b", "c"]);        // ["a","b","c"]




// Задача 9. Узагальнене створення мапи з ключем
// Функція indexById будує об’єкт-словник, де ключ — id.
// Завдання:
// Узагальни тип елементів T, але обмеж так, щоб у T точно було поле id.
// id має бути рядком (або зроби варіант з string | number, якщо хочеш складніше).
// Тип результату має відображати, що значення — це T.
// Перевір, що масив без id не компілюється.
// function indexById(items) {
//   const result = {};
//   for (const item of items) {
//     result[item.id] = item;
//   }
//   return result;
// }

// indexById([{ id: "a", value: 1 }, { id: "b", value: 2 }]);




// Задача 10. Узагальнена безпечна “першість”
// Функція firstOrNull повертає перший елемент або null, якщо масив порожній.
// Завдання:
// Узагальни типом T.
// Тип повернення має бути T | null.
// Додай явні дженерики у виклики.
// Перевір, що TypeScript правильно розуміє: якщо повернулося не null, то це T.
// function firstOrNull(arr) {
//   return arr.length ? arr[0] : null;
// }

// firstOrNull([1, 2, 3]);       // 1
// firstOrNull([]);              // null
// firstOrNull(["a", "b"]);      // "a"


