// ✅ Блок 1 (Task 1). Generics: “елемент масиву / робота з масивом”
// 1.1 getLastElement
// task-1-1.ts
// Функція приймає масив будь-якого типу та повертає останній елемент.
// Вимоги:
// 1) Зроби функцію узагальненою <T>
// 2) Повернення має бути T
// 3) Додай явні дженерики у прикладах
function getLastElement(array) {
    return array[array.length - 1];
}

console.log(getLastElement<number>([1, 2, 3])); // 3
console.log(getLastElement<string>(["a", "b", "c"])); // "c"
console.log(getLastElement<boolean>([true, false])); // false

// 1.2 getMiddleElement
// task-1-2.ts
// Повертає середній елемент масиву. Якщо масив порожній — поверни undefined.
// Вимоги: <T>, return: T | undefined, явні дженерики у викликах.
// function getMiddleElement(array) {
//   if (array.length === 0) return undefined;
//   return array[Math.floor(array.length / 2)];
// }

// console.log(getMiddleElement<number>([10, 20, 30])); // 20
// console.log(getMiddleElement<string>(["x", "y", "z", "w"])); // "z"
// console.log(getMiddleElement<boolean>([])); // undefined

// 1.3 wrapInArray
// task-1-3.ts
// Приймає значення будь-якого типу і повертає масив із цим значенням.
// Вимоги: <T>, return: T[]
// function wrapInArray(value) {
//   return [value];
// }

// console.log(wrapInArray<number>(5)); // [5]
// console.log(wrapInArray<string>("hi")); // ["hi"]

// 1.4 swapPair
// task-1-4.ts
// Приймає два значення одного типу і повертає їх у кортежі навпаки.
// Вимоги: <T>, return: [T, T]
// function swapPair(a, b) {
//   return [b, a];
// }

// console.log(swapPair<number>(1, 2)); // [2, 1]
// console.log(swapPair<string>("a", "b")); // ["b", "a"]

// 1.5 repeatValue
// task-1-5.ts
// Створи масив довжини times, заповнений value.
// Вимоги: <T>, return: T[]
// function repeatValue(value, times) {
//   const result = [];
//   for (let i = 0; i < times; i++) result.push(value);
//   return result;
// }

// console.log(repeatValue<number>(7, 3)); // [7,7,7]
// console.log(repeatValue<string>("ok", 2)); // ["ok","ok"]

// 1.6 concatArrays
// task-1-6.ts
// Об’єднай два масиви одного типу в один.
// Вимоги: <T>, return: T[]
// function concatArrays(a, b) {
//   return [...a, ...b];
// }

// console.log(concatArrays<number>([1, 2], [3, 4])); // [1,2,3,4]
// console.log(concatArrays<string>(["a"], ["b", "c"])); // ["a","b","c"]

// 1.7 getFirstTwo
// task-1-7.ts
// Поверни перші два елементи як кортеж.
// Якщо елементів менше 2 — поверни undefined.
// Вимоги: <T>, return: [T, T] | undefined
// function getFirstTwo(array) {
//   if (array.length < 2) return undefined;
//   return [array[0], array[1]];
// }

// console.log(getFirstTwo<number>([1, 2, 3])); // [1,2]
// console.log(getFirstTwo<string>(["x"])); // undefined

// 1.8 toReadonly
// task-1-8.ts
// Поверни readonly-копію масиву (типово).
// Вимоги: <T>, return: ReadonlyArray<T>
// function toReadonly(array) {
//   return array;
// }

// const ro = toReadonly<number>([1, 2, 3]);
// ro.push(4) має бути помилкою TS

// 1.9 createPair
// task-1-9.ts
// Приймає два значення різних типів і повертає кортеж.
// Вимоги: <T, U>, return: [T, U]
// function createPair(a, b) {
//   return [a, b];
// }

// console.log(createPair<number, string>(1, "one")); // [1,"one"]
// console.log(createPair<boolean, number>(true, 10)); // [true,10]

// 1.10 mapToString
// task-1-10.ts
// Приймає масив будь-якого типу і повертає масив рядків (String(...)).
// Вимоги: <T>, return: string[]
// function mapToString(array) {
//   return array.map((x) => String(x));
// }

// console.log(mapToString<number>([1, 2, 3])); // ["1","2","3"]
// console.log(mapToString<boolean>([true, false])); // ["true","false"]

// ✅ Блок 2 (Task 2). Generics з обмеженнями extends
// 2.1 getLength
// task-2-1.ts
// Функція приймає значення, яке має length (рядок або масив), і повертає length.
// Вимоги: T extends { length: number }, return number
// function getLength(value) {
//   return value.length;
// }

// console.log(getLength<string>("hello")); // 5
// console.log(getLength<number[]>([1, 2, 3])); // 3

// 2.2 getId
// task-2-2.ts
// Приймає об’єкт, який має поле id: number, і повертає id.
// Вимоги: T extends { id: number }
// function getId(obj) {
//   return obj.id;
// }

// console.log(getId<{ id: number; name: string }>({ id: 5, name: "Ann" })); // 5

// 2.3 getProperty
// task-2-3.ts
// Повертає значення властивості key з об’єкта obj.
// Вимоги: K extends keyof T, return T[K]
// function getProperty(obj, key) {
//   return obj[key];
// }

// const user = { name: "Oksana", age: 38 };
// console.log(getProperty<typeof user, "name">(user, "name")); // "Oksana"
// console.log(getProperty<typeof user, "age">(user, "age")); // 38

// 2.4 setProperty
// task-2-4.ts
// Повертає новий об’єкт з оновленим значенням властивості.
// Вимоги: K extends keyof T, value: T[K]
// function setProperty(obj, key, value) {
//   return { ...obj, [key]: value };
// }

// const u = { name: "Max", age: 20 };
// console.log(setProperty<typeof u, "age">(u, "age", 21));

// 2.5 pluck
// task-2-5.ts
// Приймає масив об’єктів і ключ, повертає масив значень цього ключа.
// Вимоги: K extends keyof T, return Array<T[K]>
// function pluck(items, key) {
//   return items.map((i) => i[key]);
// }

// const people = [{ name: "Ann", age: 20 }, { name: "Bob", age: 25 }];
// console.log(pluck<(typeof people)[number], "name">(people, "name")); // ["Ann","Bob"]

// 2.6 findById
// task-2-6.ts
// Знайди об’єкт у масиві за id. Якщо нема — undefined.
// Вимоги: T extends { id: number }, return: T | undefined
// function findById(items, id) {
//   return items.find((x) => x.id === id);
// }

// 2.7 mergeObjects
// task-2-7.ts
// Змердж два об’єкти та поверни результат.
// Вимоги: <T extends object, U extends object>, return T & U
// function mergeObjects(a, b) {
//   return { ...a, ...b };
// }

// 2.8 sortByKeyNumber
// task-2-8.ts
// Відсортуй масив об’єктів за числовим ключем (наприклад age, price).
// Вимоги: K extends keyof T, але значення має бути number
// function sortByKeyNumber(items, key) {
//   return [...items].sort((a, b) => a[key] - b[key]);
// }

// 2.9 ensureHasName
// task-2-9.ts
// Приймає об’єкт, який має name: string, і повертає рядок: "Hello, <name>".
// function ensureHasName(obj) {
//   return `Hello, ${obj.name}`;
// }

// 2.10 pickTwoKeys
// task-2-10.ts
// Повертає новий об’єкт тільки з двома ключами.
// Вимоги: K1/K2 extends keyof T, return Pick<T, K1 | K2>
// function pickTwoKeys(obj, key1, key2) {
//   return { [key1]: obj[key1], [key2]: obj[key2] };
// }

// ✅ Блок 3 (Task 3). Типізація функцій (параметри/return)
// 3.1
// Типізуй функцію, що повертає суму двох чисел
// function sum(a, b) {
//   return a + b;
// }

// 3.2
// Типізуй функцію, що нічого не повертає (void)
// function logMessage(message) {
//   console.log(message);
// }

// 3.3
// Типізуй callback: applyDiscount(price, fn)
// fn приймає number і повертає number
// function applyDiscount(price, fn) {
//   return fn(price);
// }

// 3.4
// Типізуй функцію, яка повертає boolean: isEven(n)
// function isEven(n) {
//   return n % 2 === 0;
// }

// 3.5
// Типізуй функцію з optional параметром: greet(name?)
// якщо name немає — поверни "Hello!"
// function greet(name) {
//   return name ? `Hello, ${name}` : "Hello!";
// }

// 3.6
// Типізуй функцію з union: formatId(id: string | number): string
// function formatId(id) {
//   return `ID-${id}`;
// }

// 3.7
// Типізуй rest параметри: multiplyAll(...nums)
// повертає добуток усіх чисел
// function multiplyAll() {}

// 3.8
// Типізуй функцію, що повертає об’єкт:
// createUser(name, age) -> { name: string, age: number }
// function createUser(name, age) {
//   return { name, age };
// }

// 3.9
// Типізуй функцію, яка може повернути рядок або null:
// findUserName(id)
// function findUserName(id) {
//   return id === 1 ? "Oksana" : null;
// }

// 3.10
// Типізуй функцію з типом повернення never:
// throwError(message)
// function throwError(message) {
//   throw new Error(message);
// }

// ✅ Блок 4 (Task 4). Інтерфейси / типи об’єктів
// 4.1
// Створи інтерфейс User { id: number; name: string; }
// Типізуй функцію printUser(user)
// function printUser(user) {
//   return `${user.id}: ${user.name}`;
// }

// 4.2
// Інтерфейс Product { id: number; title: string; price: number; }
// Типізуй масив products: Product[]
// const products = [];

// 4.3
// Інтерфейс Address { city: string; street: string; }
// Інтерфейс User має поле address: Address
// const user = {};

// 4.4
// Інтерфейс з optional: User { name: string; email?: string }
// Типізуй функцію getEmail(user): string
// function getEmail(user) {
//   return user.email ?? "no-email";
// }

// 4.5
// Інтерфейс з readonly: User { readonly id: number; name: string }
// Спробуй змінити id — має бути помилка
// const u = { id: 1, name: "Ann" };

// 4.6
// Інтерфейс для функції:
// type Formatter = (value: string) => string
// Типізуй функцію runFormat(value, formatter)
// function runFormat(value, formatter) {
//   return formatter(value);
// }

// 4.7
// Створи інтерфейс ApiResponse<T> { data: T; status: number; }
// Зроби приклад: ApiResponse<string>

// 4.8
// Інтерфейс Admin extends User { role: "admin" }
// Типізуй об’єкт admin

// 4.9
// Типізуй Record: settings де ключ string і значення boolean
// const settings = {};

// 4.10
// Створи інтерфейс Post { id:number; title:string; body:string }
// Типізуй функцію getPostTitle(post): string
// function getPostTitle(post) {
//   return post.title;
// }

// ✅ Блок 5 (Task 5). Масиви та кортежі
// 5.1
// Типізуй numbers як масив чисел
// const numbers = [1, 2, 3];

// 5.2
// Типізуй tuple як [string, number]
// const tuple = ["age", 38];

// 5.3
// Типізуй coords як [number, number]
// const coords = [50.45, 30.52];

// 5.4
// Типізуй масив users: {id:number, name:string}[]
// const users = [{ id: 1, name: "Ann" }];

// 5.5
// Типізуй readonly масив
// const tags = ["ts", "js"];

// 5.6
// Типізуй matrix як number[][]
// const matrix = [
//   [1, 2],
//   [3, 4],
// ];

// 5.7
// Типізуй mixed як (string | number)[]
// const mixed = ["a", 1, "b", 2];

// 5.8
// Типізуй pairs як Array<[string, number]>
// const pairs = [
//   ["a", 1],
//   ["b", 2],
// ];

// 5.9
// Типізуй tupleWithOptional як [string, number?]
// const t = ["score", 10];

// 5.10
// Типізуй масив функцій: Array<() => void>
// const actions = [() => console.log("1"), () => console.log("2")];

// ✅ Блок 6 (Task 6). Union / Literal / Enum
// 6.1
// Створи тип Status = "success" | "error" | "loading"
// Типізуй змінну status
// let status = "loading";

// 6.2
// Типізуй функцію setTheme(theme), де theme: "light" | "dark"
// function setTheme(theme) {}

// 6.3
// Типізуй функцію parseInput(input: string | number): number
// function parseInput(input) {
//   return Number(input);
// }

// 6.4
// Створи enum Role { Admin, User, Guest }
// Типізуй об’єкт currentRole

// 6.5
// Типізуй функцію request(method), де method: "GET" | "POST"
// function request(method) {}

// 6.6
// Union для відповіді:
// type Result = { ok: true; data: string } | { ok:false; error:string }

// 6.7
// Literal return type:
// функція getDirection(): "left" | "right"
// function getDirection() {
//   return Math.random() > 0.5 ? "left" : "right";
// }

// 6.8
// Enum HttpCode { OK = 200, NotFound = 404 }
// Типізуй змінну code

// 6.9
// Union масиву: (number | boolean)[]
// const list = [1, true, 2, false];

// 6.10
// Типізуй функцію handleEvent(type), де type: "click" | "hover" | "scroll"
// function handleEvent(type) {}

// ✅ Блок 7 (Task 7). Promise типізація
// 7.1
// Типізуй функцію, що повертає Promise<string>
// function getHello() {
//   return new Promise((resolve) => resolve("Hello"));
// }

// 7.2
// Promise<number> із setTimeout
// function getRandomAfterDelay() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(Math.random()), 500);
//   });
// }

// 7.3
// Promise з об’єктом {id:number, name:string}
// function getUserAsync() {
//   return new Promise((resolve) => resolve({ id: 1, name: "Ann" }));
// }

// 7.4
// async function, яка повертає Promise<boolean>
// async function isServerAlive() {
//   return true;
// }

// 7.5
// Promise<string[]> — поверни масив рядків
// function getTagsAsync() {
//   return Promise.resolve(["ts", "js"]);
// }

// 7.6
// Promise з union: Promise<string | null>
// function getToken() {
//   return Promise.resolve(null);
// }

// 7.7
// Типізуй then: result має бути string
// getHello().then((result) => {
//   console.log(result.toUpperCase());
// });

// 7.8
// Типізуй reject: Promise<string> але reject(Error)
// function failAsync() {
//   return new Promise((_, reject) => reject(new Error("Fail")));
// }

// 7.9
// Promise<void> — просто затримка
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// 7.10
// Promise<{data:number[]}> — типізуй явно
// function getNumbersWrapped() {
//   return Promise.resolve({ data: [1, 2, 3] });
// }

// ✅ Блок 8 (Task 8). Axios + типізація API
// 8.1 Posts
// import axios from "axios";

// interface Post {
//   id: number;
//   title: string;
//   body: string;
// }

// Типізуй axios.get так, щоб response.data було Post[]
// async function fetchPosts() {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   return response.data;
// }

// 8.2 Users
// import axios from "axios";

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// async function fetchUsers() {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return response.data;
// }

// 8.3 Comments
// import axios from "axios";

// interface Comment {
//   id: number;
//   postId: number;
//   body: string;
// }

// async function fetchComments() {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
//   return response.data;
// }

// 8.4 Single post by id
// import axios from "axios";

// interface Post {
//   id: number;
//   title: string;
//   body: string;
// }

// async function fetchPostById(id: number) {
//   const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   return response.data;
// }

// 8.5 Create post (POST)
// import axios from "axios";

// interface NewPost {
//   title: string;
//   body: string;
// }

// interface CreatedPost extends NewPost {
//   id: number;
// }

// async function createPost(payload: NewPost) {
//   const response = await axios.post("https://jsonplaceholder.typicode.com/posts", payload);
//   return response.data;
// }

// 8.6 Update post (PUT)
// import axios from "axios";

// interface Post {
//   id: number;
//   title: string;
//   body: string;
// }

// async function updatePost(id: number, payload: Omit<Post, "id">) {
//   const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, payload);
//   return response.data;
// }

// 8.7 Delete post (DELETE)
// import axios from "axios";

// Типізуй так, щоб TS не давав доступу до data.title після DELETE
// async function deletePost(id: number) {
//   const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   return response.data;
// }

// 8.8 API wrapper generic
// import axios from "axios";

// Напиши generic-функцію requestGet<T>(url): Promise<T>
// і використай її для завантаження Post[]

// 8.9 Типізація AxiosResponse
// import axios, { AxiosResponse } from "axios";

// interface Post {
//   id: number;
//   title: string;
//   body: string;
// }

// Типізуй response як AxiosResponse<Post[]>
// async function fetchTyped() {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   return response.data;
// }

// 8.10 Обробка помилок
// import axios from "axios";

// Додай типізацію помилки в catch так,
// щоб ти коректно перевіряла axios.isAxiosError(...)
// async function safeFetch() {
//   try {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     return response.data;
//   } catch (error) {
    // тут типізуй і оброби
//   }
// }


