import Head from "next/head"
import Bugs from './Bugs'
import { useEffect, useState } from "react"


export const Main = () => {
  const [bugs, setBugs] = useState([])
  
  useEffect(() => {
      fetch('http://localhost:8000/api/tasks/all', {method: "GET"})
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setBugs(data)
    })
  }, []);

  return (
    <div>
      <Head> 
      <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <div className="menu-container">
          <div className="task-container"> 
            <Bugs className="bugs" bugs={bugs}/>
          </div>
        </div> 
      </div>
      </div>
  )
}
