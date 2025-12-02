async function deleteUser(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const response = await fetch(url, {
    method: 'DELETE'
  });

  return response; // повертаємо весь response, щоб тест міг перевірити .status
}

module.exports = deleteUser;
