var express = require('express');
var path = require('path')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET paths to this file */
router.get('/paths', function(req, res) {
  res.render('paths',
             {
                title: 'Paths to this file',
                dirpath: __dirname,
		filepath: __filename,
	     }
	    );
});

/* For prettify */
var jsonPrettyPrintHtmlFile = path.resolve(__dirname + '/../public/prettify/json-pretty-print.html');
var sqlPrettyPrintHtmlFile = path.resolve(__dirname + '/../public/prettify/sql-pretty-print.html');

/* GET json prettifier */
router.get('/jsonpretty', function(req, res) {
  res.sendfile(jsonPrettyPrintHtmlFile);
});

/* GET json prettifier */
router.get('/sqlpretty', function(req, res) {
  res.sendfile(sqlPrettyPrintHtmlFile);
});

module.exports = router;
