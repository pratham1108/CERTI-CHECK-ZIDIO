import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import img from "../assets/sign-up.jpg"

const Register = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', { name, email, pass })
      .then(result => {console.log(result)
        navigate('/login')
      })
      .catch(err => console.log(err))
  };

  return (


    <div className="container mx-auto flex flex-col md:flex-row justify-center">

      {/* Signup Form */}
      <div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} className="w-full max-w-md p-6 bg-login rounded-lg mt-2 mb-2 shadow-md">
        <h2 className='text-center text-2xl font-bold mb-4'>SIGN UP</h2>

        <div className="mt-6 grid grid-cols-1 gap-3">


          <div>
            <a href="#"
              className="w-full flex gap-3  items-center justify-center px-8 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <FcGoogle className='text-3xl mb-2' />
              <p className='font-bold mt-2'>LOG IN WITH GOOGLE</p>
            </a>
          </div>
        </div>

        <div className="relative mt-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm mt-4 mb-2">
            <span className="px-2 py-0 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
              Username
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
            />

          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>
          <div className="mb-4 relative">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type='password'
              id="password"
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />

          </div>
          <div className="flex gap-4 justify-center mt-4">
            <button
              type="submit"
              class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Register
            </button>

          </div>
          <p className="text-center font-extrabold mt-2 ">Don't have an account? <Link className="text-red-500 hover:underline"
            to="/login">SIGN IN</Link></p>
        </form>
      </div >
      <img src={img} alt='login-img' className='shadow-md mt-2 mb-2' />
    </div>




  );
};

export default Register;
