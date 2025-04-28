import express from 'express';
import { sendMessage } from '../controller/messageController.js';

const router = express.Router();

router.post("/send",sendMessage); //creating a new message in the database

export default router;

