
import { useEffect, useState } from 'react';
import Cart from '../../Components/Cart/Cart'

import './Home.css'
const Home = () => {
    const [allActors,setallActors]=useState([])
    const [selectActor, setSelectActor]=useState([])
    const [remaining,setRemaning]=useState([])
    const [totalCost, setTotalCost]=useState([])
    useEffect(()=>{
       
      fetch('./data.json')
      .then(res=>res.json())
      .then(data=>setallActors(data))
      .catch((error) => console.error('Error fetching data:', error));
    },[])
 const handelSelect =(actor)=>{
//  console.log(actor)
const isExist = selectActor.find(item=>item.id==actor.id)

let count =actor.salary;
if(isExist){
  return alert('already book this card')
}else{
selectActor.forEach(item=>{
  count = count + item.salary;
})
// console.log(count)
const totalRemaining =20000-count;
setTotalCost(count)
if(count>20000){
  return alert('tk ses ar hoba na')
}
setRemaning(totalRemaining)
  setSelectActor([...selectActor,actor])
}
    

 }

    console.log(allActors)
    return (
        <div className="container">
            <div className="home-container">
                <div className="card-container"> 
              {
                allActors.map((actor)=>(
                    <div className='card' key={actor.id}>
                    <div className='card-img'>
                        <img className='poto' src={actor.image} alt="" />
                    </div>
                    <div className='name'>
                    <h2 >{actor.name}</h2>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio ratione fuga.</small></p>
                    </div>
                       <div className='info name'>
                             <p>Salary :${actor.salary}</p>
                               <p>role: {actor.role}</p>
                        </div>     
                          <button onClick={()=>handelSelect(actor)} className='card-btn'>Select</button>
                </div>
                ))
              }
                </div>
               
                <div className='cart name'>
                            <Cart selectActor={selectActor} remaining={remaining} totalCost={totalCost}></Cart>
                 </div>
                
            </div>
           
        </div>
    );
};

export default Home;