import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { postSpot } from "../../PostData";
import ImageUploading from 'react-images-uploading';
const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [spotData, setspotData] = useState({
    spotName:"",
    location:"",
    description:"",
    spotPicture:"",
  });
  const [images, setImages] = useState([]);
  const maxNumber =1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    const formData=new FormData();
    formData.append('file',imageList[0]);
    console.log(formData);
    console.log(imageList, addUpdateIndex);

    setImages(imageList);
  };
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
 const formData=new FormData();
 formData.append('profile',file);

 console.log(formData,file);
  const handleSendClick = async (e) => {
    e.preventDefault(e);
 
    try {
      if(Object.values(spotData).some(value=>!value)){
        return alert("Add all details");
      }
      console.log(spotData);
      const response = await postSpot(spotData);
      alert("Tourist spot "+spotData.spotName+" added successfully.");
      window.location.reload();
    } catch (error) {
      console.error("Error sending spot data:", error);
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
           
          <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
        {({imageList,onImageUpload,onImageUpdate,onImageRemove,isDragging,dragProps,}) => (
          <div className="upload__image-wrapper">
            Image upload
            <Button variant="contained"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </Button>
            &nbsp;

            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
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