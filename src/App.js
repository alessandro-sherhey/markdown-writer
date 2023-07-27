import React, { useEffect } from 'react';

import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

import { Layout, Menu, ConfigProvider, notification } from 'antd';

import './styles/App.css';
import { BugOutlined, CodeOutlined, EditOutlined, InfoOutlined, QuestionOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

const { Header } = Layout;

const App = () => {
  const dispatch = useDispatch()
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
  })

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === 'b' ||
        e.key === 'i' ||
        e.key === 's' ||
        e.key === 'q' ||
        e.key === 'u' ||
        e.key === 'o' ||
        e.key === 'l' ||
        e.ctrlKey === true || // ctrl (Win + Mac)
        e.metaKey === true || // win (Win) or cmd (Mac)
        e.altKey === true // alt (Win) or opt (Mac)
      ) {
        dispatch({
          type: 'keys/keyPressed',
          payload: e.key.toLowerCase()
        })
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  })

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === 'b' ||
        e.key === 'i' ||
        e.key === 's' ||
        e.key === 'q' ||
        e.key === 'u' ||
        e.key === 'o' ||
        e.key === 'l' ||
        e.ctrlKey === false || // ctrl (Win + Mac)
        e.metaKey === false || // win (Win) or cmd (Mac)
        e.altKey === false // alt (Win) or opt (Mac)
      ) {
        dispatch({
          type: 'keys/keyUnpressed',
          payload: e.key.toLowerCase()
        })
      }
    }
    document.addEventListener("keyup", handleKeyUp)
    
    return () => {
      document.removeEventListener("keyup", handleKeyUp)
    }
  })

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

              <Menu.Item key="shortcuts" icon={<EditOutlined />}>
                <NavLink to="/shortcuts">Keyboard Shortcuts</NavLink>
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
