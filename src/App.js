import logo from './logo.svg';
import './App.css';
import  Card from './components/card/card';

function App() {

  const productOne = {
        image:'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
        name:'JORDAN',
        description:'lorem ipsum yutejdg trudty estayu ywetruih kutgp',
        dollar:'$60',
        rating:'4'
  }
  const productTwo = {
    image:'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    name:'TSHIRT',
    description:'lorem ipsum yutejdg trudty estayu ywetruih kutgp',
    dollar:'$30',
    rating:'4'
}

const productThree = {
  image:'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=600',
  name:'WATCH',
  description:'lorem ipsum yutejdg trudty estayu ywetruih kutgp',
  dollar:'$70',
  rating:'4'
}
const productFour = {
  image:'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=600',
  name:'HAT',
  description:'lorem ipsum yutejdg trudty estayu ywetruih kutgp',
  dollar:'$10',
  rating:'4'
}
const productFive = {
  image:'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600',
  name:'SUNGLASSES',
  description:'lorem ipsum yutejdg trudty estayu ywetruih kutgp',
  dollar:'$30',
  rating:'4'
}

  return (
    <div className="allproduct">
      <Card 
      product={productOne} 
      />
      <Card
        product={productTwo}
      />
      <Card
        product={productThree}
      />
      <Card
        product={productFour}
      />
      <Card
        product={productFive}
      />

    </div>
  );
}

export default App;

