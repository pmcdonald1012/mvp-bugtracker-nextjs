import { useState } from "react"
import styles from "../styles/input.module.css"
import { motion } from "framer-motion"
const CreateInputs = ({handleCreateBug}) => {
const [state, setState] = useState({desc:'', date: "", level:'low'})
const handleSubmit = async (event) => {
    //prevent reloading page
     event.preventDefault()
     await handleCreateBug(state)
     setState({desc:'', date: "", level:'low'})
     
}
 const handleChange = (event) => {
   setState(oldState => {
    let newState = {...oldState, [event.target.name]: event.target.value }
    return newState;
    })
 }
  return (
    <div>
        <form className={styles.form} onSubmit={handleSubmit} > 
        <motion.input className={styles.submit} type="submit" whileHover={{ scale: 1.2 }}
           whileTap={{ scale: 0.9 }} value="Report Bug"/>=
            <motion.input whileHover={{ scale: 1.1 }} className={styles.inputs} value={state.desc} type="text" name="desc" required="required" onChange={handleChange} placeholder="Description"/>+
            <motion.input whileHover={{ scale: 1.1 }} className={styles.inputs} value={state.date} type="date" name="date" required="required" onChange={handleChange} placeholder="Due Date" />+
            <motion.select whileHover={{ scale: 1.1 }}className={styles.inputs} onChange={handleChange} required="required" name="level" value={state.level}>
              <option value={"low"}>Low</option>
              <option value={"priority"}>Priority!</option>
              <option value={"urgent"}>Urgent!!!</option>
            </motion.select>
        </form>
    </div>
  )
}

export default CreateInputs