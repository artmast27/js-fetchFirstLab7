// "Ваш код повинен зробити POST-запит до вказаного URL."
// "Для створення нового користувача, передайте в запит наступні дані:"
// "name: ваше ім'я"
// "email: ваш email"
// "Поверніть відповідь від сервера після створення користувача."

const URL = "https://jsonplaceholder.typicode.com/users";

async function createUser(user) {
  // робимо POST-запит з тілом у форматі JSON
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  // базова перевірка, що сервер відповів успішно
  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  // повертаємо дані, які надіслав сервер (мають містити id, name, email)
  const data = await response.json();
  return data;
}

console.log(
  createUser({ name: "Sam", email: "fjsnfkjns2342@gmail.com" })
);

module.exports = createUser;
