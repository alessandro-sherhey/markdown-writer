import { Button, Typography, Divider, Row, Col } from "antd"
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
            <Typography.Paragraph>This website was made by <Button type="link" style={{padding: 0}}>Alessandro Sherhey</Button>.</Typography.Paragraph>
            <Typography.Paragraph>I used React, Redux for managing the app's state, React Router for client routing, React Markdown for the writer's live preview, Ant Design for the UI components and Ant Icons for the icons.</Typography.Paragraph>
        </Content>

    )
}

export default About;