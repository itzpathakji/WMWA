import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const {user} = useSelector((state)=> state.users)
  
  return (
    <div>
      Hey , {user?.firstName} {user?.lastName} , Welcome To WMWA.
    </div>
  );
}

export default Home;