const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const port = process.env.PORT || 8000;
const rootDir = __dirname;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let requestedPath = req.url === '/' ? '/home.html' : req.url;
  const safePath = path.normalize(requestedPath).replace(/^\.+/, '');
  const filePath = path.join(rootDir, safePath);

  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

const openBrowser = () => {
  const openCommand = process.platform === 'win32'
    ? `start http://localhost:${port}`
    : process.platform === 'darwin'
      ? `open http://localhost:${port}`
      : `xdg-open http://localhost:${port}`;

  exec(openCommand, (err) => {
    if (err) {
      console.log(`Could not open browser automatically. Please open http://localhost:${port} manually.`);
    }
  });
};

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${port} is already in use. The site is likely already running.`);
    openBrowser();
    process.exit(0);
  } else {
    console.error(err);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  openBrowser();
});
