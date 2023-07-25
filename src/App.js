import React from 'react';

import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

import { Layout, Menu, Row, Col, Typography, Grid, Divider } from 'antd';

import './styles/App.css';
import { CodeOutlined, InfoOutlined, QuestionOutlined } from '@ant-design/icons';

const { Header } = Layout;

const App = () => {
  return (
    <div className="App">
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
              What's Markdown?
            </Menu.Item>

            <Menu.Item key="about" icon={<InfoOutlined />}>
              <NavLink to="/about">About</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
