import { Button, Table, message } from "antd";
import React from "react";
import ProjectForm from "./ProjectForm";
import { useDispatch, useSelector } from "react-redux";
import { SetLoading } from "../../../redux/loadersSlice";
import { GetAllProjects } from "../../../apicalls/projects";
import { getDateFormat } from "../../../utils/helpers";

function Projects() {
  const [projects, setProjects] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await GetAllProjects({ owner: user._id });
      if (response.success) {
        setProjects(response.data);
      } else {
        throw new Error(response.error);
      }
      dispatch(SetLoading(false));
    } catch (error) {
      message.error(error.message);
      dispatch(SetLoading(false));
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (text) => getDateFormat(text),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => {
        return (
          <div className="flex gap-4">
            <i className="ri-delete-bin-line"></i>
            <i className="ri-pencil-line"></i>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-end ">
        <Button type="default" onClick={() => setShow(true)}>
          {" "}
          Add Project
        </Button>
      </div>
      <Table columns={columns} dataSource={projects} className="mt-4" />
      {show && (
        <ProjectForm show={show} setShow={setShow} reloadData={getData} />
      )}
    </div>
  );
}

export default Projects;
