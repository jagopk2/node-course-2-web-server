 const hbs = require('hbs');
 const express = require('express');
 var app = express();

 app.set('view engine','hbs');
 app.use(express.static(__dirname + '/public'));
// app.use((req,res,next) => {
//       res.render('home.hbs',{
//         PageTitle : 'Maintainence Page',
//         currentYear : new Date().getFullYear()
//       });
     
// });


 app.get('/', (req, res) => {
    //  res.send('<h1> This is the Home Page </h1>');
    res.render('home.hbs',{
        PageTitle : 'Home',
        currentYear : new Date().getFullYear()
    });
 });

 app.get('/About', (req, res) => {
    res.render('home.hbs',{
        PageTitle : 'About',
        currentYear : new Date().getFullYear()
    });
 });
 app.get('/Pages', (req, res) => {
    res.render('home.hbs',{
        PageTitle : 'Pages',
        currentYear : new Date().getFullYear()
    });
 });


 app.listen(3000);