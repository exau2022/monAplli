
const users = [
    { id: 1, name: "ADJAYA", firstname: "Exaucée", age: 24 },
    { id: 2, name: "GNANDJA", firstname: "Gildas", age: 25 }
];

export const getUsers = () => users;

export const addUser = (name, firstname, age) => {
    const newUser = {
        id: users.length + 1,
        name,
        firstname,
        age
    };
    users.push(newUser);
    return newUser;
};

export const getUserById = (id) => users.find(user => user.id === id);

export const searchUser = (name, age) => users.find(user => user.name === name && user.age === age);

export const deleteUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null;
    return users.splice(index, 1);
};