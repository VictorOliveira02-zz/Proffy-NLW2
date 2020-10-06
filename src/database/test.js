const Database = require('./db')
const createProffy = require('./createProffy.js')//Exportando uma função
Database.then(async (db) => {
    // Inserir dados em cada tabela
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"114002-8922",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }
    classValue = { // Class_id virá pelo bd apos cadastrar na aula
        subject: 1,
        cost: "20"
        // proffy_id vem do banco de dados
    }
    classScheduleValues = [
    {
        weekday: 1,
        time_from: 720,
        time_to: 1220
    },
    {
        weekday: 0,
        time_from: 520,
        time_to: 1220
    }
]
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar dados inseridos

    // pegando todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    // Consultar as classes de um determinado professor e trazer os dados dele // Usando duas tabelas
    const selectClassesAndProffs = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // Relacionar as validações de horario do time_from e time_to
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `) 
})  