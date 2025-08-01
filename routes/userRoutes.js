import express from 'express'
import userAuth from '../middleware/userAuth.js';
import { getUserData } from '../controllers/userController.js';

const userRouter =  express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User related endpoints
 */

/**
 * @swagger
 * /api/user/data:
 *   get:
 *     summary: Get logged-in user's data
 *     tags: [User]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: User data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *       401:
 *         description: Unauthorized
 */
userRouter.get('/data', userAuth, getUserData)

export default userRouter;