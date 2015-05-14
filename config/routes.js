module.exports.routes = {

  '/': {
    view: 'homepage'
  },

  'get /article/:page':{
    controller: 'article',
    action: 'page'
  },

  'post /article/create':{
    controller: 'article',
    action: 'create'
  },

  'get /article/delete/:id':{
    controller: 'article',
    action: 'delete'
  },

  'post /article/update':{
    controller: 'article',
    action: 'update'
  }


};
