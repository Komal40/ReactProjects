import axios from 'axios'
import {useState} from 'react'

export function GenerateOTP(){

    const [mobile, setMobile]=useState()
    const [err, setErr]=useState('')

    function userData(e){
        setMobile(e.target.value)
    }

    function getOTP(){
        const eg=/^[6-9]\d{9}$/

        if(!eg.test(mobile)){
            setErr("Invalid Mobile Number")
            return 
        }

        axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP')
        .then(data=>setMobile(data))
        .catch(err=>console.log(err))


        setMobile('')
        setErr('')
    }




    return (
        <>
            <h1>Generate OTP</h1>
            <div className="parent">
            <input onChange={userData} type="number" value={mobile}/>
            <button onClick={getOTP}>Get OTP</button>
            </div>
            <div>
                <h4>{err}</h4>
            </div>
        </>
    )
}


