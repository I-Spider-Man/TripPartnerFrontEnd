import axios from "axios";

export const fetchUserData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/Admin/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};


export const fetchEventsData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/Admin/events");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
};
  
export const fetchActiveEventsData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/Admin/ActiveEvents");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
};

export const fetchInavtiveEventsData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/Admin/inActiveEvents");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
};

export const fetchGroupsData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/Admin/groups");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
};

export const fetchActiveGroupsData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/Admin/ActiveGroups");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
};

export const fetchInActiveGroupsData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/Admin/InActiveGroups");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
};

export const fetchOrganziersData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/Admin/InActiveGroups");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
};

export const fetchTouristSpotsData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/Admin/touristSpots");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};