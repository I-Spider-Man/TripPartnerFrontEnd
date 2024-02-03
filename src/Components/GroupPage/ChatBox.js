import { Avatar, Button, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useUser } from '../Auth/UserContext';
import { getMessagesOfGroupId, sendingMessage } from '../Files/Other_DataBase';
import { LoadingButton } from '@mui/lab';
function ChatBox({groupId}) {
  const {userDetails}=useUser();
  const [message,setMessage]=useState('');
  const [messageProcess,setMessageProcess]=useState(false);
  const [messageForm,setmessageForm]=useState({
    userId:userDetails.userId
  })
  const [groupMessages,setgroupMessages]=useState([]);
  const handleMessage=()=>{
    setmessageForm({
      ...messageForm,
      content:message,
    })
  }
  useEffect(()=>{
    const getMessages=async()=>{
      try{
        const response=await getMessagesOfGroupId(groupId);
        setgroupMessages(response);
      }catch(error){
        console.log(error);
      }
    }
    getMessages();
  })

  console.log(groupMessages);
  const sendMessage=async()=>{
    try{
      setMessageProcess(true);
      await sendingMessage(groupId,messageForm);
      setMessage('');
      setMessageProcess(false);
    }catch(error){
      console.log(error);
      setMessageProcess(false);
    }
  }
  return (
    <div style={{width:"85vh",height:'70vh',borderRadius:'5px', backgroundColor:'white', display:'flex', flexDirection:'column',padding:'5px', justifyContent:'flex-end'}}>
      <div className='messages-box' style={{display:'flex',flexDirection:'column',justifyItems:'flex-end',overflow:'hidden', overflowY:'scroll'}}>
      {groupMessages.map((message, index) => (
  <div key={index} className={`message ${index === 0 ? 'first-message' : ''}`} style={{
    ...userDetails.userId == message.userId
      ? { display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'flex-start', padding: '5px' }
      : { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '5px' }
  }}>
    {index !== 0 && (
      <>
        <Avatar src={message.userData.userProfile} sx={{ height: '20px', width: '20px', margin: '4px' }} />
        <div style={{ backgroundColor: 'wheat', borderRadius: '5px', padding: '5px' }}>{message.content}</div>
      </>
    )}
  </div>
))}


      </div>
      <div className='message-text-area' style={{display:'flex',flexDirection:'row',alignItems:'center',padding:'5px'}}> 
      <Avatar src={userDetails.userProfile} sx={{width:25,height:25, marginRight: '5px'}}/>
        <textarea style={{ width: '100%', height: '30px', border: 'none',resize:'none', padding:'0px 4px 0px 4px' , marginRight:'10px'}}  placeholder='type your message here' value={message} onChange={(e)=>setMessage(e.target.value)} onBlur={handleMessage}/>
      <Button variant='outlined' sx={{}} onClick={sendMessage}><LoadingButton loading={messageProcess} loadingIndicator={<CircularProgress sx={{color:'blue'}}/>}><SendIcon sx={{color:'blue'}}/></LoadingButton></Button>
      </div>
    </div>
  )
}

export default ChatBox