import React, { useState } from 'react'
import style from './List.module.css'

export default function List() {
    const[newUser, setNewUser]=useState("")

    const [names, setNames]=useState([
        "Ankit",
        "Raj",
        "Mohit"
    ])
    

    function handleClick(indexNum=2){
        const data=names.filter((ele, index)=> index!==indexNum)
        setNames(data)
    }


    function takeInput(e){
        setNewUser(e.target.value)
    }


    function handleSubmit(e){
        e.preventDefault()
        if(!newUser) return

        setNewUser(newUser)
        const data=[...names, newUser]
        setNames(data)
        setNewUser("")
    }

  return (
    <div className={style.container}>
        <div>
            {
                names.map((ele, index)=>(
                    <div key={index} className={style.element}>
                    {ele}
                    <button className={style.btn} onClick={()=>handleClick(index)}>Delete</button>
                    </div>
                ))
            }
        <form onSubmit={handleSubmit}>
        <input className={style.inp}
        onChange={takeInput}
        value={newUser}
        />
        </form>
        </div>
    </div>
  )
}
