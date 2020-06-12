import React, { useState } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import AdminSignIn from "../pages/Admin/SignIn/SignIn";

import "./LayoutAdmin.scss";

function LayoutAdmin(props) {

    const { routes } = props;
    const [menuCollapsado, setMenuCollapsado] = useState(false);
    const {Header, Content, Footer } = Layout;

    const user = null;

    if(!user) {
      return(
        <>
        <Route path="/admin/login" component={AdminSignIn} />
        <Redirect to="/admin/login" />
        </>
      )
    }

    return (
      <Layout>
        <MenuSider menuCollapsado ={menuCollapsado}/>
        <Layout className="layout-admin" 
        style={{marginLeft: menuCollapsado ? "80px" : "200px"}}>
            <Header className="layout-admin__header">
              <MenuTop 
              menuCollapsado={menuCollapsado}
              setMenuCollapsado={setMenuCollapsado}              
              />
              </Header>
            <Content className="layout-admin__content">
               <LoadRoutes routes={routes} /> </Content>
            <Footer className="layout-admin__footer"> Copyright Peral</Footer>
        </Layout>
      </Layout>
    );
  }

  function LoadRoutes ({routes}) {

    return (
        <Switch>
            {routes.map((route, index) => (
          <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
          />
            ))}
        </Switch>
        );  
  }


export default LayoutAdmin;