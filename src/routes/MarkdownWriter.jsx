import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Typography, Grid, Divider, Space, Input, Button, Tooltip, Popconfirm, message } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { BoldOutlined, CopyOutlined, DeleteOutlined, DoubleRightOutlined, DownloadOutlined, FontSizeOutlined, ItalicOutlined, LinkOutlined, OrderedListOutlined, StrikethroughOutlined, UnderlineOutlined, UnorderedListOutlined } from "@ant-design/icons";
import MDResult from "../components/MDResult";
import { useDispatch, useSelector } from "react-redux";
import addMarkdownItem from "../utilities/addMarkdownItem";
import FileSaver, { saveAs } from "file-saver";
const { Content } = Layout;

const MarkdownWriter = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const dispatch = useDispatch();
    const text = useSelector(state => state.md);

    const userAgent = navigator.userAgent.toLowerCase()
    const [isAppleDevice, setIsAppleDevice] = useState(false);
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

    const [disableButtons, setDisableButtons] = useState(true);
    useEffect(() => {
        text ? setDisableButtons(false) : setDisableButtons(true)
    }, [text])

    const addSpecialItem = item => {
        dispatch({
            type: 'md/addSpecial',
            payload: addMarkdownItem(item)
        })
    }

    const updateTextArea = e => {
        dispatch({
            type: 'md/update',
            payload: e.target.value
        })
    }

    const onClearConfirm = () => {
        dispatch({
            type: 'md/update',
            payload: ''
        })
        messageApi.success('Text field cleared!')
    }

    const onClearCancel = () => {
        messageApi.info('Nothing was deleted.')
    }

    const copyText = async () => {
        try {
            await navigator.clipboard.writeText(text)
            messageApi.success('Text copied to the clipboard!')
        } catch (e) {
            messageApi.error('An error occured while copying your text.')
            console.error(e)
        }
    }

    const downloadFile = () => {
        try {
            const blob = new Blob([text], { type: 'text/markdown;charset=utf-8'});
            saveAs(blob, 'markdown.md')
            messageApi.success('File downloaded!')
        } catch (e) {
            messageApi.error('An error occured while downloading the file.')
            console.error(e)
        }
    }

    useEffect(() => {
        const handleShortcut = e => {
            if ((e.altKey && e.key === '1') || (e.ctrlKey && e.key === '1')) {
                addSpecialItem('heading')
            } else if ((e.altKey && e.key === '2') || (e.ctrlKey && e.key === '2')) {
                addSpecialItem('heading2')
            } else if ((e.altKey && e.key === '3') || (e.ctrlKey && e.key === '3')) {
                addSpecialItem('heading3')
            } else if ((e.altKey && e.key === '4') || (e.ctrlKey && e.key === '4')) {
                addSpecialItem('heading4')
            } else if ((e.altKey && e.key === '5') || (e.ctrlKey && e.key === '5')) {
                addSpecialItem('heading5')
            } else if ((e.altKey && e.key === '6') || (e.ctrlKey && e.key === '6')) {
                addSpecialItem('heading6')
            } else if ((e.ctrlKey && e.key === 'b') || (e.metaKey && e.key === 'b')) {
                document.getElementById('boldBtn').click()
            } else if ((e.ctrlKey && e.key === 'i') || (e.metaKey && e.key === 'i')) {
                e.preventDefault()
                document.getElementById('italicsBtn').click()
            } else if ((e.ctrlKey && e.key === 's') || (e.metaKey && e.key === 's')) {
                e.preventDefault()  // Disable the default 'Save page' dialog.
                document.getElementById('strikethroughBtn').click()
            } else if (e.altKey && e.key === 'q') {
                // Windows only
                document.getElementById('blockquoteBtn').click()
            } else if (e.altKey && e.key === 'u') {
                // Windows only
                document.getElementById('unorderedListBtn').click()
            } else if (e.altKey && e.key === 'o') {
                // Windows only
                document.getElementById('orderedListBtn').click()
            } else if (e.altKey && e.key === 'l') {
                // Windows only
                document.getElementById('linkBtn').click()
            }
        }
        document.addEventListener('keydown', handleShortcut)

        return () => {
            document.removeEventListener('keydown', handleShortcut)
        }
    })

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
                {contextHolder}
                <Row
                    gutter={ {xs: 8, sm: 16, md: 24, lg: 32} }
                    style={{
                        display: 'flex',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <Col span={50} style={{width: '50%', height: 'calc(100vw - 200px)', margin: '20px 0 0 0'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 0 20px 0'}}>
                            <div>
                                <Typography.Title level={2} style={{margin: '0'}}>Your Text</Typography.Title>
                            </div>
                            <div>
                                <Space.Compact style={{marginRight: 20}}>
                                    <Tooltip title={isAppleDevice ? "Heading (⌃ + 1)" : "Heading (Alt + 1)"}>
                                        <Button
                                            icon={<FontSizeOutlined />}
                                            onClick={() => addSpecialItem('heading')}
                                            id="headingBtn"
                                        />
                                    </Tooltip>
                                </Space.Compact>
                                <Space.Compact style={{marginRight: 20}}>
                                    <Tooltip title={isAppleDevice ? "Bold (⌘ + B)" : "Bold (Ctrl + B)"}>
                                        <Button 
                                            icon={<BoldOutlined />}
                                            onClick={() => addSpecialItem('bold')}
                                            id="boldBtn"
                                        />
                                    </Tooltip>
                                    <Tooltip title={isAppleDevice ? "Italics (⌘ + I)" : "Italics (Ctrl + I)"}>
                                        <Button 
                                            icon={<ItalicOutlined />}
                                            onClick={() => addSpecialItem('italics')}
                                            id="italicsBtn"
                                        />
                                    </Tooltip>
                                    <Tooltip title={isAppleDevice ? "Strikethrough (⌘ + S)" : "Strikethrough (Ctrl + S)"}>
                                        <Button 
                                            icon={<StrikethroughOutlined />}
                                            onClick={() => addSpecialItem('strikethrough')}
                                            id="strikethroughBtn"
                                        />
                                    </Tooltip>
                                </Space.Compact>
                                <Space.Compact style={{marginRight: 20}}>
                                    <Tooltip title={isAppleDevice ? "Blockquote" : "Blockquote (Alt + Q)"}>
                                        <Button
                                            icon={<DoubleRightOutlined />}
                                            onClick={() => addSpecialItem('blockquote')}
                                            id="blockquoteBtn"
                                        />
                                    </Tooltip>
                                    <Tooltip title={isAppleDevice ? "Unordered list" : "Unordered list (Alt + U)"}>
                                        <Button 
                                            icon={<UnorderedListOutlined />}
                                            onClick={() => addSpecialItem('unorderedlist')}
                                            id="unorderedListBtn"
                                        />
                                    </Tooltip>
                                    <Tooltip title={isAppleDevice ? "Ordered list" : "Ordered list (Alt + O)"}>
                                        <Button 
                                            icon={<OrderedListOutlined />} 
                                            onClick={() => addSpecialItem('orderedlist')}
                                            id="orderedListBtn"
                                        />
                                    </Tooltip>
                                </Space.Compact>
                                <Space.Compact style={{marginRight: 20}}>
                                    <Tooltip title={isAppleDevice ? "Link" : "Link (Alt + L)"}>
                                        <Button 
                                            icon={<LinkOutlined />}
                                            onClick={() => addSpecialItem('link')}
                                            id="linkBtn"
                                        />
                                    </Tooltip>
                                </Space.Compact>
                                <Space.Compact>
                                    <Popconfirm
                                        title="Clear text"
                                        description="Are you sure you want to delete everything?"
                                        onConfirm={onClearConfirm}
                                        onCancel={onClearCancel}
                                        okText="Yes, I'm sure."
                                        cancelText="No, cancel."
                                    >
                                        <Button danger={true} icon={<DeleteOutlined />}>Clear</Button>
                                    </Popconfirm>
                                </Space.Compact>
                            </div>
                        </div>
                        <TextArea 
                            placeholder="Write here and use the buttons on the top!"
                            style={{height: 'calc(100vh - 190px)', padding: '5px 0'}}
                            value={text}
                            onChange={e => updateTextArea(e)}
                            showCount={true}
                        />
                    </Col>
                    <Col span={50} style={{width: '50%', height: 'calc(100% - 200px)', margin: '20px 0 0 0'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 0 20px 0'}}>
                            <div>
                                <Typography.Title level={2} style={{margin: '0'}}>Markdown</Typography.Title>
                            </div>
                            <div>
                                <Button 
                                    disabled={disableButtons}
                                    icon={<DownloadOutlined />}
                                    style={{marginRight: 10}}
                                    onClick={downloadFile}
                                >Download File</Button>
                                <Button 
                                    type="primary"
                                    disabled={disableButtons} 
                                    icon={<CopyOutlined />} 
                                    onClick={copyText}
                                >Copy Text</Button>
                            </div>
                        </div>
                        <MDResult/>
                    </Col>
                </Row>
        </Content>
    )
}

export default MarkdownWriter;