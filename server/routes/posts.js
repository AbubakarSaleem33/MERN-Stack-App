const express = require('express');
const PostMessage = require('../models/postMessages.js');

const router = express.Router();

router.get('/' ,async (req, res) => {
   try{
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
   }catch{
        res.status(404).json({ message: error.message})

   }
});

router.post('/', async (req, res) => {
    const body = req.body;

    const newPost = new PostMessage(post);

     try{
          await newPost.save();

          res.status(201).json(newPost);
    }catch{
          res.status(409).json({ message: error.message});

    }
})

module.exports = router;