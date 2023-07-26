import { Typography, Divider } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

const Help = () => {
    return (
        <Content 
            className='md-writer' 
            style={{
                width: '100vw',
                height: 'calc(100vh - 64px)',
                padding: '0 50px',
                backgroundColor: 'white',
            }}
        >
            <Typography.Title>What's Markdown?</Typography.Title>
            <Divider />
        </Content>
    )
}

export default Help;