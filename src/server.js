// Servidor
const express = require("express");
const server = express();//Chamando o express como função, para rodar um servidor

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')//Importando módulo 

//Configurando Nunjucks (template engine)
const nunjucks = require("nunjucks") //Importando
nunjucks.configure("src/views", { //Informando onde está as coisas
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({extended: true}))
.use(express.static("public"))//Configuração do servidor // Tornando estatico aquilo que necessariamente precisa estar no front(css, scripts, images)
.get("/", pageLanding)//Função seta //Função curta // Estou dizendo ao express que quando entrar na barra ela deve me enviar uma função // O get faz a rota das coisas que eu quero pegar //Estou direcionando a rota para o HTML
.get("/study", pageStudy)//Add rota 
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses) // rota para esconder a url

// Start do servidor
.listen(5500)
