// const getUsers = async () => {
//     const data = await fetch("https://jsonplaceholder.typicode.com/users/i");
//     const users = await data.json();
//     console.log(users);

// };
// getUsers();

// const getUsers = async (id) => {
//   const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const users = await data.json();
//   console.log(users);
// };
// getUsers(5);

// Prikupiti sve usere a nakon toga vratiti json sa svim userima koji su prikazani sa odredjenim svojstvima
// id, name, username, email(malim slovima), telefon i adresu

// const getUsers = async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await data.json();
//   console.log(users);
//   users.forEach(
//     ({ id, name, username, email, phone, address: { street, suite } }) => {
//       console.log(
//         `id: ${id}, name: ${name}, username: ${username}, email: ${email}, phone: ${phone}. street: ${street}, suite: ${suite}
//     `
//       );
//     }
//   );
// };
// getUsers();
