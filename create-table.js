import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
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
//     ano          SMALLINT
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

// sql`
// INSERT INTO questoes (questao, banca, orgao, prova, ano) VALUES
// (
//     '{
//         "imagensUrl": ["http://urlimagem1_1.jpeg", "http://urlimagem1_2.jpeg"],
//         "textos": ["primeiro texto exemplo 1", "segundo texto exemplo 1"],
//         "enunciado": "Enunciado da questão 1",
//         "alternativas": [
//             "Texto da alternativa A1",
//             "Texto da alternativa B1",
//             "Texto da alternativa C1",
//             "Texto da alternativa D1",
//             "Texto da alternativa E1"
//         ]
//     }',
//     'Banca_FGV', 'Orgao_MEC', 'Prova_Enem', 2021
// ),
// (
//     '{
//         "imagensUrl": ["http://urlimagem2_1.jpeg", "http://urlimagem2_2.jpeg"],
//         "textos": ["primeiro texto exemplo 2", "segundo texto exemplo 2"],
//         "enunciado": "Enunciado da questão 2",
//         "alternativas": [
//             "Texto da alternativa A2",
//             "Texto da alternativa B2",
//             "Texto da alternativa C2",
//             "Texto da alternativa D2",
//             "Texto da alternativa E2"
//         ]
//     }',
//     'Banca_CESPE', 'Orgao_Anatel', 'Prova_Anatel', 2022
// ),
// (
//     '{
//         "imagensUrl": ["http://urlimagem3_1.jpeg", "http://urlimagem3_2.jpeg"],
//         "textos": ["primeiro texto exemplo 3", "segundo texto exemplo 3"],
//         "enunciado": "Enunciado da questão 3",
//         "alternativas": [
//             "Texto da alternativa A3",
//             "Texto da alternativa B3",
//             "Texto da alternativa C3",
//             "Texto da alternativa D3",
//             "Texto da alternativa E3"
//         ]
//     }',
//     'Banca_ESAF', 'Orgao_MF', 'Prova_Auditor_Fiscal', 2023
// ),
// (
//     '{
//         "imagensUrl": ["http://urlimagem4_1.jpeg", "http://urlimagem4_2.jpeg"],
//         "textos": ["primeiro texto exemplo 4", "segundo texto exemplo 4"],
//         "enunciado": "Enunciado da questão 4",
//         "alternativas": [
//             "Texto da alternativa A4",
//             "Texto da alternativa B4",
//             "Texto da alternativa C4",
//             "Texto da alternativa D4",
//             "Texto da alternativa E4"
//         ]
//     }',
//     'Banca_VUNESP', 'Orgao_Policia_Civil', 'Prova_Investigador', 2024
// ),
// (
//     '{
//         "imagensUrl": ["http://urlimagem5_1.jpeg", "http://urlimagem5_2.jpeg"],
//         "textos": ["primeiro texto exemplo 5", "segundo texto exemplo 5"],
//         "enunciado": "Enunciado da questão 5",
//         "alternativas": [
//             "Texto da alternativa A5",
//             "Texto da alternativa B5",
//             "Texto da alternativa C5",
//             "Texto da alternativa D5",
//             "Texto da alternativa E5"
//         ]
//     }',
//     'Banca_UNESP', 'Orgao_SEDUC', 'Prova_Professor', 2025
// ),
// (
//     '{
//         "imagensUrl": ["http://urlimagem6_1.jpeg", "http://urlimagem6_2.jpeg"],
//         "textos": ["primeiro texto exemplo 6", "segundo texto exemplo 6"],
//         "enunciado": "Enunciado da questão 6",
//         "alternativas": [
//             "Texto da alternativa A6",
//             "Texto da alternativa B6",
//             "Texto da alternativa C6",
//             "Texto da alternativa D6",
//             "Texto da alternativa E6"
//         ]
//     }',
//     'Banca_CESGRANRIO', 'Orgao_Petrobras', 'Prova_Engenheiro', 2020
// ),
// (
//     '{
//         "imagensUrl": ["http://urlimagem7_1.jpeg", "http://urlimagem7_2.jpeg"],
//         "textos": ["primeiro texto exemplo 7", "segundo texto exemplo 7"],
//         "enunciado": "Enunciado da questão 7",
//         "alternativas": [
//             "Texto da alternativa A7",
//             "Texto da alternativa B7",
//             "Texto da alternativa C7",
//             "Texto da alternativa D7",
//             "Texto da alternativa E7"
//         ]
//     }',
//     'Banca_FCC', 'Orgao_TJ', 'Prova_Tecnico_Judiciario', 2019
// ),
// (
//     '{
//         "imagensUrl": ["http://urlimagem8_1.jpeg", "http://urlimagem8_2.jpeg"],
//         "textos": ["primeiro texto exemplo 8", "segundo texto exemplo 8"],
//         "enunciado": "Enunciado da questão 8",
//         "alternativas": [
//             "Texto da alternativa A8",
//             "Texto da alternativa B8",
//             "Texto da alternativa C8",
//             "Texto da alternativa D8",
//             "Texto da alternativa E8"
//         ]
//     }',
//     'Banca_CESPE', 'Orgao_INSS', 'Prova_Analista', 2018
// ),
// (
//     '{
//         "imagensUrl": ["http://urlimagem9_1.jpeg", "http://urlimagem9_2.jpeg"],
//         "textos": ["primeiro texto exemplo 9", "segundo texto exemplo 9"],
//         "enunciado": "Enunciado da questão 9",
//         "alternativas": [
//             "Texto da alternativa A9",
//             "Texto da alternativa B9",
//             "Texto da alternativa C9",
//             "Texto da alternativa D9",
//             "Texto da alternativa E9"
//         ]
//     }',
//     'Banca_FGV', 'Orgao_BB', 'Prova_Escriturario', 2021
// ),
// (
//     '{
//         "imagensUrl": ["http://urlimagem10_1.jpeg", "http://urlimagem10_2.jpeg"],
//         "textos": ["primeiro texto exemplo 10", "segundo texto exemplo 10"],
//         "enunciado": "Enunciado da questão 10",
//         "alternativas": [
//             "Texto da alternativa A10",
//             "Texto da alternativa B10",
//             "Texto da alternativa C10",
//             "Texto da alternativa D10",
//             "Texto da alternativa E10"
//         ]
//     }',
//     'Banca_Consulplan', 'Orgao_TCU', 'Prova_Auditor', 2022
// );

// `.then(() => {
//     console.log('dados inseridos com sucesso!')
// })