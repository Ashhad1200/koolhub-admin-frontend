import { Card, Row, Typography, Badge, Space } from "antd";
import {
  UserOutlined,
  FileAddOutlined,
  TeamOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import Widget from "components/Widget";
import { useContext } from "react";
import { AuthContext } from "features/auth/context";
import { dt } from "@mb";
import { useEmployeeCount } from "./hook";

const { Text } = Typography;

const EmployeeCounter = () => {
  const { user } = useContext(AuthContext);

  const { data } = useEmployeeCount({
    campusId: user.campusId,
    date: dt.today().format(dt.formats.DateMonthYear1),
  });

  const employeeData = [
    {
      count: data?.total || 0,
      label: "Total",
      color: "#1890ff",
      icon: <UserOutlined />,
    },
    {
      count: data?.new || 0,
      label: "New",
      color: "#52c41a",
      icon: <FileAddOutlined />,
    },
    {
      count: data?.temporary || 0,
      label: "Temporary",
      color: "#faad14",
      icon: <TeamOutlined />,
    },
    {
      count: data?.exit || 0,
      label: "Exit",
      color: "#f5222d",
      icon: <PoweroffOutlined />,
    },
  ];

  return (
    <Widget
      title={"Employees"}
      styles={{
        body: {
          maxHeight: "300px",
          overflow: "auto",
        },
      }}
    >
      <Row gutter={[10, 10]}>
        {employeeData.map((item, index) => (
          <Card
            key={index}
            bordered={false}
            style={{
              backgroundColor: item.color,
              borderRadius: 10,
              color: "#fff",
              padding: "10px",
              width: "100%",
            }}
          >
            <Space
              style={{ display: "flex", alignItems: "center" }}
              direction="horizontal"
            >
              <Badge
                count={item.icon}
                style={{
                  backgroundColor: "#fff",
                  color: item.color,
                  fontSize: "20px",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              />

              <div style={{ marginLeft: "10px", textAlign: "left" }}>
                <Text
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  {item.count}
                </Text>
                <br />
                <Text style={{ fontSize: "14px", opacity: 0.9 }}>
                  {item.label}
                </Text>
              </div>
            </Space>
          </Card>
        ))}
      </Row>
    </Widget>
  );
};

export default EmployeeCounter;
