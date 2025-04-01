import {createServer} from 'http';
import { hostname } from 'os';
import url from 'url';
const port = 8100;

const monUrl = 'https://vippinterstis-my.sharepoint.com:9000/:p:/r/personal/mbankole_vippinterstis_com/_layouts/15/Doc.aspx?sourcedoc=%7BBC0080C8-9016-4F44-99A6-9EE5F83CF5C3%7D&file=CoursNodeJs.pptx&action=edit&mobileredirect=true'

const parseUrl = new URL(monUrl)
//console.log(parseUrl);
//composer une url
const monObjUrl = {
    protocol: 'htpps',
    hostname: "aubaines_express.com",
    port: 8180
}

const formatUrl = url.format(monObjUrl);
console.log(formatUrl)
//création du serveur http
const serverHttp = createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html; charset-utf-8'});
    res.write("un nouveau jourss");
    res.end('hello word ✅');

});

//on écoute le serveur sur un port donné

serverHttp.listen(port,() =>{
    console.log(`le serveur tourne sur le port ${port} `);
});