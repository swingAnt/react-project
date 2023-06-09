import { Menu } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
// 高阶组件，包裹useNavigate()功能
import WidthUseNavigate from './widthUseNavigate.js';
import logo from '@/assets/images/logo.png';
import styles from './index.module.scss'

class SiderLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{
                key: "/home",
                icon: React.createElement(UserOutlined),
                label: "列表"
            }, {
                key: "/home/manage",
                icon: React.createElement(UserOutlined),
                label: "组件管理",
                children: [{
                    key: "/home/manage/form",
                    label: "表单"
                }, {
                    key: "/home/user/auth",
                    label: "权限设置"
                }, {
                    key: "sub23",
                    label: "菜单三"
                }, {
                    key: "sub24",
                    label: "菜单四"
                }, {
                    key: "sub25",
                    label: "菜单五"
                }]
            }]
        };
    }
 
    click = (e) => {
        console.log(e);
        console.log(e.key);
        //注意this指向问题，采用箭头函数this就指向当前组件
        this.props.to(e.key);
    }
 
    openChange() {
        console.log('OpenChange');
    }
    render() {
        return (
            <div className={styles.siderLeft}>
                <div className={styles.logo}>
                 <img src={logo} alt="logo" className={styles.img}/>
                 XXX系统
            </div>
               
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['/home']}
                defaultOpenKeys={['/home/user']}
                style={{
                    height: '100%',
                    borderRight: 0,
                }}
                items={this.state.items}
                onOpenChange={() => this.openChange()}
                onClick={this.click}
            />
            </div>
        )
    }
}
// 使用高阶组件包裹当前类组件
const NavigateCompont = WidthUseNavigate(SiderLeft);
// 导出包裹后的类组件
export default NavigateCompont;