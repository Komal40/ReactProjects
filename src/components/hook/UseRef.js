import './UseRef.css'
import {useRef} from 'react'

export function FilePicker(){

    const inputRef=useRef(null)

    function handleClick(){
        inputRef.current.click()
    }

    return (
        <div className="parent">
        <input
            type="file"
            ref={inputRef}
        />
        <button onClick={handleClick}>Pick the file</button>
        </div>
    )
}

