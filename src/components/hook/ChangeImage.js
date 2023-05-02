import './ChangeImage.css'
import {useEffect, useRef, useState} from 'react'

export function ChangeImage(){

    const img=useRef(null)

    const [url, setUrl]=useState('https://picsum.photos/200')
    
    function changeImage(){
        setUrl(`https://picsum.photos/200?random=${Math.floor(Math.random() * 100)}`)
    }

    useEffect(()=>{
      img.current.src=url 
    },[url])

    return(
        <div className='parent'>
            <img ref={img}/>
            <button onClick={changeImage}>Change Image</button>
        </div>
    )
}

