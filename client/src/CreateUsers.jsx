import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const CreateUsers = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setLoading(true); 
    setTimeout(() => {
      axios
        .post("https://mern-crud-ytj2.onrender.com/createUser", { name, email, age })
        .then((result) => {
          console.log(result);
          setLoading(false); 
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false); 
        });
    }, 2000); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-5 bg-gradient-to-br from-sky-100 to-sky-300">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Add User
            </h1>

            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                placeholder="Enter name..."
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-200"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Enter email..."
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-200"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="age"
              >
                Age
              </label>
              <input
                onChange={(e) => setAge(e.target.value)}
                type="text"
                id="age"
                placeholder="Enter age..."
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-200"
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-md transition duration-200"
            >
              Save
            </button>
            <Link
              to="/"
              className="block w-full text-center bg-gray-400 hover:bg-gray-500 text-white font-semibold py-3 rounded-md transition duration-200"
            >
              Cancel
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateUsers;
