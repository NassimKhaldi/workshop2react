import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassComponent from "./ComposantCours/ClassComponent";
import FuncComponent from "./ComposantCours/FuncComponent";
import Methods from "./ComposantCours/ClassComponentLifeCycle/Methods";
import Counter from "./ComposantCours/ClassComponentLifeCycle/Counter";
import ListManager from "./ComposantCours/ClassComponentLifeCycle/ListManager";
import ColorBox from "./ComposantCours/ClassComponentLifeCycle/ColorBox";
import TodoList from "./ComposantCours/ClassComponentLifeCycle/TodoList";

function App() {
  /* const [count, setCount] = useState(0)

function somme(a,b){
  return a+b;
}
console.log(somme(1,2));

const sommeE =(a,b)=> a+b;

console.log(sommeE(1,2));
const array1 = [1, 4, 9, 16];
const res= array1.map(x=>x*2);
const array2 =array1.filter(x=>x>5);
console.log(array2);
console.log(res);
let sommeTab=0;
const ResultReduce= array1.reduce((acc,curr)=>acc+curr,sommeTab);
console.log(ResultReduce);

let obj= {name:'amine',age:25};
obj= {...obj,classe: "TWIN3"};
console.log(obj);
const [{color,background}, setColor] = useState({color:"red",background:"white"});
  return (
    <>
      <p>la couleur {color} et le background {background}</p>
      <input onChange={(e)=>setColor(current => ({...current,color:e.target.value}))}/>
    </>
  );*/
  return (
    <>
      <Counter />
      <ListManager
        initialItems={["React", "Angular", "VueJs"]}
        placeholder="Entrez un nouvel élément"
      />
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <ColorBox
          initialColor="#FF5733"
          colorOptions={["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33A1"]}
        />
        <ColorBox
          initialColor="#33FF57"
          colorOptions={["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33A1"]}
        />
      </div>
      <TodoList
        initialTasks={[
          {
            name: "Finir le projet React",
            priority: "Haute",
            completed: false,
          },
          { name: "Préparer le repas", priority: "Moyenne", completed: false },
          { name: "Aller courir", priority: "Basse", completed: false },
        ]}
      />
    </>
  );
}

export default App;
