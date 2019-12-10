const mysql = require('mysql')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'admin',
	password : 'admin',
	database : 'nodelogin'
})

const app = express()

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/auth', function(request, response) {
    const username = request.body.username
    const password = request.body.password
    if (username && password) {
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true
                request.session.username = username
                response.redirect('/home')
            } else {
                response.send('Incorect Username and/or Password! ')
            }
            response.end()
        })
    } else {
        response.send('Please enter Username and Password!')
        response.end()
    }
})

app.get('/Dash', function(request, response) {
    if (request.session.loggedin) {
        response.send('Welcome Back, ' + request.session.username + '!')
    } else {
        response.send('Please login to view this page!')
    }
    response.end()
})

app.listen(3000)