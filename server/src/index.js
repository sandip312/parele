const express = require('express');
const userRoute=require('./routes/user');
const contactRoutes = require('./routes/contacts');
const productRoutes = require('./routes/productRoutes');
const dbConnect = require('./db/dbConnect');
const cors = require('cors');





const app = express()
require('dotenv').config()
 const port = process.env.PORT || 8848  //const port = 8848 

// Connect to MongoDB
dbConnect()
// Middleware  
app.use(express.json({limit:'50mb'}));
app.use(cors())

// Route
app.use("/user",userRoute)
app.use('/api', productRoutes);
app.use('/api/contact', contactRoutes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})









