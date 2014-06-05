var url = 'http://thefabulouspartyboys.com';

WebApp.connectHandlers.use(function(reqest, response) {
  response.writeHead(301, {Location: url});
  response.end();
});
