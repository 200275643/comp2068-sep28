var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'lesson4',
  message: 'It is about time for lunch'});
});

/*GET randompage

 */
router.get('/random', function (req, res,next) {
  //generate random #
  var randomNumber = Math.random();

  //load the random view
  res.render('random', { title: 'Random number',
  randomNumber: randomNumber
  });


});

module.exports = router;
