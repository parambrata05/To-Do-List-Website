const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the same directory as the server.js
app.use(express.static(__dirname));

// Define the route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
