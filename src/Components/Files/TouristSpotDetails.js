import axios from "axios"

export const fetch_spot_data=async()=>{
    console.log('rendered' )
    try{
        const response=await axios.get("http://localhost:8080/Spots");
        return response.data;
    }catch(error){
        console.log("error while fetching spot data ",error);
        return []
    }
}

export const fetch_popularSpots=async()=>{
    try{
        const response=await axios.get("http://localhost:8080/PopularSpots");
        return response.data;
    }
    catch(error){
        console.log("error while fetching popular spots",error);
        return [];
    }
}

export const fetch_spots_by_id=async(id)=>{
    try{
        const response=await axios.get(`http://localhost:8080/Spots/${id}`);
        return response.data;
    }catch(error){
        console.log("error while fetching spot by id",error);
        return [];
    }
}