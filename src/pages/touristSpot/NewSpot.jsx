import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, CircularProgress, styled } from '@mui/material';
import { postSpot } from "../../PostData";
import { LoadingButton } from "@mui/lab";
const NewSpot = ({ inputs, title }) => {
  const [submitProcess,setSubmitProcess]=useState(false);
  const [spotData, setspotData] = useState({
    spotName:"",
    location:"",
    description:"",
  }); 
  const [previewURL,setPreviewURL]=useState(null);
  const [spotPicture,setSpotPicture]=useState(null);
  const handleInputChange = (inputId, value) => {
    setspotData((prevData) => ({
      ...prevData,
      [inputId]: value,
    }));
  };
  const handleDes=(e)=>{
    const {name,value}=e.target;
    setspotData((prevData)=>({
      ...prevData,
      [name]:value,
    }))
  }
  const handlePicture=(e)=>{
    const file=e.target.files[0];
    if((Math.floor(file.size/1024))<500){
      setSpotPicture(file);
      if(file){
            const fileRead=new FileReader();
            fileRead.onloadend=()=>{
              setPreviewURL(fileRead.result);
            };
            fileRead.readAsDataURL(file);
          }else{
            setPreviewURL(null);
          }
    }
    else{
      alert("file size needs to be less then 500kb");
    }
  }
  const handleSendClick = async (e) => {
    e.preventDefault();
    
    const formData=new FormData();
    if(spotPicture){
      formData.append('spotPicture',spotPicture);
      if(!Object.values(spotData).some(value=>!value)){
        formData.append('newSpot',JSON.stringify(spotData))
      }else{
        return alert("enter all spot details");
      }
    }else{
      return alert("provide spot picture");
    }
    
    
    try {
      console.log(spotData);
      setSubmitProcess(true);
      const response = await postSpot(formData);
      console.log(response.data);
      if(response.status===201){
        alert(response.data);
        setSubmitProcess(false);
        window.location.reload();
      }
      else{
        alert(response.data);
      }
      
    } catch (error) {
      console.error("Error sending spot data:", error);
      setSubmitProcess(false);
    }
  };
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'none',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
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
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                  Upload file
                  <VisuallyHiddenInput type="file" onChange={handlePicture}/>
                </Button>
          {previewURL && (<>
          <div>
            <img src={previewURL} alt="priew" style={{width:"100%",minHeight:"220px",maxHeight:"220px",paddingTop:'10px'}}/>
          </div>
          </>)}
          </div>
          <div className="right">
            <form>

              <div className="formInput">
              
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
              <label>
                    Description:
                    <textarea
                        name="description"
                        placeholder="A stunning white marble mausoleum built by the Mughal emperor Shah Jahan."
                        value={spotData.description}
                        style={{width:'100%', marginRight:'35px'}}
                        onChange={handleDes}
                        required
                    />
                </label>

              <LoadingButton variant="none" sx={{width:'100%',height:'100%'}} loading={submitProcess} loadingIndicator={<>uploading new spot <CircularProgress sx={{color:'white'}}/></>} onClick={handleSendClick}>Send</LoadingButton>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default NewSpot;