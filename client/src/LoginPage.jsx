import React, { useState } from 'react';
import flower from './assets/flower.jpg';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const user = {
    email: 'vikas@gmail.com',
    password: '1234'
  }

  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      if (login.email === user.email && login.password === user.password) {
        console.log('login successful');
        navigate('/');
      } else {
        alert('email or password incorrect.');
        console.log('password or email incorrect.');
      }

    } catch (err) {
      console.log('error got while login : ', err);
    }
  }

  return (
    <div className='bg-black min-h-screen w-full flex justify-center items-center'>
      <div className='bg-white shadow-2xl m-10 p-20 gap-2 rounded-2xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2'>

        {/* Left Side - Login Form */}
        <div className='flex flex-col justify-center px-8 py-10 rounded-l-2xl'>
          <h1 className='text-blue-950 font-extrabold text-4xl mb-4 text-center'>Welcome Back</h1>
          <p className='text-blue-950 mb-8 text-center'>
            Today is a new day. It's your day. You shape it.
            Sign in to start managing your projects.
          </p>

          <form onSubmit={handleLogin} className='flex flex-col space-y-4'>
            <div>
              <label className='text-blue-950 font-semibold'>Email</label>
              <input
                type="email"
                value={login.email}
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                placeholder='example@email.com'
                className='border rounded px-4 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='text-blue-950 font-semibold'>Password</label>
              <input
                type="password"
                value={login.password}
                onChange={(e) => setLogin({ ...login, password: e.target.value })}
                placeholder='At least 8 characters'
                className='border rounded px-4 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <a href="#" className='text-sm text-blue-700 hover:underline'>Forgot Password?</a>
            <button type="submit" className='bg-blue-950 text-white rounded px-4 py-2 hover:bg-blue-900 transition'>Sign In</button>
            <hr />
            <button className='flex items-center justify-center gap-2 border rounded px-4 py-2'>
              <FcGoogle className='text-xl' />
              Sign in with Google
            </button>
            <button className='flex items-center justify-center gap-2 border rounded px-4 py-2'>
              <FaFacebook className='text-xl text-blue-600' />
              Sign in with Facebook
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className='hidden md:block'>
          <img
            src={flower}
            alt="flower img"
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

      </div>
    </div>
  );
}

export default LoginPage;
