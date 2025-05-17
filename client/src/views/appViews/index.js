import React from "react";
import { Link } from "react-router-dom";
import { Layout, Button, Typography, Space } from "antd";
import logo from "../../assets/images/logo.png";
import bg from "../../assets/images/images.jpg";
import { useNavigate } from "react-router-dom";

const { Content, Header } = Layout;
const { Title } = Typography;

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };
  
  return (
    <Layout
      style={{
        minHeight: "100vh",
        textAlign: "center",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        backdropFilter: "blur(10px)",
      }}
    >
      <Header style={{ background: "transparent", padding: "10px" }}></Header>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ width: "150px", marginBottom: "20px" }}
        />
        <Title
          level={2}
          style={{
            color: "#fff",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            fontWeight: "bold",
            fontSize: "1.9rem",
          }}
        >
          District Secretariat Ampara
        </Title>

        <Space size="large">
          <Link to="/login">
            <Button type="primary" size="large">
              Login
            </Button>
          </Link>

          <Button onClick={handleClick} type="default" size="large">
      About
    </Button>
        </Space>
      </Content>
    </Layout>
  );
};

export default HomePage;
