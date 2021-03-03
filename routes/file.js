var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('file', { title: 'GetPage' });
});

router.get('/:filename', function(req, res, next) {
    var name = req.params['filename'];
    var rootPath = req.app.get('public') + '/files/';
    res.download(rootPath + name);
  });


router.get('/view/:filename', function(req, res, next) {
    var name = req.params['filename'];
    var rootPath = req.app.get('public') + '/files/';
    res.sendFile(rootPath + name, dotfiles=true);
  });

module.exports = router;
