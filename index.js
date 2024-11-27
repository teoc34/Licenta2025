const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const expenseRoutes = require('./routes/expenses');
app.use('/api/expenses', expenseRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Budget Management App!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
