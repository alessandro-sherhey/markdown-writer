import { Button, Typography, Divider, Row, Col } from "antd"
import { Content } from "antd/es/layout/layout";
import React from "react";

const About = () => {
    return (
        <Content 
            className='content about'
        >
            <Typography.Title>About</Typography.Title>
            <Divider />
            <Typography.Paragraph>This website was made by <Button type="link" href="https://github.com/alessandro-sherhey" target="_blank" rel="noreferrer">Alessandro Sherhey</Button>. To make this I used a few tools to make the experience better. Here they are:</Typography.Paragraph>
            <Row align="middle" gutter={5}>
                <Col>
                    <Button type="link" href="https://react.dev" target="_blank" rel="noreferrer">React</Button>
                </Col>
                <Col>
                    <Typography.Paragraph>JavaScript framework</Typography.Paragraph>
                </Col>
            </Row>
            <Row align="middle" gutter={5}>
                <Col>
                    <Button type="link" href="https://react.dev" target="_blank" rel="noreferrer">Redux</Button>
                </Col>
                <Col>
                    <Typography.Paragraph>State management</Typography.Paragraph>
                </Col>
            </Row>
            <Row align="middle" gutter={5}>
                <Col>
                    <Button type="link" href="https://reactrouter.com" target="_blank" rel="noreferrer">React Router</Button>
                </Col>
                <Col>
                    <Typography.Paragraph>Client-side routing</Typography.Paragraph>
                </Col>
            </Row>
            <Row align="middle" gutter={5}>
                <Col>
                    <Button type="link" href="https://remarkjs.github.io/react-markdown/" target="_blank" rel="noreferrer">React Markdown</Button>
                </Col>
                <Col>
                    <Typography.Paragraph>Markdown live preview</Typography.Paragraph>
                </Col>
            </Row>
            <Row align="middle" gutter={5}>
                <Col>
                    <Button type="link" href="https://ant.design" target="_blank" rel="noreferrer">Ant Design</Button>
                </Col>
                <Col>
                    <Typography.Paragraph>UI components</Typography.Paragraph>
                </Col>
            </Row>
            <Row align="middle" gutter={5}>
                <Col>
                    <Button type="link" href="https://ant.design/components/icon" target="_blank" rel="noreferrer">Ant Icons</Button>
                </Col>
                <Col>
                    <Typography.Paragraph>Icons</Typography.Paragraph>
                </Col>
            </Row>
        </Content>

    )
}

export default About;