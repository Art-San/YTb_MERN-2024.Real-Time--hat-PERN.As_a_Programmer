import express from 'express'

const router = express.Router()

router.get('/conversations', (req, res) => {
  res.send('conversations')
})
router.get('/:id', (req, res) => {
  res.send('id')
})
router.post('/send/:id', (req, res) => {
  res.send('/send/id')
})

export default router
// import express from "express";
// import protectRoute from "../middleware/protectRoute.js";
// import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";
// const router = express.Router();

// router.get("/conversations", protectRoute, getUsersForSidebar);
// router.get("/:id", protectRoute, getMessages);
// router.post("/send/:id", protectRoute, sendMessage);

// export default router;
