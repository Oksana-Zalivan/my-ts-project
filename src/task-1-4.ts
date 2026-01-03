// 🔹 Задача 1. Функції/ Функція printProduct виводить інформацію про товар: назву, ціну та (опціонально) опис.
// Завдання:
// Додай типи для параметрів title, price, description.
// Зроби description опціональним.
// Типізуй тип повернення функції.
// Не змінюй реалізацію функції.
// function printProduct(title: string, price: number, description?: string): void {
//     console.log("Title:", title);
//     console.log("Price:", price);
//     if (description) {
//     console.log("Description:", description);
//     }
// }

// printProduct("Phone", 999);
// printProduct("Laptop", 1999, "Powerful device");



// 🔹 Задача 2.
// Функція showMessage виводить повідомлення та (опціонально) пріоритет.
// Завдання:
// Типізуй параметри text і priority.
// Зроби priority опціональним.
// Типізуй повернення функції.
// function showMessage(text: string, priority?: string): void {
//     console.log("Message:", text);
//     if (priority) {
//     console.log("Priority:", priority);
//     }
// }

// showMessage("Hello");
// showMessage("Server error", "high");



// 🔹 Задача 3.
// Функція printCoordinates виводить координати точки.
// Завдання:
// Типізуй параметри x і y.
// Типізуй тип повернення функції.
// Реалізацію не змінюй.
// function printCoordinates(x: number, y: number): void {
//     console.log(`X: ${x}, Y: ${y}`);
// }

// printCoordinates(10, 20);



// 🔹 Задача 4. 
// Функція logStatus виводить статус користувача.
// Завдання:
// Типізуй параметр isOnline.
// Типізуй тип повернення функції.
// function logStatus(isOnline: boolean): void {
//     console.log("Online:", isOnline);
// }

// logStatus(true);



// 🔹 Задача 5. 
// Функція printUser виводить ім’я користувача та (опціонально) вік.
// Завдання:
// Типізуй параметри name і age.
// Зроби age опціональним.
// Типізуй тип повернення.
// function printUser(name: string, age?: number): void {
//     console.log("Name:", name);
//     if (age) {
//     console.log("Age:", age);
//     }
// }

// printUser("Anna");
// printUser("Mark", 28);



// 🔹 Задача 6.
// Функція showDiscount виводить суму знижки.
// Завдання:
// Типізуй параметр amount.
// Типізуй тип повернення функції.
// function showDiscount(amount: number): void {
//     console.log("Discount:", amount);
// }

// showDiscount(15);



// 🔹 Задача 7. Функції (файл task-7.ts)
// Функція printOrderInfo виводить номер замовлення та (опціонально) статус.
// Завдання:
// Типізуй orderId і status.
// Зроби status опціональним.
// Типізуй тип повернення.
// function printOrderInfo(orderId: number, status?: string): void {
//     console.log("Order ID:", orderId);
//     if (status) {
//     console.log("Status:", status);
//     }
// }

// printOrderInfo(101);
// printOrderInfo(102, "shipped");



// 🔹 Задача 8. Функції (файл task-8.ts)
// Функція logTemperature виводить температуру та одиницю вимірювання.
// Завдання:
// Типізуй параметри value і unit.
// Типізуй тип повернення функції.
// function logTemperature(value: number, unit: string): void {
//     console.log(`${value} ${unit}`);
// }

// logTemperature(25, "C");



// 🔹 Задача 1. Функції з return 
// Функція sum повертає суму двох чисел.
// Завдання:
// Типізуй параметри a і b.
// Типізуй тип повернення функції.
// Реалізацію функції не змінюй.
// function sum(a: number, b: number): number {
//     return a + b;
// }

// const result = sum(5, 7);
// console.log(result);



// 🔹 Задача 2. Функції з return (файл task-return-2.ts)
// Функція getFullName повертає повне імʼя користувача.
// Завдання:
// Типізуй параметри firstName і lastName.
// Типізуй тип повернення функції.
// Реалізацію не змінюй.
// function getFullName(firstName: string, lastName: string): string {
//     return `${firstName} ${lastName}`;
// }

// const fullName = getFullName("Anna", "Smith");
// console.log(fullName);



// 🔹 Задача 3. Функції з return (файл task-return-3.ts)
// Функція isAdult перевіряє, чи є користувач повнолітнім.
// Завдання:
// Типізуй параметр age.
// Типізуй тип повернення функції.
// Реалізацію функції не змінюй.
// function isAdult(age: number): boolean {
//     return age >= 18;
// }

// const status = isAdult(20);
// console.log(status);



// 🔹 Задача 4. Функції з return (файл task-return-4.ts)
// Функція formatPrice повертає відформатований рядок з ціною.
// Завдання:
// Типізуй параметр price.
// Типізуй тип повернення функції.
// Не змінюй логіку функції.
// function formatPrice(price: number): string {
//     return `$${price}`;
// }

// const formatted = formatPrice(99.99);
// console.log(formatted);



