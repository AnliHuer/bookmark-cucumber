exports.setRoutes = function(app){
  app.use('/', require('./routers/default'));
  app.use('/index', require('./routers/index'));
  app.use('/insert', require('./routers/insert'));
  app.use('/delete', require('./routers/delete'));
};
