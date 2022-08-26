import React from 'react'

const ProBugs = ({proBugs}) => {
  return (
    <table>
    <tbody>
    <tr>
      <th>In-Process Bugs</th>
      <th>Created By</th>
      <th>Due Date</th>
      <th>Level</th>
    </tr>
        {proBugs.map(bug => (
          <tr key={bug.bugid}>
           <td key={bug.bugid}>{bug.description}</td>
           <td key={bug.bugid + 'cb'}>{bug.createdby}</td>
           <td key={bug.bugid + 'dd'}>{bug.duedate}</td>
           <td key={bug.bugid + 'l'}>{bug.level}</td>
         </tr>
        ))}
    </tbody>
  </table>
  )
}

export default ProBugs