import { Form, Modal } from 'antd'
import React from 'react'

function MemberForm({
    showMemberForm,
    setShowMemberForm,
    reloadData
}) {
    
    const formRef = React.useRef(null);
    const onFinish = (values) => {
        console.log(values);
    };
    return(
    <Modal
        title="Add Member"
        open={showMemberForm}
        onCancel={() => setShowMemberForm(false)}
        centered
        okText="Add"
        onOk={() => {
            formRef.current.submit();
        }}
    >
        <Form layout='vertical'
            ref={formRef}
            onFinish={onFinish}>

            <Form.Item
                className=''
                label='Email'
                name="email">
                <input placeholder='Email' />
            </Form.Item>

            <Form.Item
                label='Role'
                name="role">
                <select name="" id="" >
                    <option value="admin" >Admin</option>
                    <option value="employee" > Employee</option>
                </select>

            </Form.Item>
        </Form>
    </Modal>
    )
    
}

export default MemberForm