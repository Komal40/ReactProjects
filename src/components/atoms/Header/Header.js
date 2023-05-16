import React from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate=useNavigate()

    const navOptions=[
        'Home',
        'About',
        'Contact',
        'Login',
        'Register'
    ]


  return (
    <nav>
    <div className={styles.header}>
    <div className={styles.logo}>
        <img src='https://images.pexels.com/photos/104372/pexels-photo-104372.jpeg?auto=compress&cs=tinysrgb&w=600'
        height={'70px'}
        style={{borderRadius:'50%'}}
        />
    </div>
    
    <div className={styles.items}>
    {
            navOptions.map(ele=>
            <ul className={styles.particular}
            onClick={()=>navigate(`${ele}`)}
            >{ele}</ul>
            )
    }
    </div>
    </div>
    </nav>
  )
}
