// 🔹 Завдання 1. HTTP-запит: користувачі (task-1.ts)
// Функція fetchUsers робить GET-запит до API та повертає список користувачів.
// Завдання:
// Інсталюй бібліотеку axios (якщо ще не встановлена).
// Створи інтерфейс User з полями:
// id: number
// name: string
// email: string
// Типізуй axios.get, щоб API повертало User[].
// import axios from "axios";

// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

// async function fetchUsers(): Promise <User[]> {
//     const response = await axios.get<User[]> (
//         "https://jsonplaceholder.typicode.com/users"
//     );
//     return response.data;
// }

// fetchUsers().then(users => {
//     console.log(users[0].name);
// });



// 🔹 Завдання 2. HTTP-запит: коментарі (task-2.ts)
// Функція fetchComments повертає список коментарів.
// Завдання:
// Створи інтерфейс Comment.
// Поля: id, postId, body (усі обовʼязкові).
// Типізуй axios.get як масив коментарів.
// Переконайся, що comments[0].email — помилка TS.
// import axios from "axios";

// interface Comment {
//     id: number;
//     postId: number;
//     body: string;
// }

// async function fetchComments(): Promise<Comment[]> {
//     const response = await axios.get<Comment[]>(
//         "https://jsonplaceholder.typicode.com/comments"
//     );
//     return response.data;
// }

// fetchComments().then(comments => {
//     console.log(comments[0].body);
// });



// 🔹 Завдання 3. HTTP-запит: один пост за id (task-3.ts)
// Функція fetchPostById повертає один пост.
// Завдання:
// Створи інтерфейс Post.
// Типізуй axios.get так, щоб поверталося один Post.
// Переконайся, що post.length — помилка TS.
// import axios from "axios";

// interface Post {
//     id: number;
//     title: string;
// }

// async function fetchPostById(id: number): Promise<Post> {
//     const response = await axios.get<Post>(
//         `https://jsonplaceholder.typicode.com/posts/${id}`
//     );
//     return response.data;
// }

// fetchPostById(1).then(post => {
//     console.log(post.title);
// });



// 🔹 Завдання 4. HTTP-запит: список альбомів (task-4.ts)
// Функція fetchAlbums повертає список альбомів.
// Завдання:
// Створи інтерфейс Album з полями id, userId, title.
// Типізуй axios.get як Album[].
// Переконайся, що albums[0].body не існує.
// import axios from "axios";

// interface Album {
//     id: number;
//     userId: number;
//     title: string;
// }

// async function fetchAlbums(): Promise<Album[]> {
//     const response = await axios.get<Album[]>(
//         "https://jsonplaceholder.typicode.com/albums"
//     );
//     return response.data;
// }

// fetchAlbums().then(albums => {
//     console.log(albums[0].title);
// });



// 🔹 Завдання 5. POST-запит: створення поста (task-5.ts)
// Функція createPost створює новий пост.
// Завдання:
// Створи інтерфейс NewPost.
// Створи інтерфейс CreatedPost (з id).
// Типізуй аргумент функції та результат axios.post.
// import axios from "axios";

// interface NewPost {
//     title: string;
//     body: string;
// }

// interface CreatedPost extends NewPost {
//     id: number;
// }

// async function createPost(postData: NewPost): Promise<CreatedPost> {
//     const response = await axios.post<CreatedPost>(
//         "https://jsonplaceholder.typicode.com/posts",
//         postData
//     );
//     return response.data;
// }

// createPost({ title: "Hello", body: "World" }).then(post => {
//     console.log(post.id);
// });



// 🔹 Завдання 6. PUT-запит: оновлення поста (task-6.ts)
// Функція updatePost оновлює пост.
// Завдання:
// Створи інтерфейс Post.
// Типізуй параметр data так, щоб id не можна було передати.
// Типізуй результат axios.put.
// import axios from "axios";

// interface Post {
//     id: number;
//     title: string;
// }

// async function updatePost(id: number, data: Omit<Post, "id">): Promise<Post> {
//     const response = await axios.put<Post>(
//         `https://jsonplaceholder.typicode.com/posts/${id}`,
//         data
//     );
//     return response.data;
// }

// updatePost(1, { title: "Updated title" }).then(post => {
//     console.log(post.title);
// });



// 🔹 Завдання 7. DELETE-запит (task-7.ts)
// Функція deletePost видаляє пост.
// Завдання:
// Типізуй функцію так, щоб було зрозуміло: корисних даних немає.
// Переконайся, що result.title — помилка TS.
// import axios from "axios";

// async function deletePost(id: number): Promise <void> {
//     await axios.delete(
//         `https://jsonplaceholder.typicode.com/posts/${id}`
//     );
// }

// deletePost(1).then(() => {
//     console.log("Post deleted");
// });



// 🔹 Завдання 8. Generic API-функція (task-8.ts)
// Функція fetchData отримує дані з будь-якого URL.
// Завдання:
// Зроби функцію узагальненою <T>.
// Тип повернення має бути Promise<T>.
// Використай її для отримання Post[].
// import axios from "axios";

// async function fetchData<T>(url: string): Promise <T> {
//     const response = await axios.get<T>(url);
//     return response.data;
// }



// 🔹 Завдання 9. AxiosResponse (task-9.ts)
// Функція fetchTodos повертає список задач.
// Завдання:
// Створи інтерфейс Todo.
// Типізуй response як AxiosResponse<Todo[]>.
// Переконайся, що res.data[0].completed має тип boolean.
// import axios, { AxiosResponse } from "axios";

// interface Todo {
//     id: number;
//     title: string;
//     completed: boolean;
// }

// async function fetchTodos(): Promise<AxiosResponse<Todo[]>> {
//     const response: AxiosResponse<Todo[]> = await axios.get(
//         "https://jsonplaceholder.typicode.com/todos"
//     );
//     return response;
// }

// fetchTodos().then(res => {
//     console.log(res.data[0].title);
// });



// 🔹 Завдання 10. Обробка помилок axios (task-10.ts)
// Функція safeFetchPosts безпечно отримує список постів.
// Завдання:
// Типізуй успішну відповідь як Post[].
// Додай коректну типізацію помилки.
// Переконайся, що TS дозволяє перевіряти axios.isAxiosError.
// import axios from "axios";

// interface Post {
//     id: number;
//     title: string;
//     body: string;
// }

// async function safeFetchPosts(): Promise<Post[] | null> {
//     try {
//         const response = await axios.get<Post[]>(
//         "https://jsonplaceholder.typicode.com/posts"
//         );
//         return response.data;
//     } catch (error: unknown) {
//         if (axios.isAxiosError(error)) {
//         console.log("Axios error:", error.message);
//         } else {
//         console.log("Unknown error:", error);
//         }
//         return null;
//     }
// }

