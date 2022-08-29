import styles from '../styles/probugs.module.css'
import { motion } from 'framer-motion';
const ProBugs = ({proBugs, handleDeleteBug, handleChangeStatus}) => {
  const localHandleClick = (event) => {
    const removeId = event.target.dataset.remove;
    handleDeleteBug(removeId)
}
const changeStatus = (event) => {
  handleChangeStatus(event.target.dataset.id, "complete" )
}
const changeStatusRev = (event) => {
  handleChangeStatus(event.target.dataset.id, "logged" )
}
  return (
    <motion.div whileHover={{ scale: 1.05, color: 'white'}} className={styles.organizetable}>IN-PROGRESS BUGS  <i id={styles.iconpro}className="fa-solid fa-spinner fa-spin"></i>
    <table className={styles.table}>
      <thead>
      <tr className={styles.headtr}>
        <th className={styles.th}>Bug</th>
        <th className={styles.th}>Created By</th>
        <th className={styles.th}>Due Date</th>
        <th className={styles.th}>Level</th>
      </tr>
      </thead>
      <tbody >
          {proBugs.map(bug => (
            <tr className={styles.trow} key={bug.bugid}>
             <td  className={styles.td} key={bug.bugid}>{bug.description}</td>
             <td  className={styles.td} key={bug.bugid + 'cb'}>{bug.createdby}</td>
             <td  className={styles.td} key={bug.bugid + 'dd'}>{bug.duedate}</td>
             <td  className={styles.td} key={bug.bugid + 'l'}>{bug.level}</td>
             <motion.td whileHover={{ scale: 1.3, color: "yellow"}} onClick={changeStatusRev} className="fa-solid fa-flag" data-id={bug.bugid}></motion.td>
             <motion.td whileHover={{ scale: 1.3, color: "green"}} onClick={changeStatus} className="fa-solid fa-check" data-id={bug.bugid}></motion.td>
             <motion.td whileHover={{ scale: 1.3, color: "red"}} className="fa-solid fa-trash-can"  onClick={localHandleClick} data-remove={bug.bugid}></motion.td>
           </tr>
          ))}
      </tbody>
    </table>
    </motion.div>
  )
}

export default ProBugs