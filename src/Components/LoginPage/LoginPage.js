import React, { useState } from 'react';
import './LoginPage.css';
import UserProfileAva from '../Files/User_profile_avator';
function LoginPage({ onClose, onReturn }) {
  const [otpInput, setOtpInput] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isforgotPassword,setForgotPassword]=useState(false);
  const [userPassword,setUserPassword]=useState("");
  const [userPasswordC,setUserPasswordC]=useState("");
  const [userEmail,setUserEmail]=useState("");
  const [userotp,setUserOtp]=useState("");
  const [generateOtp, setGenerateOtp]=useState(false);
  const showForgotPassword=()=>{
    setForgotPassword(!isforgotPassword);
  }
  const passwordRegx = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/ ;
  const isPasswordValid=passwordRegx.test(userPassword);
  const closePopup = () => {
    setPopupVisible(false);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * UserProfileAva.length);
    onReturn(UserProfileAva[randomIndex]);
    onClose();
  }
  const getOtp=()=>{
    setGenerateOtp(true);
  }
  const toggleOTPinput = () =>{
    setOtpInput(!otpInput);
  };
  const popupStyle = {
    display: 'block',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  };
  return (
    <div className='login-page-overlay' onClick={onClose}>
      <div className="login-signup-container" onClick={(e)=> e.stopPropagation()}>
    <input type="checkbox" id="chk" aria-hidden="true" />
    <div className="login">
      {!isforgotPassword ? (<><form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="chk" aria-hidden="true">Log in</label>
        <input
          className="login-input"
          type="email"
          name="email"
          placeholder="Email"
          // required
        />
        <input className="login-input"
        type="password"
        name="pswd"
        placeholder="Password"
        // required
        />
        <span className='forgot-password' onClick={()=>showForgotPassword()}>Forgot password?</span>
        <button type='submit' >Log in</button>
      </form>
      </>) : (<><form className='forgot-form'>
      <label htmlFor="chk" aria-hidden="true">Forgot password</label>
        <input
          className="login-input"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input className="login-input"
        type="otp"
        name="otp"
        placeholder="Enter OTP"
        required
        />
        <span className='back-to-sign-in' onClick={()=>showForgotPassword()}>Back to sign in</span>
        {generateOtp ? (
          <><button onClick={()=>{alert("check your email for new password");showForgotPassword()}} >Generate Password</button>
          </>
        ) : (<><button onClick={getOtp}>Get Otp</button>
        </>)}
        
      </form>
      </>)}
    </div>

    <div className="register">
      <form className="reg-form" >
        <label htmlFor="chk" aria-hidden="true">Register</label>
        <input className="reg-input"
        type="text"
        // value={userName}
        name="userName"
        placeholder="Username"
        required
        // onChange={(e)=>setUserName(e.target.value)}
        />
        <div className='reg' style={{ display: "flex", flexDirection: "row" }}>
         {otpInput ? (<><input
      className="reg-input"
      type="text"
      name="otpreg"
      placeholder="Enter OTP"
      pattern="\d{6}"
      value={userotp}
      onChange={(e)=>setUserOtp(e.target.value)}
      style={{ paddingRight: '40px' }}
      required
    />
          <button className='verify-button'
            style={{ position: 'absolute',
            right: '5px',
            top: '50%',
            transform: 'translateY(-204%) translateX(-151%)', tabSize: "30px" }} 
            onClick={toggleOTPinput}
          >
            Check Email
          </button></>
            
           ) : (<><input
            className="reg-input"
            type="email"
            name="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            style={{ paddingRight: '40px' }}
            required
          />
          <button className='verify-button'
          style={{ position: 'absolute',
          right: '5px',
          top: '50%',
          transform: 'translateY(-204%) translateX(-151%)', tabSize: "30px" }} 
          // onClick={validateEmail}
          disabled={!userEmail.trim()}
        >
          Get otp
        </button></>

           )}

        </div>
        <input className="reg-input" type="password" value={userPassword} name="pswd" placeholder="Password" required onChange={(e)=>setUserPassword(e.target.value)}/>
        <div className='pass-detail-container'>
        {isPasswordValid ? (<><svg className='pass-detail' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16" style={{color:'green'}}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
</svg></>):<><svg className='pass-detail' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></>}
      <div className='tooltip'>
        Password must contain at least one uppercase letter, one numeric digit, and one special character.
      </div>
    </div>
        <input className="reg-input" type="password" value={userPasswordC} name="cpswd" placeholder="Confirm Password" required onChange={(e)=>setUserPasswordC(e.target.value)}/>
        <button >Register</button>
      </form>
    </div>
    </div>
        {isPopupVisible && (
          <div style={popupStyle}>
            {/* <p>{errorMessage}</p> */}
            <button onClick={closePopup}>Close</button>
          </div>
        )}
      </div>
  );
}

export default LoginPage;