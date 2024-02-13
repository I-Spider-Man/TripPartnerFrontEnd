import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
export const pictureUrl = (image) => {
  return `data:image/jpeg;base64,${image}`;
};
export const fetchSpotBySpotName = async (spotName) => {
  try {
    console.log(spotName);
    const response = await axios.get(`http://localhost:8080/spot/${spotName}`);
    console.log(response);
    const picture = await axios.get(
      `http://localhost:8080/spot/pictureList/${response.data.spotId}`
    );
    const imageList = picture.data.map((pic) => {
      return pictureUrl(pic);
    });
    return {
      ...response.data,
      spotPictureList: imageList,
    };
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const fetch_spot_data = async () => {
  try {
    const response = await axios.get("http://localhost:8080/spots");
    const spotwithpicture = await Promise.all(
      response.data.map(async (spot) => {
        const picture = await axios.get(
          `http://localhost:8080/spot/pictureList/${spot.spotId}`
        );
        const imageList = picture.data.map((pic) => {
          return pictureUrl(pic);
        });
        return {
          ...spot,
          spotPictureList: imageList,
        };
      })
    );
    console.log(spotwithpicture);
    return spotwithpicture;
  } catch (error) {
    console.log("error while fetching spot data ", error);
    return [];
  }
};

export const fetch_popularSpots = async () => {
  try {
    const response = await axios.get("http://localhost:8080/PopularSpots");
    const spotwithpicture = await Promise.all(
      response.data.map(async (spot) => {
        const picture = await axios.get(
          `http://localhost:8080/spot/pictureList/${spot.spotId}`
        );
        const imageList = picture.data.map((pic) => {
          return pictureUrl(pic);
        });
        return {
          ...spot,
          spotPictureList: imageList,
        };
      })
    );

    return spotwithpicture;
  } catch (error) {
    console.log("error while fetching popular spots", error);
    return [];
  }
};

export const fetch_spots_by_id = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/spots/${id}`);
    const picture = await axios.get(
      `http://localhost:8080/spot/pictureList/${response.data.spotId}`
    );
    const imageList = picture.data.map((pic) => {
      return pictureUrl(pic);
    });
    return {
      ...response.data,
      spotPictureList: imageList,
    };
  } catch (error) {
    console.log("error while fetching spot by id", error);
    return [];
  }
};
