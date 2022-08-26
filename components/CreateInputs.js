import { useState } from "react"
const CreateInputs = ({handleCreateBug}) => {
const [state, setState] = useState({desc:'', date: "", level:''})
const handleSubmit = async (event) => {
    //prevent reloading page
     event.preventDefault()
     await handleCreateBug(state)
     setState({desc:'', date: "", level:''})
     
}
 const handleChange = (event) => {
   setState(oldState => {
    let newState = {...oldState, [event.target.name]: event.target.value }
    return newState;
    })
 }
  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <input value={state.desc} type="text" name="desc" required="required" onChange={handleChange} placeholder="Description"/>
            <input value={state.date} type="date" name="date" required="required" onChange={handleChange} placeholder="Due Date"/> 
            <input value={state.level} type="text" name="level" required="required" onChange={handleChange} placeholder="Level"/> 
            <input type="submit"/>
        </form>
    </div>
  )
}

export default CreateInputs