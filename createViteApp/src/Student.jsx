import React from 'react'
import "./student.css"
function Student(props) {
  return (
    <div className='icard'>
        <table border={1}>
            <tbody>
                <tr>
                    <th colSpan={2}>{props.college}</th>
                </tr>
                <tr>
                    <td colSpan={2}>
                        {props.pic}
                    </td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <th>RollNo</th>
                    <td>{props.roll}</td>
                </tr>
                <tr>
                    <th>Branch</th>
                    <td>{props.branch
                        }</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
Student.defaultProps={
    college:"AKG Engineering College"
}

export default Student