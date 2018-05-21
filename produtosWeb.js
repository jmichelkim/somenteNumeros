var http = require('http');

var server = http.createServer(function(request, response){
    
    if(request.url == "/produtos"){

        response.end("<html><body><h3>Listando os Produtos da Loja</h3></body></html>");

    } else {

        response.end("<html><body><h3>Home da Casa do Codigo</h3></body></html>");

    }

});

server.listen(3000);

console.log("Servidor on line...")