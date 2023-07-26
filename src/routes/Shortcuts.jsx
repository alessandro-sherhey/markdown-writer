import { Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

const Shortcuts = () => {
    return (
        <Content 
            className="shortcuts"
            style={{
                width: '100vw',
                height: 'calc(100vh - 64px)',
                padding: '0 50px',
                backgroundColor: 'white',
                overflow: 'hidden'
            }}
        >
            <Typography.Title>Keyboard Shortcuts</Typography.Title>
        </Content>
    )
}

export default Shortcuts;