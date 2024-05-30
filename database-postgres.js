import { sql } from './db.js'

export class DatabasePostgres {

    async list(page){
        let questoes

        if (page){
            // questoes = await sql`select * from questoes where title ilike ${'%' +search+ '%'}`
            questoes = sql`select * from questoes limit 10 offset ${page*10}`
        } else {
            questoes = await sql`select * from questoes limit 10 offset 0`
        }

        return questoes
    }

    // async create(questao) {
    //     const { title, description, duration} = questao

    //     await sql`insert into questoes (title, description, duration) VALUES (${questaoId}, ${title}, ${description}, ${duration})`
    // }

    // async update(id, questao) {
    //     const { title, description, duration} = questao

    //     await sql`update questoes set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`
    // }

    // async delete(id) {
    //     await sql`delete from questoes where id = ${id}`
    // }
}