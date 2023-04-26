import './form.css'
import { useState } from 'react'
import './form.css'

export function Form(){
   
    const [name, setName]=useState('');
    const [text, setText]=useState();

    function toPrintText(){
        setName(text)
        setText('')
    }

    return (
        <div className='parentdiv'>
            <h1>FORM</h1>
            <input value={text} onChange={(e)=>{
                setText(e.target.value)
            }}/>
            <button onClick={toPrintText}>Submit</button>
            <h1>Hi, My Name is : {name}</h1>
        </div>
    )
}
