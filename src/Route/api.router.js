


import express from 'express';
import { routerController } from '../Controllers/route.controller.js';

const router = express.Router();

router.get('/classify-number', routerController);


export default router;