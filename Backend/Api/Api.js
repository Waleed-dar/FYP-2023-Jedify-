const express = require("express");
const port = 3000;
const app = express();
const Contact = require("../Models/ContactModel")
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/")
app.post('/ContactUsData', (req, res) => {
    const { Name, Email, Feedback } = req.body;
    const newContact = new Contact({ Name, Email, Feedback });
    newContact.save()
      .then(contact => res.status(201).json(contact))
      .catch(err => res.status(500).json({ error: err.message }));
  });
 
  app.get('/Contact', (req, res) => {
    res.send("helo world ");
  });
 


app.listen(port ,() =>{
    console.log("our server is running is",port);
})