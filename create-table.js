import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS questoes;`.then(() => {
//   console.log('Tabela apagada!')
// })

// sql `
//   CREATE TABLE videos (
//     id           TEXT PRIMARY KEY,
//     title        TEXT,
//     description  TEXT,
//     duration     INTEGER
//   );
// `.then(() => {
//     console.log('Tabela criada!')
// })

// sql `
//   CREATE TABLE questoes (
//     id           serial PRIMARY KEY,
//     questao      JSONB,
//     banca        TEXT,
//     orgao        TEXT,
//     prova        TEXT,
//     ano          SMALLINT,
//     tipo         CHAR
//   );
// `.then(() => {
//     console.log('Tabela criada!')
// })

// INSERT INTO questoes (questao, banca, orgao, prova, ano) VALUES (
//     {    
//         "imagensUrl": ["http://urldaimagem1.jpeg", "http://urldaimagem1.jpeg"],
//         "textos": ["primeiro texto", "segundo texto"],
//         "enunciado": "enunciado da questão aqui",
//         "alternativas": [
//             "texto da alternativa A",
//             "texto da alternativa B",
//             "texto da alternativa C",
//             "texto da alternativa D",
//             "texto da alternativa E"]
//     },
//     "Banca_Arthur",
//     "Orgao_Arthur",
//     "Prova_Arthur",
//     2024
// )




// sql`INSERT INTO questoes (questao, banca, orgao, prova, ano, tipo)
// VALUES 
// ('{
//     "primeiroEnunciado": "Qual é a capital do Brasil?",
//     "imagens": [""],
//     "segundoEnunciado": "",
//     "alternativas": [
//         "Belo Horizonte",
//         "Salvador",
//         "Rio de Janeiro",
//         "Brasília",
//         "São Paulo"
//     ],
//     "indexAlternativaCorreta": "3"
// }', 'Banca_FGV', 'Orgao_MEC', 'Prova_Enem', 2021, 'M'),
// ('{
//     "primeiroEnunciado": "Qual é a montanha mais alta do Brasil?",
//     "imagens": [""],
//     "segundoEnunciado": "",
//     "alternativas": [
//         "Pico da Neblina",
//         "Pico Paraná",
//         "Pico da Bandeira",
//         "Pico do Jaraguá",
//         "Morro da Igreja"
//     ],
//     "indexAlternativaCorreta": "0"
// }', 'Banca_FGV', 'Orgao_MEC', 'Prova_Enem', 2021, 'M'),
// ('{
//     "primeiroEnunciado": "Qual é o menor estado do Brasil em extensão territorial?",
//     "imagens": [""],
//     "segundoEnunciado": "",
//     "alternativas": [
//         "Sergipe",
//         "Alagoas",
//         "Rio de Janeiro",
//         "Espírito Santo",
//         "Distrito Federal"
//     ],
//     "indexAlternativaCorreta": "0"
// }', 'Banca_FGV', 'Orgao_MEC', 'Prova_Enem', 2021, 'M'),
// ('{
//     "primeiroEnunciado": "Qual o rio mais extenso do Brasil?",
//     "imagens": [""],
//     "segundoEnunciado": "",
//     "alternativas": [
//         "Rio São Francisco",
//         "Rio Amazonas",
//         "Rio Paraná",
//         "Rio Madeira",
//         "Rio Tocantins"
//     ],
//     "indexAlternativaCorreta": "1"
// }', 'Banca_FGV', 'Orgao_MEC', 'Prova_Enem', 2021, 'M'),
// ('{
//     "primeiroEnunciado": "Qual é o bioma predominante na Região Norte do Brasil?",
//     "imagens": [""],
//     "segundoEnunciado": "",
//     "alternativas": [
//         "Cerrado",
//         "Mata Atlântica",
//         "Pantanal",
//         "Caatinga",
//         "Amazônia"
//     ],
//     "indexAlternativaCorreta": "4"
// }', 'Banca_FGV', 'Orgao_MEC', 'Prova_Enem', 2021, 'M'),
// ('{
//     "primeiroEnunciado": "Qual cidade é conhecida como a Veneza Brasileira?",
//     "imagens": [""],
//     "segundoEnunciado": "",
//     "alternativas": [
//         "Recife",
//         "Belém",
//         "Manaus",
//         "Rio de Janeiro",
//         "São Luís"
//     ],
//     "indexAlternativaCorreta": "0"
// }', 'Banca_FGV', 'Orgao_MEC', 'Prova_Enem', 2021, 'M'),
// ('{
//     "primeiroEnunciado": "Qual é a maior região do Brasil em termos de área?",
//     "imagens": [""],
//     "segundoEnunciado": "",
//     "alternativas": [
//         "Norte",
//         "Nordeste",
//         "Centro-Oeste",
//         "Sudeste",
//         "Sul"
//     ],
//     "indexAlternativaCorreta": "0"
// }', 'Banca_FGV', 'Orgao_MEC', 'Prova_Enem', 2021, 'M'),
// ('{
//     "primeiroEnunciado": "Em que ano o Brasil foi descoberto pelos portugueses?",
//     "imagens": [""],
//     "segundoEnunciado": "",
//     "alternativas": [
//         "1500",
//         "1492",
//         "1530",
//         "1600",
//         "1580"
//     ],
//     "indexAlternativaCorreta": "0"
// }', 'Banca_FGV', 'Orgao_MEC', 'Prova_Enem', 2021, 'M'),
// ('{
//     "primeiroEnunciado": "Qual é o estado brasileiro com a maior população?",
//     "imagens": [""],
//     "segundoEnunciado": "",
//     "alternativas": [
//         "Minas Gerais",
//         "Bahia",
//         "São Paulo",
//         "Rio de Janeiro",
//         "Pernambuco"
//     ],
//     "indexAlternativaCorreta": "2"
// }', 'Banca_FGV', 'Orgao_MEC', 'Prova_Enem', 2021, 'M'),
// ('{
//     "primeiroEnunciado": "Qual é a unidade monetária do Brasil?",
//     "imagens": [""],
//     "segundoEnunciado": "",
//     "alternativas": [
//         "Peso",
//         "Dólar",
//         "Real",
//         "Euro",
//         "Cruzado"
//     ],
//     "indexAlternativaCorreta": "2"
// }', 'Banca_FGV', 'Orgao_MEC', 'Prova_Enem', 2021, 'M'),
// ('{
//     "primeiroEnunciado": "Brasil é o maior país do mundo?",
//     "imagens": [""],
//     "segundoEnunciado": "",
//     "alternativas": [
//         "Certo",
//         "Errado"
//     ],
//     "indexAlternativaCorreta": "1"
// }', 'Banca_FGV', 'Orgao_MEC', 'Prova_Enem', 2021, 'M')
// `.then(() => {
//     console.log('dados inseridos com sucesso!')
// })



sql`INSERT INTO questoes (questao, banca, orgao, prova, ano, tipo)
VALUES 
('{
    "primeiroEnunciado": "Paraíba é o estado mais populoso do Brasil?",
    "imagens": [""],
    "segundoEnunciado": "",
    "alternativas": [
        "Certo",
        "Errado"
    ],
    "indexAlternativaCorreta": "1"
}', 'Banca_FGV', 'Orgao_MEC', 'Prova_Enem', 2021, 'C')`.then(() => {
    console.log('dados inseridos com sucesso!')
})

