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

const PopupForm = lazy(() => import('../PopupForm/PopupForm'));

export default function ProfilePage() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false); // Define isEditProfileOpen state
  const [userInfo, setUserInfo] = useState(() => {
    // Try to retrieve user info from local storage
    const storedUserInfo = localStorage.getItem('userInfo');
    return storedUserInfo ? JSON.parse(storedUserInfo) : {};
  }); // Define userInfo state
  // const [setProfilePhoto] = useState(''); // Define setProfilePhoto state
  // const [setCoverPhoto] = useState(''); // Define setCoverPhoto state


  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  // Define functions to update profile and cover photos
  const setProfilePhoto = (photo) => {
    console.log('Setting profile photo:', photo);
    // Update userInfo with the new profile photo
    // setUserInfo(({prevUserInfo}) => ({
    //   ...prevUserInfo,
    //   profilePhoto: photo,
    // }));
  };

  const openEditProfile = () => setIsEditProfileOpen(true);

  const setCoverPhoto = (photo) => {
    console.log('Setting cover photo:', photo);
    // Implement logic to set cover photo
  };

  const closeEditProfile = () => setIsEditProfileOpen(false);

  // const openEditProfile = () => {setIsEditProfileOpen(true);}

  const updateUserInfo = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };

  // const closeEditProfile = () => setIsEditProfileOpen(false);

  const handleEditProfileToggle = () => {
    setIsEditProfileOpen(!isEditProfileOpen);
  };

  const userId = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <section style={{ backgroundColor: 'rgb(151, 235, 207)' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4 profile-left-info">
            <MDBCard className="mb-4" style={{height:"50%"}}>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  src={userInfo.profilePhoto}
                  alt="avatar"
                  className="rounded-circle mx-auto"
                  style={{ width: '175px', height: '175px', display: 'flex', marginBottom: '15px', justifyContent: 'center', alignItems: 'center' }}
                  fluid />
                <p className="text-muted mb-1">{userInfo.profession}</p>
                <p className="text-muted mb-4">{userInfo.location}</p>
                <div className="d-flex justify-content-center mb-2">
                  {/* <MDBBtn>Edit Profile</MDBBtn> */}
                  {/* <button onClick={handleEditProfileToggle} className="edit-profile-button"> */}
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

                  {/* <MDBBtn outline className="ms-1">Message</MDBBtn> */}
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBBtn style={{marginBottom:"20px", width:"50%", marginLeft:"25%"}} className="edit-profile-button">
                View Group
              </MDBBtn>
            </MDBRow>

            {/* <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-2">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>*/}
          </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userInfo.name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userInfo.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userInfo.gender}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Date of Birth</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userInfo.dateOfBirth}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile No.</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userInfo.mobileNumber}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userInfo.location}</MDBCardText>
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
                      77
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
                      17
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

            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setProfilePhoto={setProfilePhoto}
            setCoverPhoto={setCoverPhoto}
            onClose={closeEditProfile}
            updateUserInfo={updateUserInfo}
            userId={userId}
          />
        </Suspense>
      )}
    </section>
  );
}
