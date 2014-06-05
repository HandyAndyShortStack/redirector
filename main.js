var url = 'http://thefabulouspartyboys.com';

WebApp.connectHandlers.use(function(req, res) {
  console.log(req.url);
  res.writeHead(301, {Location: url});
  res.end();
});
