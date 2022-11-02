import logo from './logo.svg';
import './App.css'; 
import Items from './Components/Items';
import './Components/Items.css';
import { v4 as uuidv4 } from 'uuid';
import FormComponent from './Components/FormComponent';
import { useState } from 'react';



const Tit = () => <h1 style={{color:"red"}}>โปรมแกรมบัญชีรายรับ  รายจ่าย</h1>

function App() {
  const Arr_items = [
    {id:1,title: "รักษา", amount: 4000},
    {id:2,title: "รักษา", amount: 800},
    {id:3,title: "รักษา", amount: 90000}
  ]
  const [items,setItem] = useState(Arr_items)
  const onAddItem = (newItem) =>{
    setItem((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  
  return (
   <div>
      <Tit/>
      <p>บันทึกบ้อมูลบัญชีในแต่ละวัน</p>
      <FormComponent onAddItem={onAddItem}/>
      <ul className="item-list">
        {items.map((e)=>{
         
          return <Items {...e} key={e.id}/>
        })}
        
        
      </ul>
      
   </div>
  );
}

export default App;
