import { useState } from 'react';
import './App.css';

function App() {
  const [totalPrice, settotalPrice] = useState(0);
  const [totalItems, settotalItrms] = useState(0);
  const [product1, setProduct1] = useState(150)
  const [product2, setProduct2] = useState(1500)
  const [product3, setProduct3] = useState(1000)

  


  return (
    <div className="App">
      <div>
        <h2>จำนวนสินค้าในตะกร้า {totalItems} รายการ</h2>
        <h2>ราคาสินค้าในตะกร้าทั้งหมด {totalPrice} บาท</h2>
      </div>
      <div>
       <img src='thaiban.jpg' alt='รองเท้าเตะ' width="150px"/><br></br>
        รองเท้าเตะ ราคา{product1} บาท
       
      </div>
      
      <button onClick={()=>{
        settotalItrms(totalItems + 1);
        settotalPrice(totalPrice+product1);
      }}>เพิ่มเข้าตะกร้า 🧺</button> 
      <button onClick={()=>{
        if (totalItems>0){
        settotalItrms(totalItems - 1);
        settotalPrice(totalPrice-product1);
        }
      }}>นำออกจากตะกร้า</button>

      <div>
       <img src='wjz6a8.jpg' alt='รองเท้าวิ่ง' width="150px"/><br></br>
        รองเท้าวิ่ง ราคา{product2} บาท
       
      </div>
      
      <button onClick={()=>{
        settotalItrms(totalItems + 1);
        settotalPrice(totalPrice+product2);
      }}>เพิ่มเข้าตะกร้า 🧺</button> 
      <button onClick={()=>{
        if (totalItems>0){
        settotalItrms(totalItems - 1);
        settotalPrice(totalPrice-product2);
        }
      }}>นำออกจากตะกร้า</button>

      <div>
       <img src='kito.jpg' alt='รองเท้าแฟชั่น' width="150px"/><br></br>
        รองเท้าแฟชั่น ราคา{product3} บาท
       
      </div>
      <button onClick={()=>{
        settotalItrms(totalItems + 1);
        settotalPrice(totalPrice+product3);
      }}>เพิ่มเข้าตะกร้า 🧺</button> 
      <button onClick={()=>{
        if (totalItems>0){
        settotalItrms(totalItems - 1);
        settotalPrice(totalPrice-product3);
        }
      }}>นำออกจากตะกร้า</button>
      

      
      </div>

      
  
    
   
  );
}


export default App;

