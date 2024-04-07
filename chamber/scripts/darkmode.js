// darkmode.js
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
  const filePath = '.' + req.url;
  const extname = path.extname(filePath);
  let contentType = 'text/html';

  if (extname === '.js') {
    contentType = 'text/javascript';
  }

  fs.readFile(filePath, function(error, content) {
    if (error) {
      if(error.code == 'ENOENT'){
        // Handle 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Not Found');
      }
      else {
        // Handle other errors
        res.writeHead(500);
        res.end('Internal Server Error: ' + error.code + ' ..\n');
        res.end();
      }
    }
    else {
      // Serve the file with the correct MIME type
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}).listen(5500);

console.log('Server running at http://127.0.0.1:5500/');

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  
  // Event listener to toggle dark mode when button is clicked
  document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', toggleDarkMode);
    }
  });
  