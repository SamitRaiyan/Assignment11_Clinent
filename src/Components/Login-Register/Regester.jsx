import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const Register = () => {
  useTitle("Register")
  const [error, setError] = useState("");
  

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { createUser, updateUser, setReload } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/login";

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const password = form.password.value;
    const photo = form.photo.value;

    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUser(name, photo).then(() => {
          setReload(Date.now());
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handlePassword = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPasswordError("password must be atleast 6 characters");
    }

     else {
      setPasswordError("");
    }
  };

  return (
    <div className="my-12 ">
      <h1 className="text-yellow-500 mb-5 text-4xl font-semibold text-center">
        Please Register here 
      </h1>

      <div className="w-2/5 h-full p-5 mx-auto border-2 bg-blue-600 border-solid rounded-lg bg-slate-200">
        <form onSubmit={handleRegister}  action="">
          <div className="flex justify-between items-center">
          <div><h1 className="text-xl font-semibold">Name :</h1>
          <input
            className="w-3/5 px-5 py-2 my-3 border rounded-lg bg-blue-100"
            name="name"
            type="text"
            placeholder="Enter Name"
            required
          />
          <br />
          <h1 className="text-xl font-semibold">Email :</h1>
          <input
            className="w-3/5 px-5 py-2 my-3 border rounded-lg bg-blue-100"
            name="email"
            type="email"
            placeholder="Enter Email"
            required
          />{" "}
          <br /></div>
          <div>
 
          <h1 className="text-xl font-semibold">Password :</h1>
          <input
            onChange={handlePassword}
            className="w-3/5 px-5 py-2 my-3 border rounded-lg bg-blue-100"
            name="password"
            type="password"
            id="password"
            value={password}
            placeholder="Enter password"
            required
          />{" "}
          <br />
          {passwordError && (
            <span className="text-blue-700">{passwordError}</span>
          )}
          
          <h1 className="text-xl font-semibold">Photo URL :</h1>
          <input
            className="w-3/5 px-5 py-2 my-3 border rounded-lg bg-blue-100"
            name="photo"
            type="text"
            placeholder="Enter Photo url"
            required
          />
          </div>
          </div>
          <div className=" flex justify-around">
            <button className="w-3/5 px-5 py-2 my-3 text-xl font-semibold bg-yellow-400 text-yellow-50 border rounded-lg ">
              Register
            </button>
          </div>
          <p>{error}</p>
        </form>
        <div>
          <h1 className="text-xl">
            Already Have an Account ?
            <Link to="/login">
              {" "}
              <span className="text-yellow-100">Login</span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
