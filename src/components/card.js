
import './card.css'


export function Card(props){
    return (
        <div className="parent">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9GDHzUQv-8BKb08F9sPYKgMMPQ6-Lay-VQ&usqp=CAU" className="image"></img>
            <h2 className="name">{props.name}</h2>
            <h2 className="designation">{props.designation}</h2>
            <p className="description">{props.jobDescription}</p>
            <button className="btn" onClick={props.card}>See More</button>
        </div>
)
}













