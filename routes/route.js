exports.setRoutes = function(app){
  app.use('/', require('./routers/default'));
  app.use('/search', require('./routers/search'));
  app.use('/insert', require('./routers/insert'));
  app.use('/delete', require('./routers/delete'));
};
