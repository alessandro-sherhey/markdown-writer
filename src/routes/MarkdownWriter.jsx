import React from "react";
import { Layout, Row, Col, Typography, Grid, Divider, Space, Input, Button, Tooltip, Popconfirm, message } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { BoldOutlined, CopyOutlined, DeleteOutlined, DownloadOutlined, FontSizeOutlined, ItalicOutlined, LinkOutlined, OrderedListOutlined, StrikethroughOutlined, UnderlineOutlined, UnorderedListOutlined } from "@ant-design/icons";
import MDResult from "../components/MDResult";
import { useDispatch, useSelector } from "react-redux";
import addMarkdownItem from "../utilities/addMarkdownItem";
const { Content } = Layout;

const MarkdownWriter = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const dispatch = useDispatch();
    const text = useSelector(state => state.md);

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



    return (
        <Content 
            className='md-writer' 
            style={{
                width: '100vw',
                height: 'calc(100vh - 64px)',
                padding: '0 50px',
                backgroundColor: 'white',
                overflow: 'hidden'
            }}>
                {contextHolder}
                {/* <Typography.Title>Markdown Writer</Typography.Title>
                <Divider /> */}
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
                                    <Tooltip title="Heading">
                                        <Button
                                            icon={<FontSizeOutlined />}
                                            onClick={() => addSpecialItem('heading')}
                                        />
                                    </Tooltip>
                                </Space.Compact>
                                <Space.Compact style={{marginRight: 20}}>
                                    <Tooltip title="Bold">
                                        <Button 
                                            icon={<BoldOutlined />}
                                            onClick={() => addSpecialItem('bold')}
                                        />
                                    </Tooltip>
                                    <Tooltip title="Italics">
                                        <Button 
                                            icon={<ItalicOutlined />}
                                            onClick={() => addSpecialItem('italics')}
                                        />
                                    </Tooltip>
                                    <Tooltip title="Strikethrough">
                                        <Button 
                                            icon={<StrikethroughOutlined />}
                                            onClick={() => addSpecialItem('strikethrough')}
                                        />
                                    </Tooltip>
                                </Space.Compact>
                                <Space.Compact style={{marginRight: 20}}>
                                    <Tooltip title="Unordered list">
                                        <Button 
                                            icon={<UnorderedListOutlined />}
                                            onClick={() => addSpecialItem('unorderedlist')}
                                        />
                                    </Tooltip>
                                    <Tooltip title="Ordered list">
                                        <Button 
                                            icon={<OrderedListOutlined />} 
                                            onClick={() => addSpecialItem('orderedlist')}
                                        />
                                    </Tooltip>
                                </Space.Compact>
                                <Space.Compact style={{marginRight: 20}}>
                                    <Tooltip title="Link">
                                        <Button 
                                            icon={<LinkOutlined />}
                                            onClick={() => addSpecialItem('link')}
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
                                <Button disabled={true} icon={<CopyOutlined />} style={{marginRight: 10}}>Copy Text</Button>
                                <Button disabled={true} icon={<DownloadOutlined />}>Download File</Button>
                            </div>
                        </div>
                        <MDResult/>
                    </Col>
                </Row>
        </Content>
    )
}

export default MarkdownWriter;