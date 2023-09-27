var http = require('http');
var hm= require('./home');
var lg= require('./login');
var cd= require('./cadastro');
var cl= require('./consultas');
var pl= require('./planos');
var md= require('./medicos');


http.createServer( function (req,res) {

res.writeHead(200, {'Content-Type': 'text/html'})
res.write("pagina home:"+hm.MyDateTime()+ "<br>");
res.write("pagina de login:"+lg.MyDateTime()+ "<br>");
res.write("pagina de cadastro:"+cd.MyDateTime()+ "<br>");
res.write("pagina de consultas:"+cl.MyDateTime()+ "<br>");
res.write("pagina de planos:"+pl.MyDateTime()+ "<br>");
res.write("pagina de medicos:"+md.MyDateTime()+ "<br>");
res.end();
}).listen(5022);
