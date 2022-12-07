import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

// 懒加载 home和 about 模块
const Home = lazy(() => import('@/views/Home'));
const About = lazy(() => import('@/views/About'));


const commonRouteComponent = ( component ) => {
  return <Suspense fallback={<div>loading</div>}>{component}</Suspense>
}

const routes = [
  {
    path: '/',
    key: 'layout',
    label: '布局页面',
    // 重定向到home
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: commonRouteComponent(<Home />),
    label: '首页', 
    key: 'home', 
    icon: <UploadOutlined />,
  },
  {
    path: '/about',
    element: commonRouteComponent(<About />),
    label: '关于我们', 
    key: 'about',
    icon: <UserOutlined />,
  },
  {
    label: '子菜单',
    key: 'submenu',
    children: [
      { 
        path: "/",
        label: '子菜单项', 
        key: 'submenu-item-1',
        icon: <VideoCameraOutlined />
      }
    ],
  },
]

export default routes;