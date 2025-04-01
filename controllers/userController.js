import { getUsers, addUser, getUserById, searchUser, deleteUser } from '../models/userModel.js'

export const getAllUsers = (req, res) => {
    const users = getUsers();
    res.json(users);
};

export const createUser = (req, res) => {
    const { name, firstname, age } = req.body;
    if (!name || !firstname || !age) {
        return res.status(400).json({ message: "Les champs name, firstname, age sont requis" });
    }

    const newUser = addUser(name, firstname, age);
    res.status(201).json(newUser);
};


export const getUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = getUserById(id);

    if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.json(user);
};

export const searchUsers = (req, res) => {
    const { name, age } = req.query;

    if (!name || !age) {
        return res.status(400).json({ message: "Veuillez renseigner le name et l'âge" });
    }

    const ageNumber = parseInt(age);
    const user = searchUser(name, ageNumber);

    if (!user) {
        return res.status(404).json({ message: "Aucun utilisateur trouvé" });
    }

    res.json(user);
};

export const deleteUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = deleteUser(id);

    if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.json(user);
};