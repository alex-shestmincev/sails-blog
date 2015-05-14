module.exports = {
  create: function (req, res){
    var params = {
      description: req.param('description'),
      content: req.param('content'),
      title: req.param('title'),
    }

    Article.create(params).exec(function(err, article){
      res.redirect('/article/watch/' + article.id);
      if (err) return res.send(500);
    });
  },

  update: function(req, res){
    var Id = req.param('id');

    var elem = {
      description : req.param('description'),
      content: req.param('content'),
      title: req.param('title'),
    }

    Article.update(Id, elem).exec(function(err){
      if (err) return res.send(500);
      res.redirect('/article');
    });
  },

  delete:  function (req, res){
    var Id = req.param('id');

    Article.destroy(Id).exec(function(err){
      if (err) return res.send(500);
      res.redirect('/article');
    });
  },

  index: function (req, res){
    Article
      .find()
      .sort('id DESC')
      .limit(5)
      .exec(function(err, articles){
        if (err) return res.send(500);
        res.view({
          articles: articles
        });
      });

  },

  watch: function (req, res){
    var Id = req.param('id');
    Article.findOne(Id).exec(function(err, article){
      if (!article) return res.send(404);
      if (err) return res.send(500);
      res.view({
        article: article
      });
    });
  },

  page: function (req, res){
    var page = req.param('page');

    Article
      .find()
      .sort('id DESC')
      .paginate({
        page: page,
        limit: 5
      })
      .exec(function(err, articles){
        if (err) return res.send(500);
        res.view({
          articles: articles
        });
      });
  }
};

