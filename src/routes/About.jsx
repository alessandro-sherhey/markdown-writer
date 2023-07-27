import { Button, Typography, Divider, Row, Col, Space } from "antd"
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
            <Typography.Paragraph>This website was made by <Button type="link" href="https://github.com/alessandro-sherhey" target="_blank" rel="noreferrer" style={{padding: 0}}>Alessandro Sherhey</Button>. To make this I used a few tools to make the experience better. Here they are:</Typography.Paragraph>
            <Row align="middle" gutter={5}>
                <Col>
                    <Button type="link" href="https://react.dev" target="_blank" rel="noreferrer" style={{padding: 5}}>React</Button>
                </Col>
                <Col>
                    <Typography.Paragraph style={{padding: '15px 0 0 0'}}>JavaScript framework</Typography.Paragraph>
                </Col>
            </Row>
            <Row align="middle" gutter={5}>
                <Col>
                    <Button type="link" href="https://react.dev" target="_blank" rel="noreferrer" style={{padding: 5}}>Redux</Button>
                </Col>
                <Col>
                    <Typography.Paragraph style={{padding: '15px 0 0 0'}}>State management</Typography.Paragraph>
                </Col>
            </Row>
            <Row align="middle" gutter={5}>
                <Col>
                    <Button type="link" href="https://reactrouter.com" target="_blank" rel="noreferrer" style={{padding: 5}}>React Router</Button>
                </Col>
                <Col>
                    <Typography.Paragraph style={{padding: '15px 0 0 0'}}>Client-side routing</Typography.Paragraph>
                </Col>
            </Row>
            <Row align="middle" gutter={5}>
                <Col>
                    <Button type="link" href="https://remarkjs.github.io/react-markdown/" target="_blank" rel="noreferrer" style={{padding: 5}}>React Markdown</Button>
                </Col>
                <Col>
                    <Typography.Paragraph style={{padding: '15px 0 0 0'}}>Markdown live preview</Typography.Paragraph>
                </Col>
            </Row>
            <Row align="middle" gutter={5}>
                <Col>
                    <Button type="link" href="https://ant.design" target="_blank" rel="noreferrer" style={{padding: 5}}>Ant Design</Button>
                </Col>
                <Col>
                    <Typography.Paragraph style={{padding: '15px 0 0 0'}}>UI components</Typography.Paragraph>
                </Col>
            </Row>
            <Row align="middle" gutter={5}>
                <Col>
                    <Button type="link" href="https://ant.design/components/icon" target="_blank" rel="noreferrer" style={{padding: 5}}>Ant Icons</Button>
                </Col>
                <Col>
                    <Typography.Paragraph style={{padding: '15px 0 0 0'}}>Icons</Typography.Paragraph>
                </Col>
            </Row>
        </Content>

    )
}

export default About;