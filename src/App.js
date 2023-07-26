import React, { useEffect } from 'react';

import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

import { Layout, Menu, Row, Col, Typography, Grid, Divider, ConfigProvider, theme, notification, Button } from 'antd';

import './styles/App.css';
import { BugOutlined, CodeOutlined, InfoOutlined, QuestionOutlined } from '@ant-design/icons';

const { Header } = Layout;

const App = () => {
  const [api, contextHolder] = notification.useNotification()

  const openBetaNotification = () => {
    api.info({
      message: 'Welcome!',
      description: `This web app is still in beta. If you notice some bugs please report them here: https://github.com/alessandro-sherhey/markdown-writer`,
      icon: <BugOutlined style={{color: "red", fontSize: '20px'}} />
    })
  }

  useEffect(() => {
    openBetaNotification()
  }, [])

  return (
    <div className="App">
      { contextHolder }
      <ConfigProvider
        theme={{
          // algorithm: theme.darkAlgorithm,
        }}
      >
        <Layout>
          <Header
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgb(250, 250, 250)'
            }}
          >
            <div className='logo'></div>
            <Menu
              theme="light"
              mode="horizontal"
              style={{
                backgroundColor: 'rgb(250, 250, 250)'
              }}
            >
              <Menu.Item key="writer" icon={<CodeOutlined />}>
                <NavLink to="/writer">Markdown Writer</NavLink>
              </Menu.Item>

              <Menu.Item key="help" icon={<QuestionOutlined />}>
                <NavLink to="/help">What's Markdown?</NavLink>
              </Menu.Item>

              <Menu.Item key="about" icon={<InfoOutlined />}>
                <NavLink to="/about">About</NavLink>
              </Menu.Item>
            </Menu>
          </Header>
          <Outlet />
        </Layout>
      </ConfigProvider>
    </div>
  );
}

export default App;
