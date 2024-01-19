import axios from "axios";

export const fetch_Event_Details = async() => {
  try{
    const response=await axios.get("http://localhost:8080/activeEvents");
    return response.data;
  }catch(error){
    console.log(error);
    return [];
  }
}

export const fetch_Event_By_id=async(id)=>{
  try{
    const response=await axios.get(`http://localhost:8080/activeEvents/${id}`)
    return response.data;
  }catch(error){
    console.error(error);
  }
}

export const fetch_popularEvents=async()=>{
  try{
    const response=await axios.get(`http://localhost:8080/PopularEvents`)
    return response.data;
  }catch(error){
    console.error(error);
  }
}