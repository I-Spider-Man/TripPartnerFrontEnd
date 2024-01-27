import { type } from "@testing-library/user-event/dist/type";
import axios from "axios"
export const fetchPicture=async(PictureName)=>{
    try{
        const response=await axios.get(`http://localhost:8080/Picture/${PictureName}`,{ responseType:'arraybuffer'});
        const blob=new Blob([response.data],{type:response.headers['Content-Type']});
        return (URL.createObjectURL(blob));
    }catch(error){
        return console.log(error);
    }
}
export const fetch_spot_data=async()=>{
    try{
        const response=await axios.get("http://localhost:8080/spots");
        const spotwithpicture=await Promise.all(
            response.data.map(async(spot)=>{
                const picture=await fetchPicture(spot.spotPicture);
                return {
                    ...spot,
                    spotPicture:picture
                };
            })
        )
        console.log(spotwithpicture)
        return spotwithpicture;
    }catch(error){
        console.log("error while fetching spot data ",error);
        return [];
    }
}

export const fetch_popularSpots=async()=>{
    try{
        const response=await axios.get("http://localhost:8080/PopularSpots");
        const spotwithpicture=await Promise.all(
            response.data.map(async(spot)=>{
                const picture=await fetchPicture(spot.spotPicture);
                return {
                    ...spot,
                    spotPicture:picture
                };
            })
        )

        return spotwithpicture;
    }
    catch(error){
        console.log("error while fetching popular spots",error);
        return [];
    }
}

export const fetch_spots_by_id=async(id)=>{
    try{
        const response=await axios.get(`http://localhost:8080/spots/${id}`);
        const picture=await fetchPicture(response.data.spotPicture);
        return {
            ...response.data,
            spotPicture:picture
        };
    }catch(error){
        console.log("error while fetching spot by id",error);
        return [];
    }
}