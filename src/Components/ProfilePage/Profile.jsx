import React, { useState, useEffect, lazy, Suspense } from 'react';
// import PopupForm from '../PopupForm/PopupForm';
import './Profile.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  // MDBProgress,
  // MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useUser } from '../Auth/UserContext';

const PopupForm = lazy(() => import('../PopupForm/PopupForm'));

export default function ProfilePage() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false); // Define isEditProfileOpen state
  const {userDetails,organizerData,participantData}=useUser();
  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);
  const openEditProfile = () => setIsEditProfileOpen(true);
console.log(organizerData);
  const setCoverPhoto = (photo) => {
    console.log('Setting cover photo:', photo);
    // Implement logic to set cover photo
  };

  const closeEditProfile = () => setIsEditProfileOpen(false);

  // const openEditProfile = () => {setIsEditProfileOpen(true);}

  // const closeEditProfile = () => setIsEditProfileOpen(false);

  const handleEditProfileToggle = () => {
    setIsEditProfileOpen(!isEditProfileOpen);
  };

  // useEffect(() => {
  //   localStorage.setItem('userInfo', JSON.stringify(userInfo));
  // }, [userInfo]);
const handleGroup=()=>{
  if(organizerData){
    return alert("You are organizing");
  }else if(participantData){
    return alert("you are participating");
  }else{
    return alert("nothing");
  }
}
  return (
    <section style={{ backgroundColor: 'rgb(151, 235, 207)' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4 profile-left-info">
            <MDBCard className="mb-4" style={{height:"50%"}}>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={userDetails.userProfile}
                  alt="avatar"
                  className="rounded-circle mx-auto"
                  style={{ width: '175px', height: '175px', display: 'flex', marginBottom: '15px', justifyContent: 'center', alignItems: 'center' }}
                  fluid />
                
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn onClick={handleEditProfileToggle} className="edit-profile-button">
                    Edit Profile
                  </MDBBtn>
                  <MDBBtn style={{ marginLeft: '20px' }} >
                    Change Password
                  </MDBBtn>

                  {isPopupOpen && (
                    <Suspense fallback={<div>Loading...</div>}>
                      <PopupForm onClose={closePopup} />
                    </Suspense>
                  )}
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBBtn style={{marginBottom:"20px", width:"50%", marginLeft:"25%"}} className="edit-profile-button" onClick={()=>{handleGroup()}}>
                View Group
              </MDBBtn>
            </MDBRow>
          </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails.userName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails.userEmail}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails.gender}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Date of Birth</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails.dateOfBirth}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>About</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails.aboutUser}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <div>
                      <h2>Number of times you were a participant:</h2>
                    </div>
                    <div className='user-count text-muted'>
                      {organizerData?organizerData.organizedCount:"null"}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <div>
                      <h2>Number of times you were an organizer:</h2>
                    </div>
                    <div className='user-count text-muted'>
                      {participantData?participantData.participationCount:"null"}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {isEditProfileOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <PopupForm
          onClose={closeEditProfile}
          />
        </Suspense>
      )}
    </section>
  );
}
