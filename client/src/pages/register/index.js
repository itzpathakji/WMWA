import React from 'react';
import { Form, Input, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';

function Register() {

  const onFinish = (values) => {
    console.log("success:",values);
  }

  return (
    <div className='grid grid-cols-2'>
      <div className='bg-primary h-screen flex flex-col justify-center items-center'>
        
        <h1 className="text-6xl text-white">PROJECT-MANAGER</h1>
        <span className='text-white mt-5'>One Place To Manage All Your Projects</span>
        
        </div>
      <div className='flex justify-center items-center'>
        <div className='w-[425px]'>
          <h1 className='text-2xl text-gray-700'>LET'S GET YOU STARTED</h1>
          <Divider />
          <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="First Name" name="firstname">
              <Input />
            </Form.Item>
            <Form.Item label="Last Name" name="lastname">
              <Input />
            </Form.Item>
          <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <Button type='primary' htmlType='submit' block>Register</Button>

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