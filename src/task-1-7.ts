// 🔹 Задача 1. Типізація Promise з числом (task-1.ts)
// Функція getRandomNumber повертає проміс, який через затримку повертає випадкове число.
// Завдання:
// Додай явну типізацію функції — вона має повертати проміс.
// Переконайся, що проміс резолвиться значенням типу number.
// function getRandomNumber(): Promise<number> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         resolve(Math.random());
//         }, 500);
//     });
// }

// getRandomNumber().then(result => console.log(result.toFixed(2)));



// 🔹 Задача 2. Promise з boolean (task-2.ts)
// Функція isAvailable повертає проміс, який через затримку повертає true.
// Завдання:
// Типізуй функцію так, щоб вона повертала Promise<boolean>.
// Перевір, що TS не дозволяє повернути рядок.
// function isAvailable(): Promise<boolean> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         resolve(true);
//         }, 300);
//     });
// }

// isAvailable().then(result => console.log(result));



// 🔹 Задача 3. Promise з об’єктом (task-3.ts)
// Функція getUser повертає проміс з обʼєктом користувача.
// Завдання:
// Створи інтерфейс User.
// Типізуй функцію як Promise<User>.
// Переконайся, що доступ до user.age викликає помилку TS.
// interface User {
//     id: number;
//     name: string;
// }

// function getUser(): Promise<User> {
//     return new Promise((resolve) => {
//         resolve({ id: 1, name: "Oksana" });
//     });
// }

// getUser().then(user => console.log(user.name));



// 🔹 Задача 4. Promise з масивом рядків (task-4.ts)
// Функція getTags повертає список тегів.
// Завдання:
// Типізуй функцію як Promise<string[]>.
// Переконайся, що tags.push(1) не компілюється.
// function getTags(): Promise<string[]> {
//     return new Promise((resolve) => {
//         resolve(["ts", "js", "react"]);
//     });
// }

// getTags().then(tags => console.log(tags.length));



// 🔹 Задача 5. Promise з union-типом (task-5.ts)
// Функція getToken повертає токен або null.
// Завдання:
// Типізуй функцію як Promise<string | null>.
// Перевір, що TS змушує перевіряти null.
// function getToken(): Promise <string | null> {
//     return new Promise((resolve) => {
//         resolve(null);
//     });
// }

// getToken().then(token => console.log(token));



// 🔹 Задача 6. async-функція (task-6.ts)
// Функція checkConnection написана з async.
// Завдання:
// Додай явну типізацію повернення.
// Переконайся, що результат — boolean.
// async function checkConnection(): Promise<boolean> {
//     return true;
// }

// checkConnection().then(result => console.log(result));



// 🔹 Задача 7. Promise з затримкою без значення (task-7.ts)
// Функція delay просто чекає заданий час.
// Завдання:
// Типізуй функцію як Promise<void>.
// Перевір, що в then немає значення.
// function delay(ms: number): Promise<void> {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// delay(1000).then(() => console.log("Done"));



// 🔹 Задача 8. Promise з масивом об’єктів (task-8.ts)
// Функція getPosts повертає список постів.
// Завдання:
// Створи інтерфейс Post.
// Типізуй функцію як Promise<Post[]>.
// Переконайся, що posts[0].body — помилка TS.
// interface Post {
//     id: number;
//     title: string;
// }

// function getPosts(): Promise<Post[]> {
//     return new Promise((resolve) => {
//         resolve([
//         { id: 1, title: "Post 1" },
//         { id: 2, title: "Post 2" },
//         ]);
//     });
// }

// getPosts().then(posts => console.log(posts[0].title));



// 🔹 Задача 9. Promise з reject (task-9.ts)
// Функція loadData завжди завершується помилкою.
// Завдання:
// Типізуй функцію як Promise<never>.
// Переконайся, що then тут недоречний.
// function loadData(): Promise<never> {
//     return new Promise((_, reject) => {
//         reject(new Error("Failed"));
//     });
// }

// loadData().catch(error => console.log(error.message));



// 🔹 Задача 10. Promise з generic-типом (task-10.ts)
// Функція wrapAsync обгортає будь-яке значення в проміс.
// Завдання:
// Зроби функцію узагальненою <T>.
// Тип повернення має бути Promise<T>.
// Переконайся, що тип result відповідає переданому значенню.
// function wrapAsync<T>(value: T): Promise<T> {
//     return Promise.resolve(value);
// }

// wrapAsync(10).then(result => console.log(result));
// wrapAsync("hi").then(result => console.log(result));


