const express = require('express');
const dbConnection = require('./src/config/dbconfig');

require('dotenv').config();
const router = require('./src/route');
const app = express();
const port = process.env.PORT || 4000;

// Connect to the database
dbConnection();

// router connection
app.use(router)




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
