import { BoldOutlined, DoubleRightOutlined, FontSizeOutlined, ItalicOutlined, LinkOutlined, OrderedListOutlined, QuestionCircleOutlined, StrikethroughOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Typography, Divider, Row, Col, Modal } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";

const Shortcuts = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    const [isAppleDevice, setIsAppleDevice] = useState(null);
    const [isHelpOpen, setIsHelpOpen] = useState(false)

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
    }, [userAgent])

    const showHelp = () => {
        setIsHelpOpen(true)
    }
    const hideHelp = () => {
        setIsHelpOpen(false)
    }

    return (
        <Content 
            className="content shortcuts"
        >
            {
                isAppleDevice
                ?
                <div className="shortcuts-title">
                    <Typography.Title>Keyboard Shortcuts</Typography.Title>
                    <Button
                        type="primary"
                        icon={<QuestionCircleOutlined />}
                        onClick={showHelp}
                    >Why are some shortcuts missing?</Button>
                    <Modal
                        title="Why are some shortcuts missing?"
                        open={isHelpOpen}
                        onOk={hideHelp}
                        onCancel={hideHelp}
                        footer={[
                            <Button 
                                key="close"
                                type="primary"
                                onClick={hideHelp}
                            >OK</Button>
                        ]}
                    >
                        <p>
                            Unfortunately a lot of modifier keys in macOS computers have another use, and I couldn't just use other keys that are difficult to remember and aren't related to the desired action in any way. 
                        </p>
                        <p>
                            Because of this I decided that it's best to remove some keyboard shortcuts, while keeping the most important ones such as adding headings, bold, italics and strikethrough text. For the last two ones I needed to disable the shortcut to send the page with Mail (Cmd + I) and the "Save as..." shortcut (Cmd + S). 
                        </p>
                        <p>
                            If, for whatever reason, you need to save the page, right click anywhere in the page and click "Save as..." from the menu. If you just would like to look at the source code you can find it in this site's GitHub repository. You can find its link in the "About" section.
                        </p>
                    </Modal>
                </div>
                :
                <Typography.Title>Keyboard Shortcuts</Typography.Title>
            }
            
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
                !isAppleDevice
                &&
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