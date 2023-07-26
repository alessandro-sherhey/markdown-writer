import { BoldOutlined, DoubleRightOutlined, FontSizeOutlined, ItalicOutlined, LinkOutlined, MacCommandOutlined, OrderedListOutlined, StrikethroughOutlined, UnderlineOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Typography, Divider, Space, Row, Col, Grid } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";

const Shortcuts = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    const [isAppleDevice, setIsAppleDevice] = useState(null);

    useEffect(() => {
        if (userAgent.indexOf('macintosh') !== -1) {
            setIsAppleDevice(true)
        } else if (userAgent.indexOf('ipad') !== -1) {
            setIsAppleDevice(true)
        } else if (userAgent.indexOf('iphone') !== -1) {
            setIsAppleDevice(true)
        } else {
            setIsAppleDevice(false)
        }
    })

    return (
        <Content 
            className="shortcuts"
            style={{
                width: '100vw',
                height: 'calc(100vh - 64px)',
                padding: '0 50px',
                backgroundColor: 'white',
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
                {
                    isAppleDevice
                    ?
                    <Col>
                        <p>⌃ Control + 1</p>
                        <p>⌃ Control + 2</p>
                        <p>⌃ Control + 3</p>
                        <p>⌃ Control + 4</p>
                        <p>⌃ Control + 5</p>
                        <p>⌃ Control + 6</p>
                    </Col>
                    :
                    <Col>
                        <p>Alt + 1</p>
                        <p>Alt + 2</p>
                        <p>Alt + 3</p>
                        <p>Alt + 4</p>
                        <p>Alt + 5</p>
                        <p>Alt + 6</p>
                    </Col>
                }
            </Row>
            <Divider children="Text Styling"/>
            <Row align='middle' gutter={20}>
                <Col>
                    <Button icon={<BoldOutlined />} />
                </Col>
                <Col>
                    <b>Bold</b>
                </Col>
                {
                    isAppleDevice
                    ?
                    <Col>
                        <p>⌘ Cmd + B</p>
                    </Col>
                    :
                    <Col>
                        <p>Ctrl + B</p>
                    </Col>
                }
            </Row>
            <Row align='middle' gutter={20}>
                <Col>
                    <Button icon={<ItalicOutlined />} />
                </Col>
                <Col>
                    <b>Italics</b>
                </Col>
                {
                    isAppleDevice
                    ?
                    <Col>
                        <p>⌘ Cmd + I</p>
                    </Col>
                    :
                    <Col>
                        <p>Ctrl + I</p>
                    </Col>
                }
            </Row>
            <Row align='middle' gutter={20}>
                <Col>
                    <Button icon={<StrikethroughOutlined />} />
                </Col>
                <Col>
                    <b>Strikethrough</b>
                </Col>
                {
                    isAppleDevice
                    ?
                    <Col>
                        <p>⌘ Cmd + S</p>
                    </Col>
                    :
                    <Col>
                        <p>Ctrl + S</p>
                    </Col>
                }
            </Row>
            {
                !isAppleDevice &&
                <div>
                    <Divider children="Text Formatting"/>
                    <Row align='middle' gutter={20}>
                        <Col>
                            <Button icon={<DoubleRightOutlined />} />
                        </Col>
                        <Col>
                            <b>Blockquote</b>
                        </Col>
                        <Col>
                            <p>Alt + Q</p>
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
                            <p>Alt + U</p>
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
                            <p>Alt + O</p>
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
                            <p>Alt + L</p>
                        </Col>
                    </Row>
                </div>
            }
        </Content>
    )
}

export default Shortcuts;