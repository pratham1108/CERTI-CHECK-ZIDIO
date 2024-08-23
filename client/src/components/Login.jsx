import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import img from "../assets/logins.png"

const Login = () => {
  const [role, setRole] = useState()

  const [email, setEmail] = useState()
  const [pass, setPass] = useState()

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {email, pass}

    if (role === 'admin') {
      let result = await axios.post('http://localhost:3001/login', data);
      if(result.data !== undefined){
      // Redirect to admin dashboard
      navigate('/admin');}
    } else if (role === 'user') {
      let result = await axios.post('http://localhost:3001/login', data);
      if(result.data !== undefined){
      // Redirect to user homepage
      navigate('/');}
    } else {
      // Handle unknown role
      console.error('Unknown role:', role);
    }
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center   ">


      <img src={img} alt='login-img' className='shadow-md mt-3 mb-2' />

      <div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} className="w-full max-w-md p-6 bg-login rounded-lg mt-3 mb-2 ">
        <h2 className='text-center text-3xl font-bold text-white'>SIGN IN</h2>


        <div className="mt-6 grid grid-cols-1 gap-3">

          <div>
            <a href="#"
              className="w-full flex gap-3  items-center justify-center px-8 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <FcGoogle className='text-3xl mb-2' />
              <p className='font-bold '>LOG IN WITH GOOGLE</p>
            </a>
          </div>
        </div>
        <div className="relative mt-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>

        <form className="mt-4" onSubmit={handleSubmit}>
          {/* select box */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-white" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              className="w-full px-3 py-3 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" selected>Please Select</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-white" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-3  border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>
          <div className="mb-4 relative">
            <label className="block mb-2 text-sm font-bold text-white" htmlFor="password">
              Password
            </label>
            <input
              type='password'
              id="password"
              className="w-full px-3 py-3 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-300"
              placeholder="*************"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" name="remember" type="checkbox" value="1" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label for="remember_me" className="ml-2 block text-sm leading-5 text-white">Remember me</label>
            </div>

            <div className="text-sm leading-5">
              <a href="#"
                className="font-medium text-white hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-4 mb-2">
            <button
              type="submit"
              class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </div>


          <p className="text-center font-extrabold mt-2 ">Don't have an account? <Link className="text-red-500 hover:underline"
            to="/register">SIGNUP</Link></p>
        </form>
      </div>
    </div>



  );
};

export default Login;
