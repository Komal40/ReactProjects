import './card.css';

export default function Card(props){
    function addCart(){
        alert(props.product.name+" is added in the cart, please proceed to pay!!!")
    }
    

    return (
        <div className="parent-div"> 
            <img src={props.product.image} ></img>
            <div id="abc">
            <h1>{props.product.name}</h1>
            
            <p>{props.product.description}</p>
            <h4>{props.product.dollar}</h4>
            <h4>Rating: {props.product.rating}</h4>
            </div>
            <button className="btn" onClick={addCart}>Add To Cart</button>
        </div>
    )
}

