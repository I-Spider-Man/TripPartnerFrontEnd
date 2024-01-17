import axios from "axios"

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


export const getUserDetails=async(value)=>{
  try{
    const fetchUser=await axios.get(`http://localhost:8080/User/email/${value}`);
    const userdata=fetchUser.data;
    return userdata;
  }catch(error){
    console.log("error occured while fetching user data :", error);
  }
}
export const registerUser=async(value)=>{
  try{
    await axios.post("http://localhost:8080/User",value).then((response)=>{return alert(response.status)})
  }catch(error){
    console.log("error occured while registering user :", error)
  }
}
export const generateOtp=async(value)=>{
  try{
    const response=await axios.get(`http://localhost:8080/User/otp/${value}`)
    .catch(error => {
      if (error.response.status === 400) {
        alert("Email already present");
        console.error('Error fetching data:', error);
        return false;
      }
    });
    const otp=response.data;
    return otp
  }catch(error){
    console.log("error while sending otp :",error)
  }
}