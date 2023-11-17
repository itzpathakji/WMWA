import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  
  const { user } = useSelector((state) => state.users);

  return (
    <div>
      Hii {user?.firstName} {user?.lastName} , Welcome to Project Management Web-App.
    </div>
  )
}

export default Home;