import React, { useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Divider from '../../components/Divider';
import { RegisterUser } from '../../apicalls/users';
import { useDispatch, useSelector } from 'react-redux';
import { SetButtonLoading } from '../../redux/loadersSlice';

function Register() {
  const navigate = useNavigate();
  const { buttonLoading } = useSelector((state) => state.loaders);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try{
      dispatch(SetButtonLoading(true));
      const response  = await RegisterUser(values);
      dispatch(SetButtonLoading(false));
      if(response.success)
      {
        message.success(response.message);
        navigate('/login')
      }
      else
      {
        throw new Error(response.message);
      }
    }catch(error){
      dispatch(SetButtonLoading(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className='grid grid-cols-2'>
      <div className='bg-primary h-screen flex flex-col justify-center items-center '>
        
        <h1 className="text-6xl text-white">PROJECT-MANAGER</h1>
        <span className='text-white mt-5'>One Place To Manage All Your Projects</span>
        
        </div>
      <div className='flex justify-center items-center'>
        <div className='w-[425px]'>
          <h1 className='text-2xl text-gray-700'>LET'S GET YOU STARTED</h1>
          <Divider />
          <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="First Name" name="firstName">
              <Input />
            </Form.Item>
            <Form.Item label="Last Name" name="lastName">
              <Input />
            </Form.Item>
          <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <Button type='primary' htmlType='submit' block loading={buttonLoading}>{buttonLoading ? "loading" : "register" }</Button>

            <div className='flex justify-center mt-5'>
              <span>
                Already have an account? <Link to='/login'>Login</Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}


export default Register;