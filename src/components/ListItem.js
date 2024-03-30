import { deleteClientFromServer } from "../services/serverClients";

const ListItem = ({onDelete,one}) => {
    return (<>
     <h3>{one.name}</h3> 
     <input type="button" value="delete" onClick={()=>{
        deleteClientFromServer(one.id).then(res=>{
            alert("מחיקה הצליחה")
            console.log(res.data);
            onDelete(one.id)
        }).catch(err=>
            {
                alert("מחיקה לא הצליחה")
                console.log(err);
            })
     }}/>

</>);}
 
export default ListItem;