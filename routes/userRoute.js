import express from 'express';
// Importation des fonctions du contrôleur 
import { getAllUsers, createUser, getUser, searchUsers, deleteUserById } from "../controllers/userController.js";

//Création d'un objet router qui permet de définir des routes séparément de l'application principale.
const router = express.Router();

//Récuperer tous les utilisateurs
router.get('/users', getAllUsers);
//creer un utilisateur
router.post('/users', createUser);
//récuperer un utilisateur en fonction de l'id
router.get('/users/:id', getUser);
//rechercher un utilisateur en fonction des paramètres
router.get('/search', searchUsers);
// supprimer un utilisateur
router.delete('/users/:id', deleteUserById);

export default router;


