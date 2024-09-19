const messages = [{
  text: 'message1',
  user: 'Carson',
  date: new Date()
},
{
  text: 'message2',
  user: 'Torsha',
  date: new Date()
}]

const express = require('express');
const indexController = require('../controllers/indexController.js');
const router = express.Router();

router.get('/', (req, res) =>{
  res.render('homePage', {title: 'Messageboard', messages: messages})
});

router.get('/new', (req, res)=>{
  res.render('formPage', {message: 'form Page!'})
});

router.post('/new', (req, res)=>{
  messages.push({ text: req.body.message, user: req.body.user, date: new Date() });
  res.redirect('/');
})

module.exports = router;