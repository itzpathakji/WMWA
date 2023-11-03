import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetLoggedInUser } from '../apicalls/users'

function ProtectedPage({children}) {
  const navigate = useNavigate()
  const [user, setuser] = useState(null)
   const getUser = async() => {
    try {
      const response = await GetLoggedInUser()
      if (response.success) {
        setuser(response.data)
      }
      else{
        throw new Error(response.message)
      }
    } catch (error) {
       message.error(error.message)
       localStorage.removeItem('token')
       navigate('/login')
    }
   }
  useEffect(()=>{
    if (localStorage.getItem("token")) {
      getUser();
    }else{
      navigate('/login');
    }
  },[]
                     
  )
  return (
    <div>
      <h1>
        protected Page
      </h1>
      <h1>
        Welcome {user?.firstName} {user?.lastName}
      </h1>
        {children}
    </div>
    
  )
}

export default ProtectedPage