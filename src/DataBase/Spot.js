import axios from "axios";

export const fetchTouristSpotsData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/Admin/touristSpots");
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
      const response = await axios.get(`http://localhost:8080/spots/${spotId}`);
      const response1 = await axios.get(`http://localhost:8080/spot/pictureList/${spotId}`);
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