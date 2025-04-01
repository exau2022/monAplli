import express from 'express';
const port = 9100;
const app = express();
/*middleware  permet à Express de lire et de traiter les données envoyées en Json 
dans le body d'une requête POST
*/
app.use(express.json());
//créer un tableau des utilisateurs 
// la route get('/users') récupéères tous les utilisateurs et renvoie une réponse json
// la route post('/users') ajoute un utilisateur dans le tableau principal
// la route get('/users/:id) récupère un utilisateur en fo nction de l'id
//la route get('search') qui prend une chaîne de requête avec nom et age comme propriete
// la route delete(/'users/:id')
const users = [
    {id:1, name:"ADJAYA", firstname: "Exaucée", age:24},
    {id:2, name:"GNANDJA",firstname: "Gildas",age:25}
];

app.get('/',(req,resp) => {
    resp.send("Hello");
});

app.get('/users',(req,resp) => {
  
    resp.json(users)
});

app.post('/users',(req,resp) =>{
    // definition des données qui seront envoyées par post
    const name = req.body.name;
    const firstname = req.body.firstname;
    const age = req.body.age;
  
    //vérifier si tous les champs sont fournis
    if(!name || !firstname || !age) {
        return resp.status(400).json({message: "Les champs name,firstname,age sont requis"});
    }

    //Générer un nouvel id
    const newUser = {
        id: users.length + 1,
        name,
        firstname,
        age
    };
    
    //ajout du nouveau utilisateur dans le tableau users
    users.push(newUser);

    //retourner le tableau en forme json
    resp.json(newUser)
});



app.get('/users/:id',(req,resp) => {
 
    //récupération et convertion de l'id en int dans l'url
    const idQuery = parseInt(req.params.id);
    const user = users.find(user => user.id === idQuery);
    
    if(!user) {
        return resp.status(400).json({message: "Utilisateur non trouvé"})
    }

    resp.json(user)
 
});

app.get('/search',(req,resp) => {
 
    //récupération et convertion de l'id en int dans l'url
    const chaineQuery = req.query;
    const nameQuery = chaineQuery.name;
    const ageQuery = chaineQuery.age;



    if(!nameQuery || !ageQuery) {
        return resp.status(400).json({message: "Veuillez renseigner le name et l'âge"});
    }
    const ageNumber = parseInt(ageQuery); // Convertir l'âge en nombre
    const results = users.find(user => user.name === nameQuery && user.age === ageNumber);
   
    if (!results) {
        return resp.status(404).json({ message: "Aucun utilisateur trouvé" });
    }
   
    resp.json(results);
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params; // Récupérer l'ID dans les paramètres de la requête
    const userId = parseInt(id); // Convertir l'ID en nombre entier

    const index = users.findIndex(user => user.id === userId); // Chercher l'utilisateur avec l'ID donné

    //console.log(index)
    if (index === -1) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const resultats = users.splice(index, 1); // Supprimer l'utilisateur trouvé du tableau

    res.json(resultats); // Retourner le tableau mis à jour
});


app.listen(port,() => {
    console.log(`le serveur tourne sur le port ${port} `);
})
