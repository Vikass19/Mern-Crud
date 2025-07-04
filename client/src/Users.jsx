import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getUsers");
      setUsers(response.data);
    } catch (error) {
      console.log("error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    setLoading(true); 
    setTimeout(async () => {
      try {
        await axios.delete(`http://localhost:3001/deleteUser/${id}`);
        fetchUsers();
        setLoading(false);
      } catch (err) {
        console.log("error in deleting user:", err);
        setLoading(false); 
      }
    }, 2000); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-green-300 p-5">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <Link
          to="/create"
          className="px-4 py-2 bg-green-400 rounded text-white font-semibold hover:bg-green-500 shadow-lg"
        >
          Add +
        </Link>
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          User List
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : (
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden ">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Age</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b hover:bg-green-50">
                  <td className="py-3 px-6">{user.name}</td>
                  <td className="py-3 px-6">{user.email}</td>
                  <td className="py-3 px-6">{user.age}</td>
                  <td className="py-3 px-6 text-center">
                    <Link
                      to={`/update/${user._id}`}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-3 py-1 rounded mr-2 transition duration-200 cursor-pointer"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded mr-2 transition duration-200 cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Users;
