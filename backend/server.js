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
  .get('/api/bugs/all', async (req, res) => {
    try {
        const getAllBugs = (await pool.query('SELECT * FROM bugs')).rows
        res.send(getAllBugs)
    } catch (error) {
       console.error(error)      
       res.send(error)
    }
  })
  .post('/api/bugs/create', async (req, res) => {
    console.log(req.body)
    try {
      const data = req.body.body;
      const createNewBug = (await pool.query('INSERT INTO bugs (userid, createdby, description, duedate, level, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;',[1, 'Paully', data.desc, data.date, data.level, 'logged']))
      console.log(createNewBug.rows)
      res.send((createNewBug.rows[0]))
    } catch (error) {
      console.error(error)      
       res.send(error)
    }
  })
  .delete('/api/bugs/delete', async (req, res) => {
    console.log("delete req")
    try {
      const bugId = req.body.body; 
      const deleteBug = (await pool.query('DELETE FROM bugs WHERE bugid = $1 RETURNING *;', [bugId]))
      res.send(deleteBug)
    } catch (error) {
      console.error(error)
      res.send(error)
    }
  })

//server listening on a port
server.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
})

///let saveUnderUser = (await pool.query('INSERT INTO saves (quoteid, userid) VALUES ($1, $2);', [saveQuotes.rows[0]["quoteid"], currentUser]))