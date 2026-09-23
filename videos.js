// Данные курса: 28 уникальных видео, 98 уроков.
// driveId — ID файла на Google Drive (из ссылки «Кому доступен» / rclone lsjson).
// yandexUrl — публичная ссылка на отдельное видео в Яндекс Диске.
const COURSE = {
 "course": {
  "title": "Восстановление после родов",
  "lead": "Возвращаем себе — себя ❤️",
  "driveFolderUrl": "https://drive.google.com/drive/folders/1Sz7IAVxn9Rlnayjzmwx--HPnvAWXN9De"
 },
 "videos": {
  "qAZkKRohfVkQpKDbKY4EiN": {
   "title": "Дыхание для плоского живота",
   "count": 7,
   "driveId": "17vHpxPVyhiJsfhfhhWw2_u7Jk9Nq5caH",
   "yandexUrl": ""
  },
  "rbQBLVrF9GZ7Wc6F9xGWqE": {
   "title": "Дыхание лежа на животе",
   "count": 7,
   "driveId": "1kEHYVdPWBjIkcvphMhHDhC4yQy73Km0w",
   "yandexUrl": ""
  },
  "ksrYcqxgggfhooEeLMegUm": {
   "title": "Дыхание на закрытие ребер (сидя)",
   "count": 7,
   "driveId": "1_6AreF13jn_Z6SV6CZlrSgFJ44BFHU_r",
   "yandexUrl": ""
  },
  "dUnLRofWrwtdTEqnUnxfF9": {
   "title": "Неделька",
   "count": 7,
   "driveId": "1B0-lfjxTMc8mTs_LX2cVWFaQ0fx8vc4J",
   "yandexUrl": ""
  },
  "9zdtScwM9gDJqGFRmwpGG4": {
   "title": "Неделька (расслабление тазового дна)",
   "count": 7,
   "driveId": "1lyzhcrS3OyyHI6KqPLrM4beVAhNScbNp",
   "yandexUrl": ""
  },
  "9zCPk1Qc6KE262zuaHQ5Dr": {
   "title": "Дыхание на закрытие ребер (на спине)",
   "count": 4,
   "driveId": "146X2P_C-MVAJMATeBEhDSgmgZqiT6pVc",
   "yandexUrl": ""
  },
  "vRoUx86WB8XY1jmRf3Eahs": {
   "title": "Живот и тазовое дно",
   "count": 4,
   "driveId": "1aKOq2OiZsR5U_MoeRv2uJJeAfnPKRC7w",
   "yandexUrl": ""
  },
  "kxdEizZDQXYyLJWvWEKi2Q": {
   "title": "Живот и тазовое дно",
   "count": 4,
   "driveId": "1c-wBkFY9PHN2k2qvlPg69k1-FHCC6k0N",
   "yandexUrl": ""
  },
  "9UMjsSxHtchybASxvPFpuj": {
   "title": "Осанка",
   "count": 4,
   "driveId": "1yqVnullBBO2mjr9WNKaL2U9zoZ81PGD7",
   "yandexUrl": ""
  },
  "bKJ2M6vpdqMV2yTfVNJ431": {
   "title": "Осанка (раскрытие грудного отдела)",
   "count": 4,
   "driveId": "1VZLgUpK5BR3-fcciB8TiX_53dC3sfVvG",
   "yandexUrl": ""
  },
  "gSHrVfsfUXk2JgMP1wZdQQ": {
   "title": "Плоский живот",
   "count": 4,
   "driveId": "158vdpiFroX1FEmmzMW93H3GeUCs14PnG",
   "yandexUrl": ""
  },
  "4WkjsXfk69nYdEFWQaTqaW": {
   "title": "Расслабление мышц тазового дна (3 упражнения)",
   "count": 4,
   "driveId": "1O40JrTlr0B6wqvpr42MbLlZvgs-QajyH",
   "yandexUrl": ""
  },
  "0sGbD7fA4Beu5EciGMYh4T": {
   "title": "Расслабление таза и поясницы",
   "count": 4,
   "driveId": "19h7m53PE2M8yjeBDRlNBbqi4ZuRCQM84",
   "yandexUrl": ""
  },
  "wu1r51g6HTagMwSFvHbBfi": {
   "title": "Дыхание на закрытие ребер (на боку)",
   "count": 3,
   "driveId": "1TWoCYMcnrHlxT25bulg-uYnhtd3W5EQo",
   "yandexUrl": ""
  },
  "7Yt2ntXiQfHvKgv9m7dBnK": {
   "title": "Осанка",
   "count": 3,
   "driveId": "1F84-BQIC1JL8TTPnSTnfn2kQH-Uz7_9I",
   "yandexUrl": ""
  },
  "eGwJ1W2Z5Hi3txWisQiuRn": {
   "title": "Тазовое дно",
   "count": 3,
   "driveId": "1Jtd162oX4WchyR4BS3ZNUel4lq9oe9AD",
   "yandexUrl": ""
  },
  "uAzUSyDeExgbWL9KQbi2Q9": {
   "title": "Учимся контролировать «домик» при диастазе",
   "count": 3,
   "driveId": "1dYTi342RYJayxXcxE26AjevCsTe0GZ_k",
   "yandexUrl": ""
  },
  "tU6Kjn6i2C6EyhpxrnFMj2": {
   "title": "Ягодицы",
   "count": 3,
   "driveId": "1j5evagMmrgeyOdO_5BEKSu9mxaNLbCVX",
   "yandexUrl": ""
  },
  "w4cMfLy5Kz5JsQ2UWApkmt": {
   "title": "ягодицы",
   "count": 3,
   "driveId": "1CC39bq4y6tQpnXtAAMPlR_-WYXSM7F10",
   "yandexUrl": ""
  },
  "kVms7we7kNXnWjWZi9TLCH": {
   "title": "Осанка без оборудования",
   "count": 2,
   "driveId": "19AYXvWv5nvGTqmqvq3qTNTWiVSh_C4Mf",
   "yandexUrl": ""
  },
  "t5Nq2omYtvdqEsjRDN56Er": {
   "title": "Осанка с МФР",
   "count": 2,
   "driveId": "1gd7WuOJ71W7YW1labYlpI2R_siv6iUBI",
   "yandexUrl": ""
  },
  "w5XQYte29MN2cce6Fb6JKv": {
   "title": "Расслабление таза и передней поверхности бедра",
   "count": 2,
   "driveId": "1ZVfkCqgEs5e9Nb9bv6FnbtpP9SDgSjAp",
   "yandexUrl": ""
  },
  "rn4tzbERp8KnYD4Zr52bxA": {
   "title": "Расслабление тазового дна и бедер",
   "count": 2,
   "driveId": "1lcZ1Sr9lzlf8nW8frBdOICkcBXLlh5yI",
   "yandexUrl": ""
  },
  "j8pTfkDLErm5EhwqoECTcQ": {
   "vert": true,
   "title": "Заключение",
   "count": 1,
   "driveId": "1x-DdK-vwEnjNnJKUIh17GQ4HYYu7emUw",
   "yandexUrl": ""
  },
  "5FD8qtbahZRjw5QVC2m1Hu": {
   "vert": true,
   "title": "Приветствие",
   "count": 1,
   "driveId": "1DeL7LkJT_vkdU9q-P3Vh610prcgqtchG",
   "yandexUrl": ""
  },
  "czjuCaEuF4WgQq1g8Pb4jG": {
   "vert": true,
   "title": "Стартовая точка",
   "count": 1,
   "driveId": "16yojrLMYzYBcQy3vpBXTjuTgB6tn71Yj",
   "yandexUrl": ""
  },
  "erNr1DNQnYyavjgA9KBZfY": {
   "title": "Тест на диастаз",
   "count": 1,
   "driveId": "1VuaWGzfd56zzG148lYkkhWD2xJfRd4wL",
   "yandexUrl": ""
  },
  "g6Z9aZ8c8Hb1xVB7j2GRXg": {
   "vert": true,
   "title": "Тест на слабость тазовых мышц",
   "count": 1,
   "driveId": "1uABuIDTYjL039QgNeSQEyQ5d01cnSynL",
   "yandexUrl": ""
  }
 },
 "lessons": [
  {
   "week": 0,
   "day": null,
   "lesson": 1,
   "title": "Приветствие",
   "embed": "5FD8qtbahZRjw5QVC2m1Hu",
   "video_title": "Приветствие"
  },
  {
   "week": 0,
   "day": null,
   "lesson": 2,
   "title": "Стартовая точка",
   "embed": "czjuCaEuF4WgQq1g8Pb4jG",
   "video_title": "Стартовая точка"
  },
  {
   "week": 0,
   "day": null,
   "lesson": 3,
   "title": "Тест на диастаз",
   "embed": "erNr1DNQnYyavjgA9KBZfY",
   "video_title": "Тест на диастаз"
  },
  {
   "week": 0,
   "day": null,
   "lesson": 4,
   "title": "Тест на слабость тазовых мышц",
   "embed": "g6Z9aZ8c8Hb1xVB7j2GRXg",
   "video_title": "Тест на слабость тазовых мышц"
  },
  {
   "week": 1,
   "day": 1,
   "lesson": 5,
   "title": "Дыхание на закрытие ребер (на спине)",
   "embed": "9zCPk1Qc6KE262zuaHQ5Dr",
   "video_title": "Дыхание на закрытие ребер (на спине)"
  },
  {
   "week": 1,
   "day": 1,
   "lesson": 6,
   "title": "Неделька (расслабление тазового дна)",
   "embed": "9zdtScwM9gDJqGFRmwpGG4",
   "video_title": "Неделька (расслабление тазового дна)"
  },
  {
   "week": 1,
   "day": 1,
   "lesson": 7,
   "title": "Осанка (раскрытие грудного отдела)",
   "embed": "bKJ2M6vpdqMV2yTfVNJ431",
   "video_title": "Осанка (раскрытие грудного отдела)"
  },
  {
   "week": 1,
   "day": 2,
   "lesson": 8,
   "title": "Дыхание на закрытие ребер (на спине)",
   "embed": "9zCPk1Qc6KE262zuaHQ5Dr",
   "video_title": "Дыхание на закрытие ребер (на спине)"
  },
  {
   "week": 1,
   "day": 2,
   "lesson": 9,
   "title": "Неделька (расслабление тазового дна)",
   "embed": "9zdtScwM9gDJqGFRmwpGG4",
   "video_title": "Неделька (расслабление тазового дна)"
  },
  {
   "week": 1,
   "day": 2,
   "lesson": 10,
   "title": "Расслабление мышц тазового дна (3 упражнения)",
   "embed": "4WkjsXfk69nYdEFWQaTqaW",
   "video_title": "Расслабление мышц тазового дна (3 упражнения)"
  },
  {
   "week": 1,
   "day": 3,
   "lesson": 11,
   "title": "Дыхание на закрытие ребер (на боку)",
   "embed": "wu1r51g6HTagMwSFvHbBfi",
   "video_title": "Дыхание на закрытие ребер (на боку)"
  },
  {
   "week": 1,
   "day": 3,
   "lesson": 12,
   "title": "Неделька (расслабление тазового дна)",
   "embed": "9zdtScwM9gDJqGFRmwpGG4",
   "video_title": "Неделька (расслабление тазового дна)"
  },
  {
   "week": 1,
   "day": 3,
   "lesson": 13,
   "title": "Осанка (раскрытие грудного отдела)",
   "embed": "bKJ2M6vpdqMV2yTfVNJ431",
   "video_title": "Осанка (раскрытие грудного отдела)"
  },
  {
   "week": 1,
   "day": 3,
   "lesson": 14,
   "title": "Расслабление таза и поясницы",
   "embed": "0sGbD7fA4Beu5EciGMYh4T",
   "video_title": "Расслабление таза и поясницы"
  },
  {
   "week": 1,
   "day": 4,
   "lesson": 15,
   "title": "Дыхание на закрытие ребер (на боку)",
   "embed": "wu1r51g6HTagMwSFvHbBfi",
   "video_title": "Дыхание на закрытие ребер (на боку)"
  },
  {
   "week": 1,
   "day": 4,
   "lesson": 16,
   "title": "Неделька (расслабление тазового дна)",
   "embed": "9zdtScwM9gDJqGFRmwpGG4",
   "video_title": "Неделька (расслабление тазового дна)"
  },
  {
   "week": 1,
   "day": 4,
   "lesson": 17,
   "title": "Осанка (раскрытие грудного отдела)",
   "embed": "bKJ2M6vpdqMV2yTfVNJ431",
   "video_title": "Осанка (раскрытие грудного отдела)"
  },
  {
   "week": 1,
   "day": 5,
   "lesson": 18,
   "title": "Дыхание на закрытие ребер (на спине)",
   "embed": "9zCPk1Qc6KE262zuaHQ5Dr",
   "video_title": "Дыхание на закрытие ребер (на спине)"
  },
  {
   "week": 1,
   "day": 5,
   "lesson": 19,
   "title": "Неделька (расслабление тазового дна)",
   "embed": "9zdtScwM9gDJqGFRmwpGG4",
   "video_title": "Неделька (расслабление тазового дна)"
  },
  {
   "week": 1,
   "day": 5,
   "lesson": 20,
   "title": "Осанка (раскрытие грудного отдела)",
   "embed": "bKJ2M6vpdqMV2yTfVNJ431",
   "video_title": "Осанка (раскрытие грудного отдела)"
  },
  {
   "week": 1,
   "day": 5,
   "lesson": 21,
   "title": "Расслабление мышц тазового дна (3 упражнения)",
   "embed": "4WkjsXfk69nYdEFWQaTqaW",
   "video_title": "Расслабление мышц тазового дна (3 упражнения)"
  },
  {
   "week": 1,
   "day": 5,
   "lesson": 22,
   "title": "Расслабление таза и поясницы",
   "embed": "0sGbD7fA4Beu5EciGMYh4T",
   "video_title": "Расслабление таза и поясницы"
  },
  {
   "week": 1,
   "day": 6,
   "lesson": 23,
   "title": "Дыхание на закрытие ребер (на спине)",
   "embed": "9zCPk1Qc6KE262zuaHQ5Dr",
   "video_title": "Дыхание на закрытие ребер (на спине)"
  },
  {
   "week": 1,
   "day": 6,
   "lesson": 24,
   "title": "Неделька (расслабление тазового дна)",
   "embed": "9zdtScwM9gDJqGFRmwpGG4",
   "video_title": "Неделька (расслабление тазового дна)"
  },
  {
   "week": 1,
   "day": 6,
   "lesson": 25,
   "title": "Расслабление мышц тазового дна (3 упражнения)",
   "embed": "4WkjsXfk69nYdEFWQaTqaW",
   "video_title": "Расслабление мышц тазового дна (3 упражнения)"
  },
  {
   "week": 1,
   "day": 6,
   "lesson": 26,
   "title": "Расслабление таза и поясницы",
   "embed": "0sGbD7fA4Beu5EciGMYh4T",
   "video_title": "Расслабление таза и поясницы"
  },
  {
   "week": 1,
   "day": 7,
   "lesson": 27,
   "title": "Дыхание на закрытие ребер (на боку)",
   "embed": "wu1r51g6HTagMwSFvHbBfi",
   "video_title": "Дыхание на закрытие ребер (на боку)"
  },
  {
   "week": 1,
   "day": 7,
   "lesson": 28,
   "title": "Неделька (расслабление тазового дна)",
   "embed": "9zdtScwM9gDJqGFRmwpGG4",
   "video_title": "Неделька (расслабление тазового дна)"
  },
  {
   "week": 1,
   "day": 7,
   "lesson": 29,
   "title": "Расслабление мышц тазового дна (3 упражнения)",
   "embed": "4WkjsXfk69nYdEFWQaTqaW",
   "video_title": "Расслабление мышц тазового дна (3 упражнения)"
  },
  {
   "week": 1,
   "day": 7,
   "lesson": 30,
   "title": "Расслабление таза и поясницы",
   "embed": "0sGbD7fA4Beu5EciGMYh4T",
   "video_title": "Расслабление таза и поясницы"
  },
  {
   "week": 2,
   "day": 1,
   "lesson": 31,
   "title": "Дыхание на закрытие ребер (сидя)",
   "embed": "ksrYcqxgggfhooEeLMegUm",
   "video_title": "Дыхание на закрытие ребер (сидя)"
  },
  {
   "week": 2,
   "day": 1,
   "lesson": 32,
   "title": "Неделька",
   "embed": "dUnLRofWrwtdTEqnUnxfF9",
   "video_title": "Неделька"
  },
  {
   "week": 2,
   "day": 1,
   "lesson": 33,
   "title": "Осанка",
   "embed": "7Yt2ntXiQfHvKgv9m7dBnK",
   "video_title": "Осанка"
  },
  {
   "week": 2,
   "day": 2,
   "lesson": 34,
   "title": "Дыхание на закрытие ребер (сидя)",
   "embed": "ksrYcqxgggfhooEeLMegUm",
   "video_title": "Дыхание на закрытие ребер (сидя)"
  },
  {
   "week": 2,
   "day": 2,
   "lesson": 35,
   "title": "Неделька",
   "embed": "dUnLRofWrwtdTEqnUnxfF9",
   "video_title": "Неделька"
  },
  {
   "week": 2,
   "day": 2,
   "lesson": 36,
   "title": "Живот и тазовое дно",
   "embed": "vRoUx86WB8XY1jmRf3Eahs",
   "video_title": "Живот и тазовое дно"
  },
  {
   "week": 2,
   "day": 3,
   "lesson": 37,
   "title": "Дыхание на закрытие ребер (сидя)",
   "embed": "ksrYcqxgggfhooEeLMegUm",
   "video_title": "Дыхание на закрытие ребер (сидя)"
  },
  {
   "week": 2,
   "day": 3,
   "lesson": 38,
   "title": "Неделька",
   "embed": "dUnLRofWrwtdTEqnUnxfF9",
   "video_title": "Неделька"
  },
  {
   "week": 2,
   "day": 3,
   "lesson": 39,
   "title": "Живот и тазовое дно",
   "embed": "vRoUx86WB8XY1jmRf3Eahs",
   "video_title": "Живот и тазовое дно"
  },
  {
   "week": 2,
   "day": 3,
   "lesson": 40,
   "title": "Расслабление тазового дна и бедер",
   "embed": "rn4tzbERp8KnYD4Zr52bxA",
   "video_title": "Расслабление тазового дна и бедер"
  },
  {
   "week": 2,
   "day": 4,
   "lesson": 41,
   "title": "Дыхание на закрытие ребер (сидя)",
   "embed": "ksrYcqxgggfhooEeLMegUm",
   "video_title": "Дыхание на закрытие ребер (сидя)"
  },
  {
   "week": 2,
   "day": 4,
   "lesson": 42,
   "title": "Неделька",
   "embed": "dUnLRofWrwtdTEqnUnxfF9",
   "video_title": "Неделька"
  },
  {
   "week": 2,
   "day": 4,
   "lesson": 43,
   "title": "Живот и тазовое дно",
   "embed": "vRoUx86WB8XY1jmRf3Eahs",
   "video_title": "Живот и тазовое дно"
  },
  {
   "week": 2,
   "day": 4,
   "lesson": 44,
   "title": "Осанка",
   "embed": "7Yt2ntXiQfHvKgv9m7dBnK",
   "video_title": "Осанка"
  },
  {
   "week": 2,
   "day": 5,
   "lesson": 45,
   "title": "Дыхание на закрытие ребер (сидя)",
   "embed": "ksrYcqxgggfhooEeLMegUm",
   "video_title": "Дыхание на закрытие ребер (сидя)"
  },
  {
   "week": 2,
   "day": 5,
   "lesson": 46,
   "title": "Неделька",
   "embed": "dUnLRofWrwtdTEqnUnxfF9",
   "video_title": "Неделька"
  },
  {
   "week": 2,
   "day": 5,
   "lesson": 47,
   "title": "Расслабление таза и передней поверхности бедра",
   "embed": "w5XQYte29MN2cce6Fb6JKv",
   "video_title": "Расслабление таза и передней поверхности бедра"
  },
  {
   "week": 2,
   "day": 6,
   "lesson": 48,
   "title": "Дыхание на закрытие ребер (сидя)",
   "embed": "ksrYcqxgggfhooEeLMegUm",
   "video_title": "Дыхание на закрытие ребер (сидя)"
  },
  {
   "week": 2,
   "day": 6,
   "lesson": 49,
   "title": "Неделька",
   "embed": "dUnLRofWrwtdTEqnUnxfF9",
   "video_title": "Неделька"
  },
  {
   "week": 2,
   "day": 6,
   "lesson": 50,
   "title": "Живот и тазовое дно",
   "embed": "vRoUx86WB8XY1jmRf3Eahs",
   "video_title": "Живот и тазовое дно"
  },
  {
   "week": 2,
   "day": 6,
   "lesson": 51,
   "title": "Расслабление таза и передней поверхности бедра",
   "embed": "w5XQYte29MN2cce6Fb6JKv",
   "video_title": "Расслабление таза и передней поверхности бедра"
  },
  {
   "week": 2,
   "day": 7,
   "lesson": 52,
   "title": "Дыхание на закрытие ребер (сидя)",
   "embed": "ksrYcqxgggfhooEeLMegUm",
   "video_title": "Дыхание на закрытие ребер (сидя)"
  },
  {
   "week": 2,
   "day": 7,
   "lesson": 53,
   "title": "Неделька",
   "embed": "dUnLRofWrwtdTEqnUnxfF9",
   "video_title": "Неделька"
  },
  {
   "week": 2,
   "day": 7,
   "lesson": 54,
   "title": "Расслабление тазового дна и бедер",
   "embed": "rn4tzbERp8KnYD4Zr52bxA",
   "video_title": "Расслабление тазового дна и бедер"
  },
  {
   "week": 2,
   "day": 7,
   "lesson": 55,
   "title": "Осанка",
   "embed": "7Yt2ntXiQfHvKgv9m7dBnK",
   "video_title": "Осанка"
  },
  {
   "week": 3,
   "day": 1,
   "lesson": 56,
   "title": "Дыхание лежа на животе",
   "embed": "rbQBLVrF9GZ7Wc6F9xGWqE",
   "video_title": "Дыхание лежа на животе"
  },
  {
   "week": 3,
   "day": 1,
   "lesson": 57,
   "title": "Живот и тазовое дно",
   "embed": "kxdEizZDQXYyLJWvWEKi2Q",
   "video_title": "Живот и тазовое дно"
  },
  {
   "week": 3,
   "day": 1,
   "lesson": 58,
   "title": "Осанка с МФР",
   "embed": "t5Nq2omYtvdqEsjRDN56Er",
   "video_title": "Осанка с МФР"
  },
  {
   "week": 3,
   "day": 2,
   "lesson": 59,
   "title": "Дыхание лежа на животе",
   "embed": "rbQBLVrF9GZ7Wc6F9xGWqE",
   "video_title": "Дыхание лежа на животе"
  },
  {
   "week": 3,
   "day": 2,
   "lesson": 60,
   "title": "Ягодицы",
   "embed": "tU6Kjn6i2C6EyhpxrnFMj2",
   "video_title": "Ягодицы"
  },
  {
   "week": 3,
   "day": 2,
   "lesson": 61,
   "title": "Осанка без оборудования",
   "embed": "kVms7we7kNXnWjWZi9TLCH",
   "video_title": "Осанка без оборудования"
  },
  {
   "week": 3,
   "day": 3,
   "lesson": 62,
   "title": "Дыхание лежа на животе",
   "embed": "rbQBLVrF9GZ7Wc6F9xGWqE",
   "video_title": "Дыхание лежа на животе"
  },
  {
   "week": 3,
   "day": 3,
   "lesson": 63,
   "title": "Живот и тазовое дно",
   "embed": "kxdEizZDQXYyLJWvWEKi2Q",
   "video_title": "Живот и тазовое дно"
  },
  {
   "week": 3,
   "day": 3,
   "lesson": 64,
   "title": "Тазовое дно",
   "embed": "eGwJ1W2Z5Hi3txWisQiuRn",
   "video_title": "Тазовое дно"
  },
  {
   "week": 3,
   "day": 4,
   "lesson": 65,
   "title": "Дыхание лежа на животе",
   "embed": "rbQBLVrF9GZ7Wc6F9xGWqE",
   "video_title": "Дыхание лежа на животе"
  },
  {
   "week": 3,
   "day": 4,
   "lesson": 66,
   "title": "Ягодицы",
   "embed": "tU6Kjn6i2C6EyhpxrnFMj2",
   "video_title": "Ягодицы"
  },
  {
   "week": 3,
   "day": 4,
   "lesson": 67,
   "title": "Осанка без оборудования",
   "embed": "kVms7we7kNXnWjWZi9TLCH",
   "video_title": "Осанка без оборудования"
  },
  {
   "week": 3,
   "day": 5,
   "lesson": 68,
   "title": "Дыхание лежа на животе",
   "embed": "rbQBLVrF9GZ7Wc6F9xGWqE",
   "video_title": "Дыхание лежа на животе"
  },
  {
   "week": 3,
   "day": 5,
   "lesson": 69,
   "title": "Живот и тазовое дно",
   "embed": "kxdEizZDQXYyLJWvWEKi2Q",
   "video_title": "Живот и тазовое дно"
  },
  {
   "week": 3,
   "day": 5,
   "lesson": 70,
   "title": "Тазовое дно",
   "embed": "eGwJ1W2Z5Hi3txWisQiuRn",
   "video_title": "Тазовое дно"
  },
  {
   "week": 3,
   "day": 6,
   "lesson": 71,
   "title": "Дыхание лежа на животе",
   "embed": "rbQBLVrF9GZ7Wc6F9xGWqE",
   "video_title": "Дыхание лежа на животе"
  },
  {
   "week": 3,
   "day": 6,
   "lesson": 72,
   "title": "Ягодицы",
   "embed": "tU6Kjn6i2C6EyhpxrnFMj2",
   "video_title": "Ягодицы"
  },
  {
   "week": 3,
   "day": 6,
   "lesson": 73,
   "title": "Осанка с МФР",
   "embed": "t5Nq2omYtvdqEsjRDN56Er",
   "video_title": "Осанка с МФР"
  },
  {
   "week": 3,
   "day": 7,
   "lesson": 74,
   "title": "Дыхание лежа на животе",
   "embed": "rbQBLVrF9GZ7Wc6F9xGWqE",
   "video_title": "Дыхание лежа на животе"
  },
  {
   "week": 3,
   "day": 7,
   "lesson": 75,
   "title": "Живот и тазовое дно",
   "embed": "kxdEizZDQXYyLJWvWEKi2Q",
   "video_title": "Живот и тазовое дно"
  },
  {
   "week": 3,
   "day": 7,
   "lesson": 76,
   "title": "Тазовое дно",
   "embed": "eGwJ1W2Z5Hi3txWisQiuRn",
   "video_title": "Тазовое дно"
  },
  {
   "week": 4,
   "day": 1,
   "lesson": 77,
   "title": "Дыхание для плоского живота",
   "embed": "qAZkKRohfVkQpKDbKY4EiN",
   "video_title": "Дыхание для плоского живота"
  },
  {
   "week": 4,
   "day": 1,
   "lesson": 78,
   "title": "Осанка",
   "embed": "9UMjsSxHtchybASxvPFpuj",
   "video_title": "Осанка"
  },
  {
   "week": 4,
   "day": 1,
   "lesson": 79,
   "title": "ягодицы",
   "embed": "w4cMfLy5Kz5JsQ2UWApkmt",
   "video_title": "ягодицы"
  },
  {
   "week": 4,
   "day": 2,
   "lesson": 80,
   "title": "Дыхание для плоского живота",
   "embed": "qAZkKRohfVkQpKDbKY4EiN",
   "video_title": "Дыхание для плоского живота"
  },
  {
   "week": 4,
   "day": 2,
   "lesson": 81,
   "title": "Учимся контролировать «домик» при диастазе",
   "embed": "uAzUSyDeExgbWL9KQbi2Q9",
   "video_title": "Учимся контролировать «домик» при диастазе"
  },
  {
   "week": 4,
   "day": 2,
   "lesson": 82,
   "title": "Плоский живот",
   "embed": "gSHrVfsfUXk2JgMP1wZdQQ",
   "video_title": "Плоский живот"
  },
  {
   "week": 4,
   "day": 3,
   "lesson": 83,
   "title": "Дыхание для плоского живота",
   "embed": "qAZkKRohfVkQpKDbKY4EiN",
   "video_title": "Дыхание для плоского живота"
  },
  {
   "week": 4,
   "day": 3,
   "lesson": 84,
   "title": "Плоский живот",
   "embed": "gSHrVfsfUXk2JgMP1wZdQQ",
   "video_title": "Плоский живот"
  },
  {
   "week": 4,
   "day": 3,
   "lesson": 85,
   "title": "Осанка",
   "embed": "9UMjsSxHtchybASxvPFpuj",
   "video_title": "Осанка"
  },
  {
   "week": 4,
   "day": 4,
   "lesson": 86,
   "title": "Дыхание для плоского живота",
   "embed": "qAZkKRohfVkQpKDbKY4EiN",
   "video_title": "Дыхание для плоского живота"
  },
  {
   "week": 4,
   "day": 4,
   "lesson": 87,
   "title": "Учимся контролировать «домик» при диастазе",
   "embed": "uAzUSyDeExgbWL9KQbi2Q9",
   "video_title": "Учимся контролировать «домик» при диастазе"
  },
  {
   "week": 4,
   "day": 4,
   "lesson": 88,
   "title": "ягодицы",
   "embed": "w4cMfLy5Kz5JsQ2UWApkmt",
   "video_title": "ягодицы"
  },
  {
   "week": 4,
   "day": 5,
   "lesson": 89,
   "title": "Дыхание для плоского живота",
   "embed": "qAZkKRohfVkQpKDbKY4EiN",
   "video_title": "Дыхание для плоского живота"
  },
  {
   "week": 4,
   "day": 5,
   "lesson": 90,
   "title": "Плоский живот",
   "embed": "gSHrVfsfUXk2JgMP1wZdQQ",
   "video_title": "Плоский живот"
  },
  {
   "week": 4,
   "day": 5,
   "lesson": 91,
   "title": "Осанка",
   "embed": "9UMjsSxHtchybASxvPFpuj",
   "video_title": "Осанка"
  },
  {
   "week": 4,
   "day": 6,
   "lesson": 92,
   "title": "Дыхание для плоского живота",
   "embed": "qAZkKRohfVkQpKDbKY4EiN",
   "video_title": "Дыхание для плоского живота"
  },
  {
   "week": 4,
   "day": 6,
   "lesson": 93,
   "title": "Учимся контролировать «домик» при диастазе",
   "embed": "uAzUSyDeExgbWL9KQbi2Q9",
   "video_title": "Учимся контролировать «домик» при диастазе"
  },
  {
   "week": 4,
   "day": 6,
   "lesson": 94,
   "title": "Осанка",
   "embed": "9UMjsSxHtchybASxvPFpuj",
   "video_title": "Осанка"
  },
  {
   "week": 4,
   "day": 7,
   "lesson": 95,
   "title": "Дыхание для плоского живота",
   "embed": "qAZkKRohfVkQpKDbKY4EiN",
   "video_title": "Дыхание для плоского живота"
  },
  {
   "week": 4,
   "day": 7,
   "lesson": 96,
   "title": "Плоский живот",
   "embed": "gSHrVfsfUXk2JgMP1wZdQQ",
   "video_title": "Плоский живот"
  },
  {
   "week": 4,
   "day": 7,
   "lesson": 97,
   "title": "ягодицы",
   "embed": "w4cMfLy5Kz5JsQ2UWApkmt",
   "video_title": "ягодицы"
  },
  {
   "week": 4,
   "day": 7,
   "lesson": 98,
   "title": "Заключение",
   "embed": "j8pTfkDLErm5EhwqoECTcQ",
   "video_title": "Заключение"
  }
 ]
};
