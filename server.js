// const Joi = require('joi');
// const shortid = require('shortid');

// const passwordSchema = Joi.string().min(3).max(10).alphanum();
// console.log(passwordSchema.validate('qqwqwe6&'));
// console.log(shortid.generate());

const express = require('express');
const app = express();

app.use('*', (req, res) => {
  console.log('Біл запрос отбраузера');
  res.send('<h1>ну єто тебе HTML в ответ</h1>');
});

const listener = app.listen(4444, () => {
  console.log(`Веб сервер запущен на порте ${listener.address().port}`);
});
