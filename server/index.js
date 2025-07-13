const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())


app.post('/createUser' , (req , res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.get('/getUsers' , async(req , res) =>{
    try{
        const users = await UserModel.find();
        res.json(users)
    }catch(err){
        res.status(500).json({error : err.message});
    }
});

// get single user api
app.get('/getUser/:id', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.put('/updateUser/:id' , async(req , res) =>{
   try{
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id , req.body , {new : true});
    res.json(updatedUser)
   }catch(err){
    res.status(500).json({error : err.message})
   }
});


app.delete('/deleteUser/:id' , async (req , res) => {
    try{
      const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
      res.json(deletedUser);
    }catch(err){
        res.status(500).json({error : err.message});
    }
});


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('Database connection error:', err));




app.listen(3001 , () => {console.log('server is running on http://localhost:3001')})