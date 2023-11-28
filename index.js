const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        "message": "hello world!"
    })
})

app.get('/api/users', (req, res) => {
    // fetch data from some database
    res.json({
        users: [
            {
                name: "Suprith",
                email: "suprith@gnail.com"
            }
        ]
    })
})

// POST endpoint
app.post('/api/test-post', (req, res) => {
    const requestBody = req.body;

    console.log("req: ", requestBody)

    if (!requestBody) {
        return res.status(400).json({ error: 'Invalid request body' });
    }

    // Process the received data
    console.log('Received data:', requestBody);

    // Send a response
    res.json({ message: 'Data received successfully', req: req.body });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
