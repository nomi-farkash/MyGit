import { useState,useEffect } from "react";
import {addClientToServer} from "../services/serverClients";
const AddClient = () => {
    let [emptyClient,setEmptyClient]=useState({ name:"", id:"", age:0, phone:"" })
    const change=(e)=>{
        setEmptyClient({...emptyClient,[e.target.name]:e.target.value})
    }
    const save=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(emptyClient))
        addClientToServer(emptyClient).then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
            alert("הוספה נכשלה")
        })
    }
    useEffect(()=>{console.log(emptyClient)},[emptyClient])
    return (<form onSubmit={save}>
        {/* <label>שם</label>
        <input type="text" name="name" onChange={change} /> */}
        <label>ת.ז</label>
         <input type="text" name="id" onChange={change} />
        {/*<label>גיל</label>
        <input type="text" name="age" onChange={change} />
        <label>טל</label>
        <input type="text" name="phone" onChange={change} /> */}
        <input type="submit"/> 
    </form>  );
}
 
export default AddClient;