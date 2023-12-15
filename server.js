const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up a basic route
app.get('/', (req, res) => {
    res.status(200).render("windows");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
