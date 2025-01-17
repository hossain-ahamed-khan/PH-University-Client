import { Layout, Menu, MenuProps } from 'antd';
import { Outlet } from 'react-router-dom';
import { adminSidebar } from '../../routes/admin.routes';
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = adminSidebar;

export const MainLayout = () => {
    return (
        <Layout style={{ height: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div style={{
                    color: "white",
                    textAlign: "center",
                    height: "4rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <h1>PH University</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    PH University ©{new Date().getFullYear()} Created by Hossain
                </Footer>
            </Layout>
        </Layout>
    )
}
