import './App.css';
import {v4 as uuidv4 } from 'uuid';
import {React, useState } from 'react';
import { PlusCircleOutlined,DeleteOutlined } from '@ant-design/icons';
import { bounce } from 'react-animations';
import { keyframes } from '@emotion/css';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


// const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`;

const initialList = [
  {
    id:'a',
    name:'Exersize',
    description:'Do Exersize',
    
  }, 
 
];

const App = () => {


 const [list, setList] = useState(initialList);
 const [name, setName] = useState('');
 const [description, setDescription] = useState('');



 function handleName(event){
   setName(event.target.value);
 }
 function handleDescription(event){
  setDescription(event.target.value);
}
 function handleAdd(){
   if(name == "" || description == "")
   {
    alert("Please Enter the title and description!");
  }
   else
   {
    const newList = list.concat({ name,description, id:uuidv4() });
  
    setList(newList);
    setName('');
    setDescription('');
    }
   
 }

 function handleRemove(id)
 {
  const filterList = list.filter((item) =>item.id !== id);
  setList(filterList);
 }


  return (
     <div>
       <Fade left>
   <div className="text-center m-5">
    <div className="input-boxes">

         <div class="form-group">
         <div class="input-group mb-3">
         <span class="input-group-text" id="basic-addon1">Title</span>
         <input type="text" value={name} onChange={handleName} class="form-control" placeholder="Title" aria-describedby="helpId"></input>
         </div>

         <div class="input-group mb-3">
         <span class="input-group-text" id="basic-addon1">Description</span>
         <input type="text" value={description} onChange={handleDescription} class="form-control" placeholder="Description" aria-describedby="helpId"></input>
         </div>

        
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
        Add <PlusCircleOutlined className="addbutton" />
        </button>

       
        </div>
        </div>

      </div>
      </Fade>

     <div className="display-box">
       <Zoom>
        <ul className="nav justify-content-center d-block">
          {list.map((item) => (
              <li className="nav-item list-item-title text-center" key={item.id}>{item.name}
              <span className="delete-button "><button className="btn btn-danger" onClick={() => handleRemove(item.id)}>
               <DeleteOutlined className="deleteicon"/>
                </button></span>
              <span><li className="nav-item list-item-description" key={item.id}>{item.description} </li> </span>
               
              </li>
          ))}
        
        </ul>
      </Zoom>
     </div>
      </div>
  
  );
}
export default App;
