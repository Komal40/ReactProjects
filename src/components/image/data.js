 import {useEffect, useState} from 'react'

export function Data(){
    const [img, setImg]=useState('https://images.pexels.com/photos/14787709/pexels-photo-14787709.jpeg?auto=compress&cs=tinysrgb&w=600')


    useEffect(()=>{
        fetch(' https://dog.ceo/api/breeds/image/random')
        .then((data)=>data.json())
        .then(res=>setImg(res.message))
        .catch(err=>console.log(err))
    }, [])

    return(
        <>
            <img 
            src={img}
            height={'400px'}
            width={'400px'}
            />
        </>
    )
}