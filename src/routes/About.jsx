import { Typography, Divider } from "antd"
import { Content } from "antd/es/layout/layout";
import React from "react";

const About = () => {
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
            <Typography.Title>About</Typography.Title>
            <Divider />
        </Content>

    )
}

export default About;