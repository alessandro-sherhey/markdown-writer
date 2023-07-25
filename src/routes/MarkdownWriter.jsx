import React from "react";
import { Layout, Row, Col, Typography, Grid, Divider, Space, Input, Button } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { BoldOutlined, ItalicOutlined, LinkOutlined, OrderedListOutlined, StrikethroughOutlined, UnderlineOutlined, UnorderedListOutlined } from "@ant-design/icons";
const { Content } = Layout;

const MarkdownWriter = () => {
    return (
        <Content 
            className='md-writer' 
            style={{
                width: '100vw',
                height: '100vh',
                padding: '0 50px',
                backgroundColor: 'white'
            }}>
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
                    <Col span={50} style={{width: '50%', height: 'calc(100% - 150px)', margin: '20px 0 0 0'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', margin: '0 0 20px 0'}}>
                            <div>
                                <Typography.Title level={2} style={{margin: '0'}}>Your Text</Typography.Title>
                            </div>
                            <div>
                                <Space.Compact style={{marginRight: 20}}>
                                    <Button icon={<BoldOutlined />} />
                                    <Button icon={<ItalicOutlined />} />
                                    <Button icon={<UnderlineOutlined />} />
                                    <Button icon={<StrikethroughOutlined />} />
                                </Space.Compact>
                                <Space.Compact style={{marginRight: 20}}>
                                    <Button icon={<UnorderedListOutlined />} />
                                    <Button icon={<OrderedListOutlined />} />
                                </Space.Compact>
                                <Space.Compact style={{marginRight: 20}}>
                                    <Button icon={<LinkOutlined />} />
                                </Space.Compact>
                            </div>
                        </div>
                        <TextArea placeholder="Write here and use the buttons on the top!" style={{height: '100%'}} showCount/>
                    </Col>
                    <Col span={50} style={{width: '50%', height: 'calc(100% - 150px)', margin: '20px 0 0 0'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', margin: '0 0 20px 0'}}>
                            <div>
                                <Typography.Title level={2} style={{margin: '0'}}>Markdown</Typography.Title>
                            </div>
                            <div>
                                <Button>Example</Button>
                            </div>
                        </div>
                        
                    </Col>
                </Row>
        </Content>
    )
}

export default MarkdownWriter;