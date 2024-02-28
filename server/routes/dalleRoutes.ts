import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
import {v2 as cloudinary} from 'cloudinary';

import Post from "../mongodb/models/post.js";
import { error } from 'console';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req, res) => {
    res.send('Hello DALLE WORLD');
})


router.route('/').post(async (req, res) => {
    try {
        const { prompt} = req.body;
        const apiResponse = await openai.images.generate({
            prompt,
            n:1,
            size:"1024x1024",
            response_format:"b64_json"
        });

        const image = apiResponse.data[0].b64_json;
        res.status(200).json({photo:image}); ;
    } catch (err)  {
        console.log(err);
        res.status(500).send(err.error);
    }
})

export default router;