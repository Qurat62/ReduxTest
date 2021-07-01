import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { addToList,deleteItem,editItem } from './redux/action';
import './App.css';
const ToDo = () => {

    const [input,setInput]=useState('');
    
    const list = useSelector((state) => state.reducer.list);
console.log("list",list);
    const dispatch=useDispatch();
    return (
        <div className="innerWrapper">
           <h2>List</h2> 

           <div>
            <input type='text' onChange={e=>setInput(e.target.value)} placeholder="Whats need to be done"/>
            <button onClick={()=>dispatch(addToList(input))}>Add</button>
            <div>
                <button>View All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
<div className="listItems">
    {

       list.map((ele,idx)=>{
            return(
           <div>
               <input type='checkbox'/><li key={idx} id={ele.id}>{ele.data}<button className="btnStyle"
                onClick={dispatch(editItem(ele.id))}>edit</button><button className="btnStyle" onClick={dispatch(deleteItem(ele.id))}>delete</button></li>
           </div> 
            )
        })
    }
</div>

           </div>
        </div>
    )
}

export default ToDo
