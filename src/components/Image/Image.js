import axios from 'axios'
import {useState} from 'react'

export function GetImage(){
    const [image, setImage] = useState(
        "https://images.dog.ceo/breeds/african/n02116738_2557.jpg "
      );
    
      function changeImage() {
        axios
          .get("https://dog.ceo/api/breeds/image/random")
          .then((data) => setImage(data.data.message))
          .catch((error) => console.log(error));
      }
    
      return (
        <>
          <img src={image} alt="DogImage" height={"300px"} width={"300px"} />
          <br />
          <button onClick={changeImage}>Get Image</button>
        </>
      );
    }
    