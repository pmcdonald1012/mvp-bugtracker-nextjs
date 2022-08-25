import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { pool } from "./database.js";

dotenv.config(); 

//config server
const server = express();
const port = process.env.PORT;
server.use(express.json());
server.use(cors())

server.use(express.static("static"));

//routes
server
  .get('/api/tasks/all', async (req, res) => {
    try {
        const getAllBugs = (await pool.query('SELECT * FROM bugs')).rows
        res.send(getAllBugs)
    } catch (error) {
       console.error(error)      
       res.send(error)
    }
  
  })

//server listening on a port
server.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
})

