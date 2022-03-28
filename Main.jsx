import React, { useState } from "react";

function Main() {
  const [inputField, setinputField] = useState("")
  const [addItem, setaddItem] = useState(JSON.parse(localStorage.getItem('notes')) ?? []);


  const inputEvent = (event) => {
    setinputField(event.target.value);
    console.log(event.target.value)
  }


  const Listofnotes = () => {
    if(inputField != ""){
    setaddItem((old) => {
      var notes =  [...old, inputField]
      localStorage.setItem('notes',JSON.stringify(notes))
      return notes
    })
    setinputField('')
  }
  }



  return (
    <>

      <div className='Main'>
        <input type="text" placeholder="Enter your Notes" onChange={inputEvent} value={inputField}></input>
        <button onClick={Listofnotes} > + </button>

        <ul>

          {addItem.map((itemvalue) => {
            return <li style={{ color: '#fff' }}>{itemvalue}</li>
          })}

        </ul>


      </div>
    </>
  )
}
export default Main;