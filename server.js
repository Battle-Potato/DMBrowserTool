const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));


//converts Given name to unique ID for a window
function convertNameToId(input)
{
    for(var i = 0; i < input.length; i++)
    {
        if(input[i] === " ")
        {
            input[i] = "-"
        }
    }
    console.log(input)
}

// Set up a basic route
app.get('/', (req, res) => {
    var name = "Dice Roller 1"
    res.status(200).render("test", {name: "Dice Roller 1", id: name.replaceAll(" ", "-")})
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
