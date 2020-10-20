const express = require ('express');
const path = require ('path');
const logger = require ('./middleware/logger')
const members= require('./Members');


//database
const db = require('./config/database');

//test db
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err=>console.log('Error:'+ err))


const app = express();

//Init middleware
app.use(logger);

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`server started on port ${PORT}`));
