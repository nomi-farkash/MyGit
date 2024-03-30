import {useEffect, useState} from "react"
import ListItem from "../components/ListItem";
import { getAllClientByServer } from "../services/serverClients";
const List = () => {
    const [arr, setArr] = useState([]);
    const deleteFromArr=(id)=>{
        setArr(arr.filter(item=>item.id!=id))
    }
    useEffect(()=>{
        getAllClientByServer().then(res=>{
            setArr(res.data)
        }).catch(err=>{
            alert("its not work now")}) 
    },[])
    useEffect(()=>{console.log(arr)},[arr])
    
    return (<div><h1>list of clients</h1>
    <ul>{arr.map(item =><li key={item._id} ><ListItem onDelete={deleteFromArr} one={item}/></li>)}</ul>
      

    </div>  );
}
 
export default List;