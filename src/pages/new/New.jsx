import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [spotData, setspotData] = useState({
    spotName:"",
    location:"",
    description:"",
  });
 
  const handleInputChange = (inputId, value) => {
    setspotData((prevData) => ({
      ...prevData,
      [inputId]: value,
    }));
  };
 
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    handleInputChange("image", e.target.files[0]);
  };
 
  const handleSendClick = async (e) => {
    e.preventDefault(e);
 
    try {
      if(Object.values(spotData).some(value=>!value)){
        return alert("Add all details");
      }
      console.log(spotData);
      const response = await axios.post("http://localhost:8080/Admin/touristSpot", spotData);
      const newSpot = response.data;
      setFile("");
      setspotData({
        image: null,
      });
      console.log("User Data sent successfully:", newSpot);
      alert("Tourist spot "+spotData.spotName+" added successfully.");
      window.location.reload();
    } catch (error) {
      console.error("Error sending user data:", error);
    }
  };
 
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://trip-partner.s3.eu-north-1.amazonaws.com/login_signUp.svg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>

              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  required
                />
              </div>
 
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.header}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={(e) => handleInputChange(input.label, e.target.value)}
                    required
                  />
                </div>
              ))}

              <Button variant="contained" onClick={handleSendClick}>Send</Button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default New;