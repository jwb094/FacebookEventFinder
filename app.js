require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const routes = require('./routes/displayPageRoutes'); 
const eventRoutes = require('./routes/eventRouter'); 
// const session = require("express-session");

app.set('view engine' , 'ejs');


//middleware used
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(routes);
app.use(eventRoutes);



app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});