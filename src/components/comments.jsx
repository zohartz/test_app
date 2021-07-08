import {React, useEffect, useState} from 'react'; 
import CommentsTb from './CommentsTb'

const Comments = (props) =>{
 const [data , setData ] = useState([]); 
 const [query , setQuery] = useState(""); 

 const  fetchData = async() =>{
     // const apiUrl = "https://jsonplaceholder.typicode.com/comments";
     try{
        const response = await fetch("https://jsonplaceholder.typicode.com/comments"); 
        const res = await response.json()
        setData(res)
     } catch(e){
         console.log(e)
     }
    // fetch(apiUrl)
    // .then((response) => response.json())
    // .then((data) => console.log('This is your data', data));

 }
 const search = (val) =>{
     const filtered = data.filter( row =>
         row.email.toString().toLowerCase().indexOf(val) >1
     )
     setQuery(val); 
     setData(data)

 }

 useEffect(()=>{
    fetchData();
 },[])

 return (
     <div>
         <input type="text" value= {query} onChange= {(e)=>{search(e.target.value)}}></input>
         <h1> </h1>
         <CommentsTb data = {data}/>
     </div>
 )

} 
export default Comments