import styles from '../styles/bugs.module.css'
import { motion } from 'framer-motion';
const logBugs = ({logBugs, handleDeleteBug}) => {
 const localHandleClick = (event) => {
      const removeId = event.target.dataset.remove;
      handleDeleteBug(removeId)
 }
  return (
  <div className={styles.organizetable}>LOGGED BUGS  <i className="fa-solid fa-flag"></i>
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
          {logBugs.map(bug => (
            <tr className={styles.trow} key={bug.bugid}>
             <td className={styles.td} key={bug.bugid}>{bug.description}</td>
             <td className={styles.td} key={bug.bugid + 'cb'}>{bug.createdby}</td>
             <td className={styles.td} key={bug.bugid + 'dd'}>{bug.duedate}</td>
             <td className={styles.td} key={bug.bugid + 'l'}>{bug.level}</td>
             <motion.td whileHover={{ scale: 1.3, x: 20, color: "red"}} className="fa-solid fa-delete-left"  onClick={localHandleClick} data-remove={bug.bugid}></motion.td>
           </tr>
          ))}
      </tbody>
    </table>
    </div>
  )
}

export default logBugs;