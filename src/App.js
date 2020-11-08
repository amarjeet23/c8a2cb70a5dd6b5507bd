import React,{useState,useEffect} from 'react'
import { generatePath, useHistory } from 'react-router-dom';
import "./App.css";
import axios from "axios";
import Data from './Data';

// const api_key ="us0BOzRFOekZwTvdTkxVyNLSJ6QYS8QVCq6qXZQy";
// https://api.nasa.gov/neo/rest/v1/neo/{{ENTER_ASTEROID_ID_HERE}}?api_key={{api_key}
const id="2021277";
export default function App() {
    const history = useHistory()
    const [inputvalue,setInputvalue] =useState('');
    const [data,setData] = useState([])
    const [val,setVal] = useState(0)
    const [loading,setloading] = useState(false)
    const random = ()=>{
        let number = 1;
        number=Math.floor(Math.random()*10)+1
        console.log("number",number)
        setVal(number)
        console.log(val)
        setInputvalue(val)

    }
   const submit=(e)=>{
       axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=us0BOzRFOekZwTvdTkxVyNLSJ6QYS8QVCq6qXZQy')
       .then(data=>{
           console.log(data.data.near_earth_objects)
           setData(data.data.near_earth_objects[val])
           setloading(true)
           console.log("hii",data)
        
       })
       .catch(err=>{
           console.log(err)
       })
   }
    return (
        <div className="App">

           
            <input type="text" placeholder="Enter Asteroid ID" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)}/>
            <button  onClick={()=>random()}>Random Asteroid Button</button><br/>
            <button  disabled={!inputvalue}onClick={(e)=>submit(e)}>Submit</button>

            {loading && <Data data={data}/>}
        </div>
    )
}
