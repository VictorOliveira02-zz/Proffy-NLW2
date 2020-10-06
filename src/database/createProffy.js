// Toda a lógica de inserir dados no bd

// Async é primordial para o uso do await
module.exports = async function(db, { proffyValue, classValue, classScheduleValues }) {
    //Inserir dados na tabela de proffys
    // await aguarda antes de ir para proxima linha
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
           "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
           "${proffyValue.bio}"
        );
    `)
    const proffy_id = insertedProffy.lastID // Retorna o ID

    // Inserir dados na tabela classes
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)
    const class_id = insertedClass.lastID

    // Inserir dados na tabela class_schedule
    // map mapeia o array, elemento por elemento
    const insertedAllClassesScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    // execução dos dbs.runs() da class_schedule
    await Promise.all(insertedAllClassesScheduleValues) // Executa um array de muitas promessas (as coisas q tao no insertedAllClassesScheduleValues )
}