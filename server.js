var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
     extended: true
 }));
 
 const mc = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'exeeto_online_test_db'
});

mc.connect();

 // default route
 app.get('/', function (req, res) {
     return res.send({ error: true, message: 'hello' })
 });
 
	 /// subject list
	app.get('/subjectList', function (req, res) {
		mc.query('SELECT `tbl_subject_id`, `tbl_subject_name`, `tbl_subject_active_status` FROM `tbl_subject` WHERE 1', function (error, results, fields) {
				if (error) throw error;
				return res.send({ error: false, bg_state: results, message: 'Todos list.' });
		});
	});
	
	app.get('/subjectList',function)
	
	
 // set port
 app.listen(3000, function () {
     console.log('Node app is running on port 3000');
 });
 module.exports = app;