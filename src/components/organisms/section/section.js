import styles from './section.module.css'

export function Section(){

    return(
        <div className={styles.section}>
        <div className={styles.leftside}>
            <h1>Blue Theme</h1>
            <p>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
            lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
            lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!</p>
            <button>Know More</button>
        </div>
        <div className={styles.rightside}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&usqp=CAU'/>
        </div>
        </div>
    )

}
