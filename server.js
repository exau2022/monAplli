import 'dotenv/config'
import express from 'express';
import userRoute from './routes/userRoute.js';  //Importation du router exporté

const app = express();
const port = process.env.PORT || 3000;

/*middleware  permet à Express de lire et de traiter les données envoyées en Json 
dans le body d'une requête POST
*/
app.use(express.json());
app.use(userRoute);


app.get('/',(req,resp) => {
    resp.send("Hello");
});


app.listen(port,() => {
    console.log(`le serveur tourne sur le port ${port} `);
})
