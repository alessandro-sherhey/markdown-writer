import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

import { Layout, Menu, ConfigProvider, notification, theme } from 'antd';

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
  }, [])

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

  const [darkScheme, setDarkScheme] = useState(window.matchMedia('(prefers-color-scheme: dark)'))

  const updateDarkMode = e => {
    setDarkScheme(e.matches)
  }

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkScheme(darkMediaQuery.matches);
    darkMediaQuery.addEventListener("change", updateDarkMode)

    return () => {
      darkMediaQuery.removeEventListener("change", updateDarkMode)
    }
  }, [])

  return (
    <div className="App">
      { contextHolder }
      <ConfigProvider
        theme={
          darkScheme ?
          { algorithm: theme.darkAlgorithm } :
          null
        }
      >
        <Layout>
          <Header>
            <div className='logo'></div>
            <Menu
              theme="light"
              mode="horizontal"
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
