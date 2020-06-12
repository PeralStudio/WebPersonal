import React from "react";
import {Link} from "react-router-dom";
import { Button } from "antd";
import {MenuFoldOutlined, PoweroffOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import PeralLogo from "../../../assets/img/png/logo-white.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
    const { menuCollapsado, setMenuCollapsado } = props;

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <Link to="/admin">
                    <img 
                        className="menu-top__left-logo"
                        src={PeralLogo}
                        alt="Alberto Peral"
                        />
                </Link>

                <Button type="link" onClick={() => setMenuCollapsado(!menuCollapsado)} >
                {React.createElement(menuCollapsado ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                    
            </div>
            <div className="menu-top__right">
                <Button type="link" >
                <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}