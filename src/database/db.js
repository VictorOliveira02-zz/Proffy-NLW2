const Database = require('sqlite-async'); // Importando o banco de dados

function execute(db) {
    //Executa as instruções toda vez q eu chamar o arquivo db
    // Criando as tabelas do banco de dados
    // Fazendo relacionamento de tabelas pelos ids
    return db.exec(` 
        CREATE TABLE IF NOT EXISTS proffys (
            id  INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id  INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id  INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute) // then neste caso serviu para dar uma segura e ENTÃO executar a função //Abrindo o banco de dados