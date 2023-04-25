import logo from './logo.svg';
import './App.css';
import { Card } from './components/card';

function App() {

  // const users=[
  //   {
  //     id:1,
  //     name:"Raju Srivastava",
  //     designation:"UI/UX Designer",
  //     jobDescription:"I design user interface",
  //     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9GDHzUQv-8BKb08F9sPYKgMMPQ6-Lay-VQ&usqp=CAU"
  //   },
  //   {
  //     id:2,
      // name:"Shivani Singh",
      // designation:"Software Engineer",
      // jobDescription:"I build software",
      // image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9GDHzUQv-8BKb08F9sPYKgMMPQ6-Lay-VQ&usqp=CAU"
  //   },
  //   {
  //     id:3,
      // name:"Raju Kashyap",
      // designation:"UI/UX Designer",
      // jobDescription:"I build user interface",
      // image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9GDHzUQv-8BKb08F9sPYKgMMPQ6-Lay-VQ&usqp=CAU"
  //   }
  // ]

  function card1(){
    alert('Raju Srivastava')
  }

  function card2(){
    alert('Shivay Singh')
  }

  function card3(){
    alert('Raju Kashyap')
  }
  return (
    <div className="AppOne">
      
      {/* {users.map((user)=>(
        <Card 
          key={users.id}
          image={users.image}
          name={users.name}
          designation={users.designation}
          jobDescription={users.jobDescription}
        />
      ))} */}

      <Card
        name="Raju Srivastava"
       designation="UI/UX Designer"
       jobDescription="I design user interface I build software Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt . Ut enim ad minim veniam, quis nostrud exercitation."
   image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9GDHzUQv-8BKb08F9sPYKgMMPQ6-Lay-VQ&usqp=CAU"
    card={card1}
      />
      <Card
      name="Shivay Singh"
      designation="Software Engineer"
      jobDescription="I build software Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntsed do eiusmod tempor incididunt . Ut enim ad minim veniam, quis nostrud exercitation."
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9GDHzUQv-8BKb08F9sPYKgMMPQ6-Lay-VQ&usqp=CAU"
      card={card2}
      />
      <Card
        name="Raju Kashyap"
      designation="UI/UX Designer"
      jobDescription="I build user interface I build software Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt . Ut enim ad minim veniam, quis nostrud exercitation."
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9GDHzUQv-8BKb08F9sPYKgMMPQ6-Lay-VQ&usqp=CAU"
      card={card3}
      />
      
    </div>
   
  );
}

export default App;
