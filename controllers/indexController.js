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

const asyncHandler = require("express-async-handler");

const getHomePage = asyncHandler(async (req, res) =>{
  res.render('homePage', {title: 'Messageboard', messages: messages})
})

module.exports = {getHomePage}