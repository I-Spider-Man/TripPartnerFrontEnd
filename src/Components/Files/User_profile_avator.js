import axios from "axios"
export const pictureUrl = (image) => {
  return `data:image/jpeg;base64,${image}`;
};
export const UserProfileAva=[
    'https://trip-partner-main.s3.amazonaws.com/bird-2-11.png'
    ,
    'https://trip-partner-main.s3.amazonaws.com/boar-2.png'
    ,
    'https://trip-partner-main.s3.amazonaws.com/cat-3.png'
    ,
    'https://trip-partner-main.s3.amazonaws.com/chipmunk-7.png'
    ,
    'https://trip-partner-main.s3.amazonaws.com/chipmunk-7.png'
    ,
     'https://trip-partner-main.s3.amazonaws.com/dolphin-4.png'
    ,
      'https://trip-partner-main.s3.amazonaws.com/fox-face-1-2.png'
    ,
      'https://trip-partner-main.s3.amazonaws.com/goat-1.png'
      ,
      'https://trip-partner-main.s3.amazonaws.com/mouse-9.png',
      'https://trip-partner-main.s3.amazonaws.com/ox-6.png',
      'https://trip-partner-main.s3.amazonaws.com/rabbit-8.png',
      'https://trip-partner-main.s3.amazonaws.com/tiger-10.png'
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
export const getUserDetailsById=async(value)=>{
  try{
    const fetchUser=await axios.get(`http://localhost:8080/User/${value}`);
    const picture=await axios.get(`http://localhost:8080/User/profile/${value}`);
    return {
      ...fetchUser.data,
      userProfile:pictureUrl(picture.data.userProfile)
    };
  }catch(error){
    console.log(error);
  }
}
export const getUserDetails=async(value)=>{
  try{
    const fetchUser=await axios.get(`http://localhost:8080/User/email/${value}`);
    const picture=await axios.get(`http://localhost:8080/User/profile/${fetchUser.data.userId}`);
    return {
      ...fetchUser.data,
      userProfile:pictureUrl(picture.data.userProfile)
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