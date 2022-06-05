const News = require('../models/news');

exports.getNewsPage = (req, res) => {
  News.find()
  .then(news=>{
    res.render('index/news', {
      name_of_title: 'All news present',
      news: news
    });
  }).catch(err => {
    console.log(err)
    return  res.redirect("/")
  })
};

exports.getAddNewsPage = (req, res) => {
    res.render('index/add_news', {
      name_of_title: 'Post News'
    });
};


exports.getSingleNewsPage = (req, res) => {
    News.findById(req.params.newsId)
    .then(news=>{
      if(!news){
          return res.redirect('/404')
      }  
      res.render('index/news_detail', {
        name_of_title:news.post_author,
        news: news
      });
    }).catch(err => {
      console.log(err)
      return  res.redirect("/")
    })
  };


  exports.deleteSingleNews = (req, res) => {
    News.findByIdAndRemove(req.body.newsId)
    .then(()=>{
        return res.redirect("/");
      }).catch(err=>{
        console.log(err)
        return res.redirect("/404")
      })
  };


  exports.postNewNews = (req, res, next) => {
    const title = req.body.title;
    const sub_title = req.body.sub_title;
    const details = req.body.details;
    const post_author = req.body.post_author;
    
    const news = new News({
        title,
        sub_title,
        details,
        post_author
    })

    news.save().then(()=>{
       return res.redirect("/");
    }).catch(err=>{
        console.log(err)
        return res.redirect("/404")
    })
  }  


  exports.getEditNewsPage = (req, res) => {
    const newsId = req.params.newsId;
    News.findById(newsId)
      .then(news => {
        if (!news) {
          return res.redirect('/404');
        }
        res.render('index/edit_news', {
          name_of_title: 'Editing News',
          news: news
        });
      })
      .catch(err => {
         console.log(err)
         return res.redirect('/404');
      });
  };
  


  exports.postEditNews = (req, res) => {

    const title = req.body.title;
    const sub_title = req.body.sub_title;
    const details = req.body.details;
    const post_author = req.body.post_author;
  
    News.findById(req.params.newsId)
      .then(news => {
        if (!news) {
          return res.redirect('/404');
        }
        news.title = title;
        news.sub_title = sub_title;
        news.details = details;
        news.post_author = post_author;
  
        return news.save().then(result => {
          res.redirect('/');
        });
      })
      .catch(err =>{
          console.log(err);
        return res.redirect('/404');
      });
  };

