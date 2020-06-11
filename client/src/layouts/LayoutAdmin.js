import React from 'react';
import { Route } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutAdmin.scss";

function LayoutAdmin(props) {

    const { routes } = props;
    const {Header, Content, Footer } = Layout;

    return (
      <Layout>
        <h2>Menu Sider Admin</h2>
        <Layout>
            <Header>Header.......</Header>
            <Content> <LoadRouters routes={routes} /> </Content>
            <Footer> Copyright Peral</Footer>
        </Layout>
      </Layout>
    );
  }

  function LoadRouters ({routes}) {

      return routes.map((route, index) => (
          <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
          />
      ))
  }


export default LayoutAdmin;