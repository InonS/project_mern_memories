/**
 * Handlers and logic
 */

import PostMessage from "../models/postMessage.js";


export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body; // needs frontend form for entering post details
    const newPost = new PostMessage(post)
    try {
        await newPost.save();        
        res.status(201).json(newPost); // see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    } catch (error) {
        res.status(409).json(error.message);
    }
}