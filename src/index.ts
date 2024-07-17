import express from 'express'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cookieParser()) // для анализа файлов cookie
app.use(express.json()) // для анализа приложения/json

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

/*TODO: add socket.io to the server*/
/*TODO: Configure this server for development*/

// import express from "express";
// import cookieParser from "cookie-parser";
// import path from "path";

// import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.route.js";

// import dotenv from "dotenv";
// import { app, server } from "./socket/socket.js";
// dotenv.config();

// const PORT = process.env.PORT || 5001;
// const __dirname = path.resolve();

// app.use(cookieParser()); // for parsing cookies
// app.use(express.json()); // for parsing application/json

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);

// if (process.env.NODE_ENV !== "development") {
// 	app.use(express.static(path.join(__dirname, "/frontend/dist")));
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// 	});
// }

// server.listen(PORT, () => {
// 	console.log("Server is running on port " + PORT);
// });
