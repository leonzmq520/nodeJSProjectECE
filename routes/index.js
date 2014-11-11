var express = require ('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
        res.render('mainPage', {
            title: 'Bienvenue!'
        });
});

/* GET hello world page. */
router.get('/hi', function(req, res) {
    res.render('helloWorld', {
        title: 'Hello World!'
    });
});

module.exports = router;






