
import './card.css'


export function Card(props){
    return (
        <div className="parent">
            <img src={props.image} className="image"></img>
            <h2 className="name">{props.name}</h2>
            <h2 className="designation">{props.designation}</h2>
            <p className="description">{props.jobDescription}</p>
            <button className="btn" onClick={props.card}>See More</button>
        </div>
)
}













