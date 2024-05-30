import { fastify } from 'fastify'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

const database = new DatabasePostgres()

var cors = require('cors')

server.use(cors())

server.get('/questoes', async (request) => {
    
    const search = request.query.search

    const questoes = await database.list(search)

    return questoes
})

// server.post('/questoes', async (request, reply) => {

//     const { title, description, duration } = request.body

//     await database.create({
//         title: title,
//         description: description,
//         duration: duration
//     })

//     console.log(database.list())

//     return reply.status(201).send()
// })

// server.put('/questoes/:id', async (request, reply) => {

//     const videoId = request.params.id

//     const { title, description, duration } = request.body

//     const video = await database.update(videoId, {
//         title,
//         description,
//         duration
//     })

//     return reply.status(204).send()
// })

// server.delete('/questoes/:id', async (request, reply) => {
//     const videoId = request.params.id

//     await database.delete(videoId)

//     return reply.status(204).send()
// })

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
})