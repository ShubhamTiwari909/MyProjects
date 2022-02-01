import React,{useState} from 'react';
import "./App.css"


const App = () => {
  const [box1, setBox1] = useState("");
  const [box2, setBox2] = useState("");
  const [box3, setBox3] = useState("");
  const [box4, setBox4] = useState("");
  const [box5, setBox5] = useState("");
  const [box6, setBox6] = useState("");
  const [box7, setBox7] = useState("");
  const [box8, setBox8] = useState("");
  const [box9, setBox9] = useState("");

  let result = "";

  if(box1===box2 && box1===box3 && box2===box3 && box1!=="" && box2!=="" && box3!==""){
    if(box1 === "x" && box2 === "x" && box3 === "x"){
      result += "X won the Game";
    }
    else{
      result += "O won the Game";
    }
  }
  else if(box1===box4 && box4===box7 && box1===box7 && box1!=="" && box4!=="" && box7!==""){
    if(box1 === "x" && box4 === "x" && box7 === "x"){
      result += "X won the Game";
    }
    else{
      result += "O won the Game";
    }
  }
  else if(box1===box5 && box5=== box9 && box1===box9 && box1!=="" && box5!=="" && box9!==""){
    if(box1 === "x" && box5 === "x" && box9 === "x"){
      result += "X won the Game";
    }
    else{
      result += "O won the Game";
    }
  }
  else if( box3===box6 && box6===box9 && box3===box9 && box3!=="" && box6!=="" && box9!==""){
    if(box3 === "x" && box6 === "x" && box9 === "x"){
      result += "X won the Game";
    }
    else{
      result += "O won the Game";
    }
  }
  else if(box7===box8 && box8===box9 && box7===box9 && box7!=="" && box8!=="" && box9!==""){
    if(box7 === "x" && box8 === "x" && box9 === "x"){
      result += "X won the Game";
    }
    else{
      result += "O won the Game";
    }
  }
  else if( box2===box5&& box5===box8 && box2===box8 && box2!=="" && box5!=="" && box8!==""){
    if(box2 === "x" && box5 === "x" && box8 === "x"){
      result += "X won the Game";
    }
    else{
      result += "O won the Game";
    }
  }
  else if( box4===box5 && box5===box6 && box4===box6 && box4!=="" && box5!=="" && box6!==""){
    if(box4 === "x" && box5 === "x" && box6 === "x"){
      result += "X won the Game";
    }
    else{
      result += "O won the Game";
    }
  }
  else if( box3===box5 && box5===box7 && box3===box7 && box3!=="" && box5!=="" && box7!==""){
    if(box3 === "x" && box5 === "x" && box7 === "x"){
      result += "X won the Game";
    }
    else{
      result += "O won the Game";
    }
  }
  else{
    result += "";
  }
    
  const change1 = () => {
    if(box1 === ""){
      setBox1("x");
    }
    else if(box1 === "x"){
      setBox1("o");
    }
    else{
      setBox1("");
    }
  }
  const change2 = () => {
    if(box2 === ""){
      setBox2("x");
    }
    else if(box2 === "x"){
      setBox2("o");
    }
    else{
      setBox2("");
    }
  }
  
  const change3 = () => {
    if(box3 === ""){
      setBox3("x");
    }
    else if(box3 === "x"){
      setBox3("o");
    }
    else{
      setBox3("");
    }
  }
  const change4 = () => {
    if(box4 === ""){
      setBox4("x");
    }
    else if(box4 === "x"){
      setBox4("o");
    }
    else{
      setBox4("");
    }
  }
  
  const change5 = () => {
    if(box5 === ""){
      setBox5("x");
    }
    else if(box5 === "x"){
      setBox5("o");
    }
    else{
      setBox5("");
    }
  }
  const change6 = () => {
    if(box6 === ""){
      setBox6("x");
    }
    else if(box6 === "x"){
      setBox6("o");
    }
    else{
      setBox6("");
    }
  }
  
  const change7 = () => {
    if(box7 === ""){
      setBox7("x");
    }
    else if(box7 === "x"){
      setBox7("o");
    }
    else{
      setBox7("");
    }
  }
  const change8 = () => {
    if(box8 === ""){
      setBox8("x");
    }
    else if(box8 === "x"){
      setBox8("o");
    }
    else{
      setBox8("");
    }
  }
  
  const change9 = () => {
    if(box9 === ""){
      setBox9("x");
    }
    else if(box9 === "x"){
      setBox9("o");
    }
    else{
      setBox9("");
    }
  }

  const restart = () => {
    setBox1("");

    setBox2("");

    setBox3("");

    setBox4("");

    setBox5("");

    setBox6("");

    setBox7("");

    setBox8("");

    setBox9("");

    result = "";
  }
  
  
  return (
    <div>
      <div className='grid grid-cols-3 place-items-center mx-auto mt-12 w-96 gap-y-12 gap-x-12'>
        <div className='box bg-purple-800 text-white rounded-md w-32 h-32 grid justify-center content-center hover:scale-110 hover:bg-violet-50 hover:text-purple-800' onClick={change1}>{box1}</div>
        <div className='box bg-purple-800 text-white rounded-md w-32 h-32 grid justify-center content-center hover:scale-110 hover:bg-violet-50 hover:text-purple-800' onClick={change2}>{box2}</div>
        <div className='box bg-purple-800 text-white rounded-md w-32 h-32 grid justify-center content-center hover:scale-110 hover:bg-violet-50 hover:text-purple-800' onClick={change3}>{box3}</div>
        <div className='box bg-purple-800 text-white rounded-md w-32 h-32 grid justify-center content-center hover:scale-110 hover:bg-violet-50 hover:text-purple-800' onClick={change4}>{box4}</div>
        <div className='box bg-purple-800 text-white rounded-md w-32 h-32 grid justify-center content-center hover:scale-110 hover:bg-violet-50 hover:text-purple-800' onClick={change5}>{box5}</div>
        <div className='box bg-purple-800 text-white rounded-md w-32 h-32 grid justify-center content-center hover:scale-110 hover:bg-violet-50 hover:text-purple-800' onClick={change6}>{box6}</div>
        <div className='box bg-purple-800 text-white rounded-md w-32 h-32 grid justify-center content-center hover:scale-110 hover:bg-violet-50 hover:text-purple-800' onClick={change7}>{box7}</div>
        <div className='box bg-purple-800 text-white rounded-md w-32 h-32 grid justify-center content-center hover:scale-110 hover:bg-violet-50 hover:text-purple-800' onClick={change8}>{box8}</div>
        <div className='box bg-purple-800 text-white rounded-md w-32 h-32 grid justify-center content-center hover:scale-110 hover:bg-violet-50 hover:text-purple-800' onClick={change9}>{box9}</div>
      </div>
      <div className='grid justify-center content-center mt-12'>
        <div className='flex space-x-36'>
          <h1 className='bg-indigo-800 text-white p-3 rounded-md'>Result : {result}</h1>
          <button className='bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded' onClick={restart}>Restart</button>
        </div>
       
      </div>
    </div>
  )
};

export default App
