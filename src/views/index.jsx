import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd'
import React, { useState } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import router from '@/router';
const { Header, Sider, Content, Footer } = Layout;
import style from './index.module.scss';

const Appindex = () => {
  const [collapsed, setCollapsed] = useState(false);
  const defaultSelectedKeys = ['item-1'];

  const outlet = useRoutes(router);
  const params = useLocation();
  const selectedKeys = useState([]);

  console.log(selectedKeys)

  // 点击导航菜单
  const handleMenuClick = ({ item, key, keyPath, domEvent }) => {
    console.log('handleMenuClick---', item, key, keyPath, domEvent)
    selectedKeys[0] = keyPath;
  }

  return (<>
    <Layout className={ style.antLayout }>
      <Sider theme='light'
          trigger={null}
          collapsible
          collapsed={collapsed}>
        <div className={style.logo} />
        <Menu mode='inline'
          defaultSelectedKeys={defaultSelectedKeys}
          items={router}
          selectedKeys={selectedKeys}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{background: '#fff', paddingLeft: '15px'}} >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
        </Header>
        <Content className={ style.layoutContent }>
          {/* 路由渲染区域, 类似于窗口，用来展示组件，类似于 vue 中的 router-view */}
          {outlet}
        </Content>
      </Layout>
    </Layout>
    <Footer style={{ padding: 0 }} className={ style.footer }>footer</Footer>
    </>
  )
}

export default Appindex