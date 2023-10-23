const express = require('express'); // Imports the Express.js framework, which is commonly used for building web applications and APIs in Node.js.
require('dotenv').config(); // Imports and configures the dotenv module, allowing the application to read environment variables from a .env file.
const colors = require('colors'); // Imports the colors module, which provides text coloring for the console output. It's used for adding color to console logs in this case.
const cors = require('cors'); // Imports the CORS (Cross-Origin Resource Sharing) middleware, which enables the server to handle cross-origin HTTP requests.
const connectDB = require('./database/config/db'); //Imports a function (connectDB) responsible for connecting to the database. It's in a separate file (db.js) located in the ./database/config/ directory.
const port = process.env.PORT || 5000; // Sets the port number for the server. It uses the value of the PORT environment variable if it exists; otherwise, it defaults to port 5000.

const app = express();

app.use(express.urlencoded({extended:false})); 
app.use(express.json());
app.use(cors());
connectDB();

const userRouter=require('./routes/userRoutes');

app.use(userRouter);

app.listen(port, console.log(`server runneando chevere :D ${port}`));
