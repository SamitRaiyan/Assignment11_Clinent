import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import{ getAuth} from 'firebase/auth'
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  useTitle("Login")

    const [error,setError]=useState('')
    const {signIn, googleSignIn, githubSignIn}=useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(location.pathname)
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const googleUser = result.user;
            console.log(googleUser)
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error)
        })
    }
    const handleGithubSignIn = () =>{
           
        githubSignIn()
        .then(result =>{
            const githubUser = result.user;
            console.log(githubUser)
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error)
        })
    }
    const handleLogin = event =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      
  
      signIn(email, password)
      .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
          navigate(from, {replace: true})
      })
      .catch(error => {
          console.log(error.message)
          setError(error.message)
      })}


  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center md:flex-col shadow-2xl  max-w-7xl md:w-[50%]  m-2">
          <div className=" w-full md:w-3/4">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
              <h1 className="font-semibold text-xl md:text-3xl text-gray-600 m-2">
               Please Login to your account
              </h1>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col items-center gap-5">
              <input
                type="email"
                name="email"
                placeholder="User email"
                className=" bg-gray-200 rounded-lg px-5 py-2 focus:border bg-blue-700 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className=" bg-gray-200 rounded-lg px-5 py-2 focus:border bg-blue-700 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />

              <input
                type="submit"
                value={"Sign in"}
                className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-yellow-800  font-medium m-2 mb-6 "
              />
              <p>{error}</p>
            </form>
          </div>
          <div className="h-[100%] w-full md:w-1/2 items-center flex justify-center">
            <div className="text-stone-700 text-base font-semibold text-center my-10 space-y-2 m-2 cursor-pointer">
              <div onClick={handleGoogleSignIn} className="flex items-center justify-between border-2 bg-blue-700 px-6 py-2 rounded-xl">
                <FcGoogle />
                <div className="m-1 text-lg">Login with Google</div>
              </div>
              <div onClick={handleGithubSignIn} className="flex items-center justify-between border-2 bg-blue-700 px-6 py-2 rounded-xl">
                <RxGithubLogo />
                <div className="m-1 text-lg">Loging with GitHub</div>
              </div>
              <div className=" py-2">
                <p>New here?</p>
                <div className="m-1 text-lg">
                    <Link to={'/register'}>
                  <button className="btn btn-warning ">Sign Up Now</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
