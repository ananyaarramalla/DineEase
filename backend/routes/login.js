

import express from 'express';
import  login_user  from '../controller/authController.js'; // Import the login controller function

const router = express.Router();

// Define the POST route for handling login requests
router.post('/send', login_user);

export default router;
