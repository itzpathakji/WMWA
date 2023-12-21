import React, { useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import Divider from '../../components/Divider';
import { LoginUser } from "../../apicalls/users";
import { useDispatch, useSelector } from 'react-redux';
import { SetButtonLoading } from '../../redux/loadersSlice';

function Login() {
  const { buttonLoading } = useSelector((state) => state.loaders);
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(SetButtonLoading(true))
      const response = await LoginUser(values);
      dispatch(SetButtonLoading(false))
      if (response.success) {
        localStorage.setItem("token", response.data);
        message.success(response.message);
        window.location.href = "/";
      }
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetButtonLoading(false))
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className='grid grid-cols-2'>
      <div className='bg-primary h-screen flex flex-col justify-center items-center'>
        <div>
          <h1 className="text-6xl text-white">PROJECT-MANAGER</h1>
          <span className='text-white mt-5'>One Place To Manage All Your Projects</span>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-[425px]'>
          <h1 className='text-2xl text-gray-700 '>LOGIN INTO YOUR ACCOUNT </h1>
          <Divider />
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Email" name="email"
            rules={[
              {
                required: true,
                message: "Please input your user-mail",
              },
            ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password",
              },
            ]}
            >
              <Input type="password" />
            </Form.Item>

            <Button type='primary' htmlType='submit' block loading={buttonLoading}>{buttonLoading ? "Loading" : "Login" }</Button>

            <div className='flex justify-center mt-5'>
              <span>
                Don't have an account? <Link to='/register'>Register</Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}


export default Login;