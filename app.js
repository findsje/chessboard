import express from 'express';

const app = express();
const port = 3000;

// Serve static files from 'public'
app.use(express.static('public'));
app.use(express.static('dist'));

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
