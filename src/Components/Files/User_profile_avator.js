import axios from "axios"
export const pictureUrl = (image) => {
  return `data:image/jpeg;base64,${image}`;
};

export const updateUserDetails=async(value)=>{
  try{
    const updateUser=await axios.put(`http://localhost:8080/User/updateUser/${value.userId}`,value);
    const picture=await axios.get(`http://localhost:8080/User/userProfile/${updateUser.data.userId}`);
    return {
      ...updateUser.data,
      userProfile:pictureUrl(picture.data)
    };
  }catch(error){
    console.log(error);
    return null;
  }
}
export const getAllFollowers=async(userId)=>{
  try{
    const response=await axios.get(`http://localhost:8080/User/getAllFollowers/${userId}`)
    return response.data;
  }catch(error){
    console.log(error);
    return [];
  }
}
export const getAllFollowing=async(userId)=>{
  try{
    const response=await axios.get(`http://localhost:8080/User/getAllFollowing/${userId}`)
    return response.data;
  }catch(error){
    console.log(error);
    return [];
  }
}
export const getAllBlocked=async(userId)=>{
  try{
    const response=await axios.get(`http://localhost:8080/User/getAllBlocked/${userId}`)
    return response.data;
  }catch(error){
    console.log(error);
    return [];
  }
}
export const getUserDetailsById=async(value)=>{
  try{
    const fetchUser=await axios.get(`http://localhost:8080/User/${value}`);
    const picture=await axios.get(`http://localhost:8080/User/userProfile/${value}`);
    return {
      ...fetchUser.data,
      userProfile:pictureUrl(picture.data)
    };
  }catch(error){
    console.log(error);
  }
}
export const getUserDetails=async(value)=>{
  try{
    const fetchUser=await axios.get(`http://localhost:8080/User/email/${value}`);
    const picture=await axios.get(`http://localhost:8080/User/userProfile/${fetchUser.data.userId}`);
    console.log(picture.data);
    return {
      ...fetchUser.data,
      userProfile:pictureUrl(picture.data)
    };
  }catch(error){
    console.log("error occured while fetching user data :", error);
  }
}
export const registerUser=async(value)=>{
  try{
    await axios.post("http://localhost:8080/User",value).then((response)=>{return (response.status)})
  }catch(error){
    console.log("error occured while registering user :", error)
  }
}
export const generateOtp=async(value)=>{
  console.log(" otp rendered")
  try{
    const response=await axios.get(`http://localhost:8080/User/otp/${value}`);
    const otp=response.data;
    console.log("otp obtained "+otp+ "response obtained "+response);
    return otp
  }catch(error){
    console.log("error while sending otp :",error)
  }
}
export const UploadUserProfile=async(userId,profile)=>{
  try{
    console.log(profile);
    const response=await axios.post(`http://localhost:8080/User/updateProfile/${userId}`,profile);
    return response.data
  }catch(error){
    console.log(error);
  }
}