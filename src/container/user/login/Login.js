import React from 'react';
import './login.less';
import {Link} from 'react-router-dom'

export default class User extends React.Component {
    constructor() {
        super();
        this.state = {
            loginFrom: 'account',
            tip:''
        }
    }

    render() {
        return <div className="user_container">
            <div className="mainBox">
                <div className="loginBox">
                    <ul className="login_header clearfix">
                        <li className={this.state.loginFrom === "account" ? 'active' : null} onClick={() => {
                            this.setState({
                                loginFrom: 'account'
                            })
                        }}>账号密码登录
                        </li>
                        <li className={this.state.loginFrom === "phone" ? 'active' : null} onClick={() => {
                            this.setState({
                                loginFrom: 'phone'
                            })
                        }}>手机验证码登录
                        </li>
                    </ul>
                    <ul className="login_body clearfix">
                        <li className={'account' + ' ' + (this.state.loginFrom === "account" ? 'show' : '')}>
                            <ul className="clearfix">
                                <li>
                                    <input type="text" placeholder="用户名/邮箱地址"/>
                                </li>
                                <li>
                                    <input type="password" placeholder="填写密码"/>
                                </li>
                                <li></li>
                            </ul>
                        </li>
                        <li className={"phone" + ' ' + (this.state.loginFrom === "phone" ? 'show' : '')}>
                            <ul className="clearfix">
                                <li>
                                    <input type="text" placeholder="手机号" className="phoneNumber"/>
                                </li>
                                <li>
                                    <input type="text" placeholder="请输入图片字符" className="imgText"/>
                                    <img
                                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517484889497&di=fbf30f9436bd94d6c8f7fe50030fe48e&imgtype=0&src=http%3A%2F%2Fs10.sinaimg.cn%2Fsmall%2F003cvAxDzy6QKzjj289b9%26690"
                                        alt="" className="verification "/><span className="refresh"><img
                                    src="http://static.21cake.com//themes/wap/img/renovate.png" alt=""/></span>
                                </li>
                                <li>
                                    <input type="text" placeholder="输入手机验证码" className="phoneCode"/>
                                    <button className="sendCode">发送验证码</button>
                                </li>
                                <li>
                                    {this.state.tip}
                                </li>
                            </ul>


                        </li>
                    </ul>
                    <button className="login_footer">登录</button>
                </div>
                <div className={"remember" + ' ' + (this.state.loginFrom === "phone" ? 'pho' : '')}>
                    <input type="checkbox"/>记住账号
                    <Link style={{
                        display: 'inline-block',
                        float: 'right',
                        marginLeft: '18px',
                        fontSize:'0.22rem',
                        lineHeight: '18px'
                    }} to='/user/register' className="forget">忘记密码</Link>
                    <Link style={{
                        display: 'inline-block',
                        float: 'right',
                        marginLeft: '18px',
                        fontSize:'0.22rem',
                        lineHeight: '18px'
                    }} to='/user/register' className="toRegister">去注册</Link>
                </div>
            </div>
        </div>
    }
}