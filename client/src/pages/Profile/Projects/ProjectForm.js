import { Form,Input, Modal, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { SetLoading } from "../../../redux/loadersSlice";
import { CreateProject } from "../../../apicalls/projects";

function ProjectForm({
    show,
    setShow,
    reloadData,
    project
}) {
    const formRef = React.useRef(null);
    const {user} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const onFinish = async(values) => {
        try {

            dispatch(SetLoading(true));
           if(project) {
            //update Project

           }
           else{
              // create Project
              values.owner = user._id;
              values.members =[{
                user: user._id,
                role: "owner",
              },];
              const response = await CreateProject(values);
              if( response.success){
                message.success(response.success);
                reloadData();
                setShow(false);
               
              }
              else{
                throw new Error(response.error);
              }
              dispatch(SetLoading(false));
           }
        } catch (error) {
            dispatch(SetLoading(false));
        }
    }
    return (
        <Modal title="Add Project" 
        open={show} 
        onCancel={() => setShow(false)} 
        centered 
        width={700} 
        onOk={() => formRef.current.submit() }
        okText = "Save"
        >
           <Form layout = "vertical" ref={formRef} onFinish={onFinish}>
            <Form.Item label="Project Name" name = "name" >
               <Input placeholder='Project Name'/>
            </Form.Item>
            <Form.Item label="Project Discription" name = "discription" >
               <TextArea placeholder='Project Discription'/>
            </Form.Item>
           </Form>
        </Modal>
    )
}

export default ProjectForm