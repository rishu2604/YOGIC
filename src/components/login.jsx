import React from 'react';
// import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button';
import { GoogleSignInAPI } from "../api/AuthAPI";
import { toast } from "react-toastify";
import "../SCSS/login.scss";


export default function LoginComponent(){
    

    let navigate = useNavigate();
    // const [credentials, setCredentials] = useState({});
    // const login = async () => {
    //     try {
    //         let res = await LoginAPI(credentials.email, credentials.password);
    //         toast.success("Signed In to YOGIC!");
    //         localStorage.setItem("userEmail", res.user.email);
    //         navigate("/home");
    //     } catch (err) {
    //         console.log(err);
    //         toast.error("Please Check your Credentials");
    //     }
    // };

    const googleSignIn = async () => {
        let response = await GoogleSignInAPI();
        toast.success("Signed In to YOGIC!");
    
        await navigate("/homepage");
    };

    return(
        <div className="login">
            {/* <h1>CPG-3</h1> */}
            <div className="login-inner">
                <h1>YOGIC</h1>
                <br />
                <h2>A Novel Deep Learning Approach to Quantify the YOGA-Induced Cognitive Changes</h2>
                {/* <h1 className="heading">Sign In</h1>

                <div className="auth-inputs">
                    <input 
                        onChange={(event)=>
                            setCredentials({...credentials, email: event.target.value})
                        }
                        type="email" 
                        className='common-input'
                        placeholder='Enter Your Email'
                    />
                    <input 
                        onChange={(event)=>
                            setCredentials({...credentials, password: event.target.value})
                        }
                        type="password"
                        className='common-input'
                        placeholder='Enter Your Password'
                    />
                </div> */}
                {/* <button onClick={login} className='login-btn'>Sign In</button>
                <hr className="hr-text" data-content="or" /> */}
                <br />
                <h3>YOGIC is a cool new tool that uses smart technology to measure how yoga affects your brain. It looks at your brain waves in real-time while you do yoga to see if it helps in increasing concentration or reduces stress. This research could help us understand more about how yoga affects our minds. YOGIC might even lead to personalized yoga plans designed just for you, based on how your brain responds.</h3>
                <h3> Give YOGIC a try to explore how yoga can boost your brain and reduce stress!</h3>
                <br />
                <div className="google-btn-container">
                <GoogleButton className='google-btn' onClick={googleSignIn} />
                {/* <p className="go-to-signup">
                    New to YOGIC?{" "}
                    <span className="join-now" onClick={() => navigate("/register")}>
                        Register now
                    </span>
                </p> */}
                </div>
            </div>
        </div>
    );
}