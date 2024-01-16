import { Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

function TaskForm({ showTaskForm, setShowTaskForm, project }) {
  const [email, setEmail] = React.useState("");
  console.log(project);
  const formRef = React.useRef(null);
  const onFinish = (values) => {};

  const validateEmail = () => {
    const employeesInProject = project.members.filter(
      (member) => member.role === "employee"
    );
    const isEmailValid = employeesInProject.find(
      (employee) => employee.user.email === email
    );
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
