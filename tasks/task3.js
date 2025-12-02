// "Ваш код повинен зробити PATCH-запит до вказаного URL, де {userId} - id користувача."
// "Для оновлення користувача передайте в запит нові дані, наприклад, { name: 'New Name' }."
// "Поверніть відповідь від сервера з оновленими даними користувача."

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

async function updateUser(id, updatedData) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  const data = await response.json();
  return data;
}

console.log(updateUser(1, { name: "New Name" }));

module.exports = updateUser;
