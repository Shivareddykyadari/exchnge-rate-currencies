import './App.css';
import { ReactHookFormDemo } from './ReactForm';
import { useEffect, useState,useRef } from 'react';
import axios from "axios";
import Bcharts from './Charts';
import date from 'date-and-time';



function App() {
  const [data1,setData]=useState([]);
  const [isAuth,setisAuth]=useState(false);  
  const now=useRef()
  const Api_key="Uv9RBbyQyyfvc7TobcoIm6bSmNDDAoVGEoASNH7k"; 
  

  

  useEffect(()=>{
    axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=${Api_key}&currencies=EUR%2CUSD%2CCAD%2CINR%2CJPY`)
    .then((res)=>res.data.data)
    .then((res)=>{
      let arr=[];
      for(let key in res)
      {
        let ob1={key:[key],value:res[key]}
            arr.push(ob1)
      }
      setData(arr);
      now.current=new Date()
      // console.log(data1)
    })  
    
  },[])
  return (
    <div className="App">
      <center>
      <h1>Exchange Rates Dashboard</h1>
      {!isAuth?<ReactHookFormDemo setisauth={setisAuth} auth={isAuth}/>:null}
      {isAuth?<div>       
        <center><h1>Last fetched results:{date.format(now.current, 'YYYY/MM/DD HH:mm:ss')}</h1></center>
        <table style={{border:"1px solid black"}}>
        <tr>
          <th>Currency</th>
          <th>Values for 1 USD</th>
        </tr>
        <tbody>
        {data1.map((ele,i)=>{
          return (<>
        <tr>
          <td>{ele.key}</td>
          <td>{ele.value}</td>
        </tr>
          </>)
        })}

        </tbody>
        
      </table>
      <Bcharts data={data1}/>

      </div>:<h1>please login</h1>}
      {isAuth?<button onClick={()=>{setisAuth(false)}}>Logout</button>:null}
      </center>
    </div>
  );
}

export default App;
