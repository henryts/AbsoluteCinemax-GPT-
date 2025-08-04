import React from 'react';
import { useState,useRef } from 'react';
import Header from './Header';
import { validateSignIn } from '../utils/signinValidation';
import fi
const Login = () => {
 
let [toggle,setToggle]= useState(true);
const email = useRef(null);
const password =useRef(null);   

const handleformsubmit = ()=>{
    
const emailValue = email.current.value;
const passwordValue = password.current.value;
console.log("emal==>",emailValue);
console.log("password==>",passwordValue);



 const error = validateSignIn(emailValue,passwordValue);
 if (Object.keys(error).length > 0) {
      console.log("Validation Errors:", error);
    } else {
      console.log("Form submitted:", { email: emailValue, password: passwordValue });
    }

     if(toggle){






    }
    if(!toggle){





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
                type="email"
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