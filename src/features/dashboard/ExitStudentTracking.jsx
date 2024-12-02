import { Table, Typography } from "antd";
import Widget from "components/Widget";
import dayjs from "dayjs";
import { useExitStudentsList } from "./hooks";

const { Text } = Typography;

const ExitStudentTracking = () => {
  
  const { data } = useExitStudentsList();

  // Columns Definition
  const columns = [
    {
      title: "GR Number",
      dataIndex: "grNumber",
      key: "grNumber",
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Apply for Exit Date",
      dataIndex: "applyForExitDate",
      key: "applyForExitDate",
      render: (date) => dayjs(date).format("DD-MM-YYYY"),
    },
    {
      title: "Exit Date",
      dataIndex: "exitDate",
      key: "exitDate",
      render: (date) => dayjs(date).format("DD-MM-YYYY"),
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Campus",
      dataIndex: "campus",
      key: "campus",
    },
  ];

  return (
    <Widget
      title={"Exit Students List"}
      styles={{
        body: {
          maxHeight: "300px",
          maxWidth:"65%",
          overflow: "auto",
        },
      }}
    >
      <Table
        dataSource={data}
        columns={columns}
        rowKey="grNumber"
        bordered
        pagination={{ pageSize: 10 }}
      />
    </Widget>
  );
};

export default ExitStudentTracking;
