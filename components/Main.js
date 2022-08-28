import Head from "next/head"
import LogBugs from './LogBugs'
import CompBugs from "./CompBugs"
import { useEffect, useState } from "react"
import ProBugs from "./ProBugs"
import CreateInputs from "./CreateInputs"
import styles from "../styles/main.module.css"
import { motion } from "framer-motion"
import axios from "axios"


export const Main = () => {
  //set state
  const [bugs, setBugs] = useState([])
  const [currentUser, setCurrentUser] = useState({userid: 1, username: "Paully"})
  const [newBug, setNewBug] = useState({})
  //updates when page loades   
  useEffect(() => {
      getAll()
    }, []);
  const addToState = async (data) => {
     setBugs(oldBug => oldBug.concat([data.data]))
  }
  //remove from overall state using bugid
  const removeFromState = (data) => {
    //return new array without given id 
    setBugs(bugs.filter(bug => bug.bugid !== data.bugid))
  }
  //get all bugs from database
  const getAll =  () =>  {
      fetch('http://localhost:8000/api/bugs/all', {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
      setBugs(data)
    })
  }
  //send post request to create new bug
  const handleCreateBug = async (data) => {
    axios({
      method:'post',
      url: 'http://localhost:8000/api/bugs/create',
      data: {
        body:data 
      }
    })
    //addToState will update state with response from post
    .then((res) => addToState(res))
    .catch(error => console.log(error))
   }

    //filter out status of bugs from overall bug state
    let loggedBugs = bugs.filter((bug) => bug.status == 'logged')
    let completedBugs = bugs.filter((bug) => bug.status == 'complete')
    let inprocessBugs = bugs.filter((bug) => bug.status == 'in-progress')
    //send delte request with bug id 
    const handleDeleteBug = async (data) => {
      axios({
        method: 'delete',
        url: 'http://localhost:8000/api/bugs/delete',
        data: {
          body: data
        }
      }).then(res => {
        let data = res.data.rows[0];
        //call remove from state to update state
        removeFromState(data)
        }).catch(error => console.log(error))
    }
  
  return (
    <div>
      <Head> 
      <title>Home</title>
      <script src="https://kit.fontawesome.com/da6e8f7c59.js" crossorigin="anonymous"></script>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={styles.header}>MaccyBugTracker <motion.i drag  dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }} 
    className="fa-solid fa-bug"></motion.i></header>
      <div className={styles.container}>
        <div className={styles.menucontainer}>
        <CreateInputs handleCreateBug={handleCreateBug}  newBug={newBug}/>
        </div> 
        <div className={styles.taskcontainer}> 
            <LogBugs className="log-bugs" logBugs={loggedBugs} handleDeleteBug={handleDeleteBug}/>
            <ProBugs className='pro-bugs' proBugs={inprocessBugs} handleDeleteBug={handleDeleteBug}/>
            <CompBugs className='comp-bugs' compBugs={completedBugs} handleDeleteBug={handleDeleteBug}/>
        </div>
      </div>
      </div>
  )
}
