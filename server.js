var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

var movies = [
	{'id': "jaw",'title':"Jaws",'rating': 8},
	{'id': "game",'title':"Game",'rating': 9},
]
var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'index.html')
      break
    case '/index.html':
      sendFile(res, 'index.html')
      break
    case '/style.css':
      sendFile(res, 'style.css')
      break
    case '/background_picture.jpg':
      sendFile(res, 'background_picture.jpg')
      break
    case '/trang_picture.jpg':
      sendFile(res, 'trang_picture.jpg')
      break
    case '/Ariandi.otf':
      sendFile(res, 'Ariandi.otf')
      break
    case '/movies':
    res.end(JSON.stringify(movies))
    break
    

    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename) {

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(content, 'utf-8')
  })

}
