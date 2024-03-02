import express, {Request, Response} from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
import { IPrompt } from '../types/types.js';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req:Request, res:Response):void => {
    res.send('Hello DALLE WORLD');
})


router.route('/').post(async (req:Request, res:Response):Promise<void> => {
    try {
        const { prompt} = req.body as IPrompt;
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