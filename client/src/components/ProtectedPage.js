import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetLoggedInUser } from '../apicalls/users'
import { SetUser } from '../redux/usersSlice';
import { useSelector , useDispatch} from 'react-redux';
import { SetLoading } from '../redux/loadersSlice';

function ProtectedPage({ children }) {
const navigate = useNavigate();
const dispatch = useDispatch();
const {user} = useSelector((state) => state.users);
const getUser = async () => { 
    try {
      dispatch(SetLoading(true))
      const response = await GetLoggedInUser()
      dispatch(SetLoading(false))
      if (response.success) {
          dispatch(SetUser(response.data));
      }
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoading(false))
      message.error(error.message);
      localStorage.removeItem('token');
      navigate('/login');
    }
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    } else {
      navigate('/login');
    }
  }, []);

  return (
    user && <div>
      <div className="flex justify-between items-center bg-primary text-white px-5 py-4 ">
        <h1 className='text-2xl cursor-pointer' onClick={() => navigate("/")}>

          WMWA</h1>
        <div className='flex items-center bg-white px-5 py-2 rounded'>
          <span className=' text-primary cursor-pointer underline' onClick={() => {
            localStorage.removeItem("token");
            navigate("login");
          }}>

            {user?.firstName}</span>
          <i className="ri-notification-2-line text-white mx-2 bg-gray-500 p-2 rounded-full"></i>
          <i className="ri-logout-box-line ml-10 text-primary"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          ></i>
        </div>

      </div>
      <div className="px-5 py-3">

        {children}

      </div>

    </div>

  );
}

export default ProtectedPage
