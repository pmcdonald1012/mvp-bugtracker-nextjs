import Head from "next/head"
import LogBugs from './LogBugs'
import CompBugs from "./CompBugs"
import { useEffect, useState } from "react"
import ProBugs from "./ProBugs"
import CreateBtn from "./CreateBtn"
import CreateInputs from "./CreateInputs"


export const Main = () => {
  const [bugs, setBugs] = useState([])
  const [currentUser, setCurrentUser] = useState({userid: 1, username: "Paully"})
  const [newBug, setNewBug] = useState({})
  
  useEffect(() => {
    getAll()
  }, []);

  function getAll () {
    fetch('http://localhost:8000/api/bugs/all', {method: "GET"})
    .then((response) => response.json())
    .then((data) => {
    setBugs(data)
  })
}



 const handleCreateBug = async (data) => {
    //  setNewBug(data)
     const response = await fetch('http://localhost:8000/api/bugs/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
     });
     getAll()
     return response.json(); 
  }


  const loggedBugs = bugs.filter((bug) => bug.status == 'logged')
  const completedBugs = bugs.filter((bug) => bug.status == 'complete')
  const inprocessBugs = bugs.filter((bug) => bug.status == 'in-progress')
 
  return (
    <div>
      <Head> 
      <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <div className="menu-container">
          <div className="task-container"> 
            <CreateBtn /> 
            <CreateInputs handleCreateBug={handleCreateBug}  newBug={newBug}/>
            <LogBugs className="log-bugs" logBugs={loggedBugs}/>
            <ProBugs className='pro-bugs' proBugs={inprocessBugs}/>
            <CompBugs className='comp-bugs' compBugs={completedBugs}/>
          </div>
        </div> 
      </div>
      </div>
  )
}
