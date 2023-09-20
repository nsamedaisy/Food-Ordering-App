import React from "react";
import DashboardSideMenu from "../components/DashboardSideMenu";
import { Route, Routes } from "react-router-dom";
import DBSettings from "./DBSettings";
import DBOrders from "./DBOrders";
import DBMenu from "./dashboardMenu/DBMenu";
import DBDetailorder from "./DBDetailorder";
import { Layout, Image } from "antd";
import CreateMenuItem from "./CreateMenuItem";

let { Sider, Content } = Layout;

function Dashboard() {
  return (
    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: "#151414b1" }}>
        <Image
          src="https://logowik.com/content/uploads/images/daisy-brand3223.jpg"
          preview={false}
        />
        <DashboardSideMenu />
      </Sider>
      <Layout>
        <Content style={{ backgroundColor: "white", width: "86vw" }}>
          <Routes>
            <Route path="/orders" element={<DBOrders />} />
            <Route path="/detailorder" element={<DBDetailorder />} />
            <Route path="/menu" element={<DBMenu />} />
            <Route path="/menu/create" element={<CreateMenuItem />} />
            <Route path="/settings" element={<DBSettings />} />
          </Routes>
        </Content>
      </Layout>
      {/* <div><Image src='https://img.freepik.com/premium-photo/beef-steak-wooden-board-realistic-3d-product-showcase-food-photography_111797-1704.jpg' /></div> */}
    </Layout>
  );
}

export default Dashboard;
