import './form.css'
import { Button } from '../../atoms/button/button'
import {useState} from 'react'

export function Form(){

    const [luckynum, setLuckyNum]=useState(Math.floor(Math.random()*100)+1)
    const [guess, setGuess]=useState(0)
    const [count, setCount]=useState(0)
    const [msg, setMsg]=useState('Guess the number ...')

    function handleGuess(){
        setCount(count+1)
        if(guess < luckynum){
            alert("small")
        }
        else if(guess>luckynum){
            alert("big")
        }
        else{
            setMsg(`Congrats! You guessed the right number in ${count+1} times.`)
        }
        
        setGuess(0)
    }
    
    

    return(
        <>
        <div className='parent'>
            <input className="input"
            type="number" 
            onChange={(e)=>{setGuess(e.target.value)}}
            placeholder="Guess Lucky Number from 0 to 100"/>
            <Button clickbtn='btn' clickSubmit={handleGuess}/>
        </div>
        <h3 className='para'>{msg}</h3>
        </>
    )
}

