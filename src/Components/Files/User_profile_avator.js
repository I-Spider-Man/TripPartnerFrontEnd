import axios from "axios"
import { fetchPicture } from "./Event_Details";

export const UserProfileAva=[
    'https://trip-partner.s3.eu-north-1.amazonaws.com/user-icons/Open+Peeps+-+Bust+(1).png'
    ,
    'https://trip-partner.s3.eu-north-1.amazonaws.com/user-icons/Open+Peeps+-+Bust+(2).png'
    ,
    'https://trip-partner.s3.eu-north-1.amazonaws.com/user-icons/Open+Peeps+-+Bust+(3).png'
    ,
    'https://trip-partner.s3.eu-north-1.amazonaws.com/user-icons/Open+Peeps+-+Bust+(4).png'
    ,
    'https://trip-partner.s3.eu-north-1.amazonaws.com/user-icons/Open+Peeps+-+Bust+(5).png'
    ,
     'https://trip-partner.s3.eu-north-1.amazonaws.com/user-icons/Open+Peeps+-+Bust+(6).png'
    ,
      'https://trip-partner.s3.eu-north-1.amazonaws.com/user-icons/Open+Peeps+-+Bust+(7).png'
    ,
      'https://trip-partner.s3.eu-north-1.amazonaws.com/user-icons/Open+Peeps+-+Bust+(8).png'
]

export const updateUserDetails=async(value)=>{
  try{
    const updateUser=await axios.put(`http://localhost:8080/User/updateUser/${value.userId}`,value);
    return updateUser.data;
  }catch(error){
    console.log(error);
    return null;
  }
}

export const getUserDetails=async(value)=>{
  try{
    const fetchUser=await axios.get(`http://localhost:8080/User/email/${value}`);
    if(fetchUser.data.userProfile.startsWith("http")){
      return fetchUser.data;
    }
    const picture=await fetchPicture(fetchUser.data.userProfile);
    return {
      ...fetchUser.data,
      userProfile:picture
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