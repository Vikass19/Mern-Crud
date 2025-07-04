import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateUsers = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then(res => {
        setFormData(res.data);
      })
      .catch(err => {
        console.log('error fetching data : ', err);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 
    setTimeout(() => {
      axios.put(`http://localhost:3001/updateUser/${id}`, formData)
        .then(res => {
          console.log('user updated : ', res.data);
          setLoading(false);
          navigate('/'); 
        })
        .catch(err => {
          console.log('Error updating user : ', err);
          setLoading(false); 
        });
    }, 2000); 
  };

  return (
    <div className='flex justify-center items-center min-h-screen p-5 bg-gradient-to-br from-sky-100 to-sky-300'>
      <div className='w-full max-w-md bg-white rounded-xl shadow-lg p-8'>
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Update User</h1>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name='name'
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="age">Age</label>
              <input
                type="text"
                id="age"
                name='age'
                value={formData.age}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition duration-200"
            >
              Update
            </button>

            <Link
              to='/'
              className="block w-full text-center bg-gray-400 hover:bg-gray-500 text-white font-semibold py-3 rounded-md transition duration-200"
            >
              Cancel
            </Link>
          </form>
        )}
      </div>
    </div>
  )
}

export default UpdateUsers;
