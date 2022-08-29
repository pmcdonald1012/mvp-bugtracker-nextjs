import { useState } from "react"
import styles from "../styles/input.module.css"
import { motion } from "framer-motion"
const CreateInputs = ({handleCreateBug}) => {
//create a local state 
const [state, setState] = useState({desc:'', date: "", level:'Low', status: "logged"})
const handleSubmit = async (event) => {
    //prevent reloading page
     event.preventDefault()
     //send up local state to main function to send post request 
     await handleCreateBug(state)
     //reset local state to prep for next request
     setState({desc:'', date: "", level:'Low', status: ""})
}
 const handleChange = (event) => {
  //setting state with old state, and setting a key with targets name prop and value prop
   setState(oldState => {
    let newState = {...oldState, [event.target.name]: event.target.value }
    return newState;
    })
 }
  return (
    <div>
        <form className={styles.form} onSubmit={handleSubmit} > 
        <motion.input className={styles.submit} type="submit" whileHover={{ scale: 1.2, color: "rgba(255, 255, 255, 0.778)" }}
           whileTap={{ scale: 0.9 }} value="Report Bug"/>=
            <motion.input whileHover={{ scale: 1.1, color: "rgba(255, 255, 255, 0.778)" }} className={styles.inputs} value={state.desc} type="text" name="desc" required="required" onChange={handleChange} placeholder="Description"/>+
            <motion.input whileHover={{ scale: 1.1, color: "rgba(255, 255, 255, 0.778)" }} className={styles.inputs} value={state.date} type="date" name="date" required="required" onChange={handleChange} placeholder="Due Date" />+
            <motion.select whileHover={{ scale: 1.1, color: "rgba(255, 255, 255, 0.778)" }}className={styles.inputs} onChange={handleChange} required="required" name="level" value={state.level}>
              <option value={"Low"}>Low</option>
              <option value={"Priority"}>Priority!</option>
              <option value={"Urgent"}>Urgent!!!</option>
            </motion.select>+
            <motion.select whileHover={{ scale: 1.1, color: "rgba(255, 255, 255, 0.778)" }} className={styles.inputs} onChange={handleChange} required="required" name="status" value={state.status}>
              <option value={"logged"}>Reporting this</option>
              <option value={"in-progress"}>Working on it</option>
              <option value={"complete"}>This bug is complete</option>
            </motion.select>
        </form>
    </div>
  )
}

export default CreateInputs