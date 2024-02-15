import axios from "axios";
import { BaseUrl } from "../components/config/BaseUrl";

export const fetchTouristSpotsData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/Admin/touristSpots`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  export const pictureUrl = (image) => {
    return `data:image/jpeg;base64,${image}`;
  };
  
  export const fetchSpotDataById = async (spotId) => {
    try {
      const response = await axios.get(`${BaseUrl}/spots/${spotId}`);
      const response1 = await axios.get(`${BaseUrl}/spot/pictureList/${spotId}`);
      console.log(response.data, response1);
      const imageUrlList = response1.data.map(image => {
        console.log(image);
        return pictureUrl(image);
      });
      console.log(imageUrlList);
      return {
        ...response.data,
        spotPictureList:imageUrlList,
      }
  
    } catch (error) {
      console.error(error);
      return null;
    }
  };