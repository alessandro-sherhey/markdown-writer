import React from 'react';

import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

import { Layout, Menu } from 'antd';

import './styles/App.css';
import { CodeOutlined, InfoOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

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

            <Menu.Item key="about" icon={<InfoOutlined />}>
              <NavLink to="/about">About</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}

export default App;
