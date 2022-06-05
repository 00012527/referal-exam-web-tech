module.exports =  errorInfo =  (req, res, next) => {
    res.render('error/404', {
      name_of_title: 'Page Not Found'
    });
  };
  