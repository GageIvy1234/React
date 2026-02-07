
import './App.css'
import{ useEffect, useReducer} from "react";
import cook from "./images/cook.jpg";
import React, { useState } from "react"
import "./App.css";
let language = "JavaScript"
let moon = "moon"

const animals=["giraffe","zebra","bear"]

function Header(name,year){
  return(
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}
const items = [
  "Macaroni and Cheese", "Salmon with Potatoes","Tofu with Vegetables"
];
const dishObjects = items.map((dish,i) => ({
  id: i,
  title: dish
}))
function Main(dishes,openStatus,onStatus){
  return(
    <>
    <div>
      <button onClick={() => onStatus(true)}>
        I want to be open
      </button>
       <h2>Welcome to this beautiful restaurant! {openStatus ? "Open" : "Closed"}
    </h2>
    </div>
    <main>
      <img src={cook} height ={200} alt="A photo of a chef owner"/>

    <ul> 
    {dishes.map((dish) => 
    (<li key={dish.id}style ={{listStyleType: "none"}}>{dish.title}</li>)
  )}
    </ul>
    </main>
    </>
  );
}
function App() {
  //const [status,setStatus] = useState(true);
  const [status, toggle] = useReducer((status) => !status,true);
 
  return (
  <div>
    <h1>The restaurant is currently {status ? "open" : "closed"}.</h1>
     
    <button onClick={toggle}>
      {status ? "Close": "Open"} Restaurant
    </button>
    <Header name="Gage" year={2000}/>
  <Main dishes ={items} openStatus ={status} onStatus={toggle}/>

  </div>
  );
}

export default App
