import {createServer} from 'http';
import url from 'url';
import fs from 'fs';
import { json } from 'stream/consumers';

const port = 8100;

//création du serveur http
const serverHttp = createServer(function(req,res){
  
    const monUrl = req.url;
    const parseUrl = url.parse(monUrl)
    const myPathname = parseUrl.pathname;
  
    if(myPathname =='/') {
        res.writeHead(200,{'Content-Type': 'text/html; charset-utf-8'});
        fs.readFile('index.html',function(err,data){
            if(err) {
                console.log(`Erreur lors de la lecture du fichier : ${err}`);
            }
            else{
                res.end(data);
            }
        })
    }else if(myPathname =='/about') {
        fs.readFile('./pages/about.html',function(err,data){
            if(err) {
                console.log(`Erreur lors de la lecture du fichier : ${err}`);
            }
            else{
                res.write(data);
                res.end();
            }
        })
    }
    else if(myPathname =='/service') {
        fs.readFile('./pages/service.html',function(err,data){
            if(err) {
                console.log(`Erreur lors de la lecture du fichier : ${err}`);
            }
            else{
                res.write(data);
                res.end();
            }

            
        })
    }
    else if(myPathname =='/contact') {
        fs.readFile('./pages/contact.html',function(err,data){
            if(err) {
                console.log(`Erreur lors de la lecture du fichier : ${err}`);
            }
            else{
                res.write(data);
                res.end();
            }
           })
    }
    else if(myPathname =='/projet') {
        res.writeHead(200,{'Content-Type': 'text/html; charset-utf-8'});
        // Récupérer le query à partir de l'url
        const myquery = parseUrl.query;
        // URLSearchParams permet de manipuler facilement les paramètres d'une URL
        //transformer notre query qui est une chaîne en un objet URLSearchParam
        const params = new URLSearchParams(myquery);
        //créer un objet avec une clé titre et récupérer la valeur 
        const parsedQuery = { titre: params.get("titre") };
   
        const projects = [
            {
                titre: "projet1",
                status: "terminer"
            },
            {
                titre: "projet2",
                status: "terminer"
            },
            {
                titre: "projet3",
                status: "en cours"
            },
        ]
        if(myquery){
            
            const projects_query = projects.filter(p => p.titre === parsedQuery.titre)
            res.end(JSON.stringify(projects_query));
        }
        else{
            res.end(JSON.stringify(projects));
        }
      
    }
    
    else {
        res.end("Erreur 404");
    }
   
});

//on écoute le serveur sur un port donné

serverHttp.listen(port,() =>{
    console.log(`le serveur tourne sur le port ${port} `);
});