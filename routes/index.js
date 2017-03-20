const express = require('express'),
      router = express.Router(),
      multer = require('../modules/multer');

router.get('/', (req, res) => {
  res.render('./pages/index');
});

router.post('/upload', multer.upload.single('file'), (req, res) => {
  if (req.file) {
    res.status(200).json({
      size: req.file.size
    });
  } else {
    res.status(500).json({
      error: 'No file uploaded.'
    });
  }
})

module.exports = router;
