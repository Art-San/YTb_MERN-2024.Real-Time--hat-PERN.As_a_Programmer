import express from 'express'
import protectRoute from '../middleware/protectRoute.js'
import {
  getMessages,
  getUsersForSidebar,
  sendMessage
} from '../controllers/message.controller.js'
const router = express.Router()

router.get('/conversations', protectRoute, getUsersForSidebar)
router.get('/:id', protectRoute, getMessages) // этот роут должен быть ниже чем /conversations, а то перебивает
router.post('/send/:id', protectRoute, sendMessage)

export default router
