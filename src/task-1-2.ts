// 🔹 Задача 1. Інтерфейси 
// У цьому фрагменті коду є об'єкт user, який описує користувача.
// Завдання:
// Створи інтерфейс User.
// Зроби поле id тільки для читання.
// Зроби поле email необов’язковим.
// Типізуй змінну user за допомогою інтерфейсу.
// Не змінюй об’єкт і його значення.
// interface User {
//     readonly id: number;
//     name: string;
//     email?: string;
// }

// const user: User = {
//     id: 101,
//     name: "Oksana",
//     email: "oksana@example.com",
// };

// console.log(user);



// 🔹 Задача 2.
// У коді описаний об’єкт book.
// Завдання:
// Створи інтерфейс Book.
// Зроби поле isbn тільки для читання.
// Зроби поле author необов’язковим.
// Типізуй змінну book.
// Значення обʼєкта не змінюй.
// interface Book {
//     readonly isbn: string;
//     title: string;
//     author?: string;
// }

// const book: Book = {
//     isbn: "978-966-7047-95-8",
//     title: "Clean Code",
//     author: "Robert Martin",
// };

// console.log(book.title);



// 🔹 Задача 3.
// Об’єкт order описує замовлення.
// Завдання:
// Створи інтерфейс Order.
// Зроби поле orderId readonly.
// Зроби поле isPaid необовʼязковим.
// Типізуй змінну order.
// interface Order {
//     readonly orderId: number;
//     amount: number;
//     isPaid?: boolean;
// }

// const order: Order = {
//     orderId: 5001,
//     amount: 349.99,
//     isPaid: false,
// };

// console.log(order);



// 🔹 Задача 4.
// У коді є обʼєкт profile.
// Завдання:
// Створи інтерфейс Profile.
// Зроби поле username тільки для читання.
// Зроби поле age необовʼязковим.
// Типізуй змінну profile.
// interface Profile {
//     readonly username: string;
//     age?: number;
// }

// const profile: Profile = {
//     username: "frontend_dev",
//     age: 28,
// };

// console.log(profile.username);



// 🔹 Задача 5.
// Об’єкт settings описує налаштування застосунку.
// Завдання:
// Створи інтерфейс Settings.
// Зроби поле theme readonly.
// Зроби поле notifications необовʼязковим.
// Типізуй змінну settings.
// interface Settings {
//     readonly theme: string;
//     notifications?: boolean;
// }

// const settings: Settings = {
//     theme: "dark",
//     notifications: true,
// };

// console.log(settings);



// 🔹 Задача 6.
// У коді описаний об’єкт comment.
// Завдання:
// Створи інтерфейс Comment.
// Зроби поле id тільки для читання.
// Зроби поле text обовʼязковим.
// Типізуй змінну comment.
// interface Comment {
//     readonly id: number;
//     text: string;
// }

// const comment: Comment = {
//     id: 77,
//     text: "Great job!",
// };

// console.log(comment.text);



// 🔹 Задача 7.
// Об’єкт video описує відео.
// Завдання:
// Створи інтерфейс Video.
// Зроби поле title readonly.
// Зроби поле duration необовʼязковим.
// Типізуй змінну video.
// interface Video {
//     readonly title: string;
//     duration?: number;
// }

// const video: Video = {
//     title: "TypeScript Basics",
//     duration: 540,
// };

// console.log(video);



// 🔹 Задача 8.
// У коді є обʼєкт lesson.
// Завдання:
// Створи інтерфейс Lesson.
// Зроби поле id тільки для читання.
// Зроби поле topic обовʼязковим.
// Типізуй змінну lesson.
// interface Lesson {
//     readonly id: number;
//     topic: string;
// }

// const lesson: Lesson = {
//     id: 12,
//     topic: "Interfaces",
// };

// console.log(lesson.topic);



// 🔹 Задача 9.
// Обʼєкт employee описує працівника.
// Завдання:
// Створи інтерфейс Employee.
// Зроби поле employeeId readonly.
// Зроби поле position необовʼязковим.
// Типізуй змінну employee.
// interface Employee {
//     readonly employeeId: number;
//     position?: string;
// }

// const employee: Employee = {
//     employeeId: 900,
//     position: "Junior Frontend Developer",
// };

// console.log(employee);



// 🔹 Задача 10.
// У коді описаний об’єкт task.
// Завдання:
// Створи інтерфейс Task.
// Зроби поле title тільки для читання.
// Зроби поле completed необовʼязковим.
// Типізуй змінну task.
// interface Task {
//     readonly title: string;
//     completed?: boolean;
// }

// const task: Task = {
//     title: "Learn TypeScript",
//     completed: false,
// };

// console.log(task.completed);

