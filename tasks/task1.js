// "Ваша функція повинна робити GET-запит до вказаного URL і отримати користувачів."
// "Поверніть дані користувачів у форматі масиву"
// "Дані мають включати такі поля, як id та name."

const URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  // робимо GET-запит
  const response = await fetch(URL);

  // базова перевірка, що запит успішний
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  // перетворюємо відповідь у формат JSON (масив об'єктів користувачів)
  const data = await response.json();

  // API вже повертає масив з об'єктами, які містять id та name,
  // тому можемо просто повернути його
  return data;
}

console.log(fetchUsers());

module.exports = fetchUsers;
