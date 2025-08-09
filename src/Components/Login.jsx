import React from 'react';
import { useState,useRef } from 'react';
import Header from './Header';
import { validateSignIn } from '../utils/signinValidation';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
 
let [toggle,setToggle]= useState(true);
let [errorMsg,setErrorMsg] = useState(null);
const navigate =useNavigate();
const email = useRef(null);
const password =useRef(null);  
const firstname = useRef(null); 
const dispatch = useDispatch();
const handleformsubmit = ()=>{
  const emailValue = email.current.value;
  const passwordValue = password.current.value;
  console.log("emal==>", emailValue);
  console.log("password==>", passwordValue);

  const error = validateSignIn(emailValue, passwordValue);
  if (Object.keys(error).length > 0) {
    console.log("Validation Errors:", error);
  } else {
    console.log("Form submitted:", {
      email: emailValue,
      password: passwordValue,
    });
  }

  if (toggle) {
    //signin
    console.log("hellooo in signin");

    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user after signin ====>", user);
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error==>", error);

        setErrorMsg(errorMessage);
      });
  }
  if (!toggle) {
    //sign up
    console.log("hellooo");

    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        const { uid, email, displayName } = user;
         updateProfile(auth.currentUser, {
         displayName: firstname,
      // photoURL: "https://example.com/jane-q-user/profile.jpg",
    });
        setToggle(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("eror===>", errorMessage + " " + errorCode);

        // ..
      });

   
  }
}


  return (
    <div className="min-h-screen bg-[#252525] flex flex-col ">
      <Header />
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-[#000000b3] p-8 sm:p-16 w-full max-w-md rounded-md mt-10 absolute">
          <h2 className="text-white text-3xl font-bold mb-6">{toggle? "Sign In" : "Sign Up"}</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            {!toggle?
            <div>
              <input
                ref = {firstname}
                type="text"
                placeholder="First Name"
                className="w-full p-3 rounded bg-[#333] text-white border-none focus:ring-2 focus:ring-red-600"
              />
            </div>: ""

            }
            <div>
              <input
                ref = {email}
                type="email"
                placeholder="Email or phone number"
                className="w-full p-3 rounded bg-[#333] text-white border-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <input
                ref ={password}
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded bg-[#333] text-white border-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#e50914] text-white font-semibold p-3 rounded hover:bg-[#f6121d] transition"
              onClick={handleformsubmit}
            >
            {toggle? "Sign In" : "Sign Up"}
            </button>
          </form>
           {errorMsg? <div className='text-red-600'>{errorMsg}</div>:""}

          <div className="flex justify-between mt-4 text-gray-400 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline">Need help?</a>
           
          </div>
           {toggle?
          <p className="mt-8 text-gray-400">
            New to Netflix?{' '}
            <a href="#" onClick={()=>setToggle(false)} className="text-white hover:underline">Sign up now</a>.
          </p>:
          <p className="mt-8 text-gray-400">
            Already Have an Account?{' '}
            <a href="#" onClick={()=>setToggle(true)} className="text-white hover:underline">Sign In</a>.
          </p>}

        </div>: 
      </div>
    </div>
  );
};

export default Login;