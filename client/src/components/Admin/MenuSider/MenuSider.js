import React from "react";
import {Link} from "react-router-dom";
import {Layout, Menu} from "antd";
import {MenuOutlined} from '@ant-design/icons';



import "./MenuSider.scss";

export default function MenuSider() {
    const {Sider} = Layout;
    return (
        <Sider className="admin-sider">
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                    <Link to={"/admin"}>
                    <MenuOutlined />
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="2">
                    <Link to={"/admin/menu-web"}>
                    <MenuOutlined />
                        <span className="nav-text">Menu Web</span>
                    </Link>
                </Menu.Item>

            </Menu>
        </Sider>
    )
}