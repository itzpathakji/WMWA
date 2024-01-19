import { Form, Input, Modal, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetLoading } from "../../../redux/loadersSlice";
import { CreateTask } from "../../../apicalls/tasks";

function TaskForm({ showTaskForm, setShowTaskForm, project,task }) {
  const [email, setEmail] = React.useState("");
  const { user } = useSelector((state) => state.users);
  
  const formRef = React.useRef(null);
  const dispatch = useDispatch();
  const onFinish =async (values) => {
    try {
      let response = null;
      dispatch(SetLoading(true));
      if(task){

      }
      else{
        const assignedToMember = project.members.find(
          (member) => member.user.email === email
        );
        const assignedToUserId = assignedToMember.user._id;

        const assignedBy = user._id;
        response = await CreateTask({
          ...values,
          project: project._id,
          assignedTo: assignedToUserId,
          assignedBy,
        })
      }

      if(response.success){
        message.success(response.message);
        setShowTaskForm(false);
      }
      dispatch(SetLoading(false));
    } catch (error) {
      dispatch(SetLoading(false))
      message.error(error.message)
    }
  };

  // const validateEmail = () => {
  //   const employeesInProject = project.members.filter(
  //     (member) => member.role === "employee"
  //   );
  //   const isEmailValid = employeesInProject.find(
  //     (employee) => employee.user.email === email
  //   );
  //   return isEmailValid ? true : false;
  // };
  const validateEmail = () => {
    console.log("project:", project); // Check if project is defined
    console.log("project.members:", project?.members); // Check if project.members is defined
  
    const employeesInProject = project?.members?.filter(
      (member) => member.role === "employee"
    );
    console.log("Entered Email:", email);
    console.log("Employees in Project:", employeesInProject);
    // Check if employeesInProject is not empty before proceeding
    console.log("employeesInProject:", employeesInProject);
  
    const isEmailValid = employeesInProject?.find(
      (employee) => employee.user.email.trim() === email.trim()
    );
  
    console.log("isEmailValid:", isEmailValid);
  
    return isEmailValid ? true : false;
  };
  
  
  return (
    <Modal
      title="ADD TASK"
      open={showTaskForm}
      onCancel={() => setShowTaskForm(false)}
      centered
      onOk={() => {
        formRef.current.submit();
      }}
    >
      <Form layout="vertical" ref={formRef} onFinish={onFinish}>
        <Form.Item label="Task Name" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Task Description" name="description">
          <TextArea />
        </Form.Item>

        <Form.Item label="Assign To" name="assignedTo">
          <Input
            placeholder="E-mail of Employee"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        {email && !validateEmail() && (
          <div className="bg-red-500 text-sm">
            <span className="text-white">
              Email is not Valid or Employee is not in the Project
            </span>
          </div>
        )}
      </Form>
    </Modal>
  );
}

export default TaskForm;
