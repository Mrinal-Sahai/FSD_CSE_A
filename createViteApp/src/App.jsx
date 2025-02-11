import React from 'react'
import Student from './Student';
import logo from "./assets/download.jpeg"
function App() {
  let a = 12;
  const mystyle = {
    backgroundColor: "red",
    color: "white"
  }
  return (
    <div style={mystyle}> ABES Engineering College
      <div style={mystyle}> {a}</div>
      <div style={{display : "flex"} }>
        <Student college='ABES ENGINEERING COLLEGE'
          pic={<img src={logo} height={200} width={300}></img>}
          branch="CSE"
          name="MRINAL SAHAI"
          roll="2200320100101"
        />

        <Student 
        
          pic={<img src={logo} height={200} width={300}></img>}
          branch="CSE"
          name="MRINAL SAHAI"
          roll="2200320100101"
        />

        <Student college='ABES ENGINEERING COLLEGE'
          pic={<img src={logo} height={200} width={300}></img>}
          branch="CSE"
          name="MRINAL SAHAI"
          roll="2200320100101"
        />
      </div>
    </div>

  )
}

export default App