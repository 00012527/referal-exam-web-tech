const express = require('express');
const newsController = require('../controllers/news');
const router = express.Router();

router.get('/',  newsController.getNewsPage);
router.get('/add-news',  newsController.getAddNewsPage);
router.post('/add-news',  newsController.postNewNews);
router.get('/news/:newsId',  newsController.getSingleNewsPage);
router.post('/delete-news',  newsController.deleteSingleNews);
router.get('/edit-news/:newsId', newsController.getEditNewsPage);
router.post('/edit-news/:newsId', newsController.postEditNews);

module.exports = router;
