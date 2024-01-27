const http = require("http");

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response
  res.end("Hello, World!\n");
});

// Listen on port 3000
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
