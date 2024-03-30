import axios from "axios"
const baseUrl="http://localhost:8780/clients";
export const getAllClientByServer=()=>{
   return axios.get(baseUrl);
}

export const getAllClientById=(id)=>{
    return axios.get(`${baseUrl}/${id}`);
 }

 export const addClientToServer=(client)=>{
    return axios.post(baseUrl,client);
 }

 export const updateClientByServr=(client)=>{
    return axios.put(`${baseUrl}/${client.id}`,client);
 }
 export const deleteClientFromServer=(id)=>{
    return axios.delete(`${baseUrl}/${id}`);
 }