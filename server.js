const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON request bodies
app.use(express.json());

// Routes
const routes = require('./routes');
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
