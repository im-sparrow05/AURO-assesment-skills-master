// Import required modules
const express = require('express');
const userroutes= require('./routes/useroutes')
const aptiroutes= require('./routes/aptiroutes')
const codingroutes= require('./routes/codingroutes')
const testroutes= require('./routes/testroutes')
const database= require('./configDB/database')
const cors= require('cors')
const bodyParser = require('body-parser')
// Create an instance of Express
const app = express();
// Define the port number
const PORT = 4000;
// Define CORS options
const corsOptions = {
    origin: 'http://localhost:5173', // Allow requests from this origin
};

app.use(cors(corsOptions));
// Define a route
app.use(bodyParser.json())
//signup 
app.use('/api',userroutes)
app.use('/app',aptiroutes)
app.use('/app',codingroutes)
app.use('/app',testroutes)
// Start the server
app.get('/home',(req,res)=>{
    res.json({ message: "hello" });
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
