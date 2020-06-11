import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Layout} from "antd";

import "./LayoutBasic.scss";

function LayoutBasic(props) {
    const { routes } = props; 
    const { Content, Footer} = Layout;

    return (
      <Layout>
            <h2>Menu...</h2>
            <Layout>
                <Content>
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer>Copyright Peral</Footer>
            </Layout>
      </Layout>
    );
  }

  function LoadRoutes ({routes}) {

    return (
        <Switch>
            {
                routes.map((route, index) => (
                    <Route
                    key={index}
                    path={route.path}
                    exact={route.component}
                    component={route.component}
                    />
                ))}
        </Switch>
    );
  }


export default LayoutBasic;