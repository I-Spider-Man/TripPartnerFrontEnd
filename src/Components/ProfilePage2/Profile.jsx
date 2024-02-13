import React, { useState, useEffect, lazy, Suspense } from 'react';
import './Profile.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Result } from 'antd';
import ProfileBottom from './ProfileBottom';
import { getUserDetailsById } from '../Files/User_profile_avator';
import { LoadingButton } from '@mui/lab';
import { useUser } from '../Auth/UserContext';
import { userBlockingOrganizer, userBlockingUser, userFollowParticipant, userUnBlockingUser, userUnfollowParticipant } from '../Files/Other_DataBase';

export default function ProfilePage2() {
  const [userDetails1,setUserDetails]=useState(null);
  const {userId}=useParams();
  const [followUnfollowProcess,setFollowUnfollowProcess]=useState(false);
  const [blockedProcess,setBlockedProcess]=useState(false);
  const {userDetails,followersData,followingData,blockedData,updateUserBlockedList,updateUserFollowersList,updateUserFollowingList} =useUser();
  console.log(blockedData);
  const handleFollow=async()=>{
    
    try{
      setFollowUnfollowProcess(true);
      await userFollowParticipant(userDetails.userId,userId);
      updateUserFollowingList();
      // window.location.reload();
    }catch(error){
      console.log(error);
    }finally{
      setFollowUnfollowProcess(false);
    }
  }
  const handleUnfollow=async()=>{
    try{
      setFollowUnfollowProcess(true);
      await userUnfollowParticipant(userDetails.userId,userId);
      updateUserFollowingList();
      window.location.reload();
    }catch(error){
      console.log(error);
    }finally{
      setFollowUnfollowProcess(false);
    }
  }
  const handleBlocked=async()=>{
    try{
      setBlockedProcess(true);
      await userBlockingUser(userDetails.userId,userId);
      updateUserBlockedList();
    }catch(error){
      console.log(error);
    }finally{
      setBlockedProcess(false);
    }
  }
  const handleUnblocked=async()=>{
    try{
      setBlockedProcess(true);
      await userUnBlockingUser(userDetails.userId,userId);
      updateUserBlockedList();
    }catch(error){
      console.log(error);
    }finally{
      setBlockedProcess(false);
    }
  }
  useEffect(()=>{
    const fetchUser=async()=>{
      try{
        const response=await getUserDetailsById(userId);
      setUserDetails(response);
      }catch(error){
        console.log(error);
      }
    }
    fetchUser();
  },[userId]);
  const navigate=useNavigate();

  return (userDetails.userId != userId) ? (
    <section style={{ backgroundColor: 'rgb(151, 235, 207)', marginTop:'10vh',minHeight:'100%', width:'100%' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4 profile-left-info">
            <MDBCard className="mb-4" style={{height:"100%"}}>
              <MDBCardBody className="text-center">
                <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <img src={userDetails1?.userProfile} style={{height:'300px',width:'300px',borderRadius:'50%'}}/>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4" style={{height:'100%'}}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails1?.userName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails1?.userEmail}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails1?.gender}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Date of Birth</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails1?.dateOfBirth}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>About</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails1?.aboutUser}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <MDBRow style={{marginTop:'50px'}}>
                  <MDBCol sm="3">
                    
                    {(followersData.includes(userId) && !followingData.includes(userId)) &&  <LoadingButton variant='contained' loading={followUnfollowProcess} onClick={()=>{handleFollow()}}> Follow Back </LoadingButton>}
                    {(!followersData.includes(userId) && !followingData.includes(userId)) && <LoadingButton variant='contained' loading={followUnfollowProcess} onClick={()=>{handleFollow()}}>Follow</LoadingButton>}
                    {(followingData.includes(userId)) && <LoadingButton variant='contained' loading={followUnfollowProcess} onClick={()=>(handleUnfollow())}>Unfollow</LoadingButton>}
                  </MDBCol>
                  <MDBCol sm="3" >
                   
                  {(blockedData?.includes(userId)) ? (
  <LoadingButton
  variant='contained'
  loading={blockedProcess}
  loadingIndicator={<p>Blocking user...</p>}
  onClick={handleBlocked}
>
  Block
</LoadingButton>
) : (
  <LoadingButton
  variant='contained'
  loading={blockedProcess}
  loadingIndicator={<p>Unblocking user...</p>}
  onClick={handleUnblocked}
>
  Unblock
</LoadingButton>
)}


                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <div style={{marginTop:'10px', padding:'10px',height:'400px',width:'100%'}}>
           <ProfileBottom/>
        </div>
       
      </MDBContainer>
    </section>
  ):( <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={()=>navigate("/")}>Back Home</Button>}
  />);
}
