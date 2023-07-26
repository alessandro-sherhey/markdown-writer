import { BoldOutlined, DoubleRightOutlined, FontSizeOutlined, ItalicOutlined, LinkOutlined, MacCommandOutlined, OrderedListOutlined, StrikethroughOutlined, UnderlineOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Typography, Divider, Space, Row, Col, Grid } from "antd";
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
                overflow: 'hidden',
            }}
        >
            <Typography.Title>Keyboard Shortcuts</Typography.Title>
            <Divider children="Headings" />
            <Row align='middle' gutter={20}>
                <Col>
                    <Button icon={<FontSizeOutlined />} />
                </Col>
                <Col>
                    <b>Headings</b>
                </Col>
                <Col>
                    <p>⌥ Option + 1</p>
                    <p>⌥ Option + 2</p>
                    <p>⌥ Option + 3</p>
                    <p>⌥ Option + 4</p>
                    <p>⌥ Option + 5</p>
                    <p>⌥ Option + 6</p>
                </Col>
            </Row>
            <Divider children="Text Styling"/>
            <Row align='middle' gutter={20}>
                <Col>
                    <Button icon={<BoldOutlined />} />
                </Col>
                <Col>
                    <b>Bold</b>
                </Col>
                <Col>
                    <p>⌘ Cmd + B</p>
                </Col>
                <Col>
                    <p>⌥ Option + B</p>
                </Col>
            </Row>
            <Row align='middle' gutter={20}>
                <Col>
                    <Button icon={<ItalicOutlined />} />
                </Col>
                <Col>
                    <b>Italics</b>
                </Col>
                <Col>
                    <p>⌘ Cmd + I</p>
                </Col>
                <Col>
                    <p>⌥ Option + I</p>
                </Col>
            </Row>
            <Row align='middle' gutter={20}>
                <Col>
                    <Button icon={<StrikethroughOutlined />} />
                </Col>
                <Col>
                    <b>Strikethrough</b>
                </Col>
                <Col>
                    <p>⌘ Cmd + S</p>
                </Col>
                <Col>
                    <p>⌥ Option + S</p>
                </Col>
            </Row>
            <Divider children="Text Formatting"/>
            <Row align='middle' gutter={20}>
                <Col>
                    <Button icon={<DoubleRightOutlined />} />
                </Col>
                <Col>
                    <b>Blockquote</b>
                </Col>
                <Col>
                    <p>⌥ Option + Q</p>
                </Col>
            </Row>
            <Row align='middle' gutter={20}>
                <Col>
                    <Button icon={<UnorderedListOutlined />} />
                </Col>
                <Col>
                    <b>Unordered List</b>
                </Col>
                <Col>
                    <p>⌥ Option + U</p>
                </Col>
            </Row>
            <Row align='middle' gutter={20}>
                <Col>
                    <Button icon={<OrderedListOutlined />} />
                </Col>
                <Col>
                    <b>Ordered List</b>
                </Col>
                <Col>
                    <p>⌥ Option + O</p>
                </Col>
            </Row>
            <Divider children="Other" />
            <Row align='middle' gutter={20}>
                <Col>
                    <Button icon={<LinkOutlined />} />
                </Col>
                <Col>
                    <b>Hyperlink</b>
                </Col>
                <Col>
                    <p>⌥ Option + L</p>
                </Col>
            </Row>
        </Content>
    )
}

export default Shortcuts;