import express from 'express'

import { login, logout, signup, getMe } from '../controllers/auth.controller.js'
import protectRoute from '../middleware/protectRoute.js'

const router = express.Router()

router.get('/me', protectRoute, getMe)
router.post('/login', login)
router.post('/signup', signup)
router.post('/logout', logout)

export default router
