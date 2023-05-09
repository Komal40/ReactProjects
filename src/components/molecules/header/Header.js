
import styles from './Header.module.css'
// GiHamburgerMenu
import {GiHamburgerMenu} from 'react-icons/gi'

export function GetHeader(){

    const navOptions=[
        'Home',
        'About',
        'Project',
        'Video',
        'Contact',
    ]

    return (
        <>
           <header className={styles.header}>
                <img className={styles.image} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DuUXG2ue_bB3rkt_3mFVm_ofkL1jyq_tRw&usqp=CAU'/>
                {navOptions.map(ele=>
                <p>{ele}</p>)}
                    <button>Login</button>
           </header>
           <div className={styles.hamburger}>
           <GiHamburgerMenu />
               {navOptions.map(ele=>
                <ul>{ele}</ul>)}
           </div>
        </>
    )
}
