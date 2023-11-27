import React, { Component } from 'react';

import {Logo} from '../../logo.js';

import './login.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //서버로 데이터 보냄
        alert(this.state.username + this.state.password);
    }

    render() {
        return (
            <div className="containerBox">
                <a href='./'><Logo/></a>
                <h2>로그인</h2>
                <div id="loginForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">아이디</label><br/>
                    <input
                        type="text"
                        id="username"
                        name="username"
                         placeholder='아이디를 입력하세요'
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        required
                    /><p/>
                    <br/>
                    <label htmlFor="password">비밀번호</label><br/>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='비밀번호를 입력하세요'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    /><br/><br/><br/><br/>
                    <button type="submit">로그인</button>
                    <br/><br/><br/>
                    <nav id="bottomNav">
                        <li><a href="/newAccount.html" id="newAccount">회원가입</a></li>
                        <li><a href="/findMyID.html" className="findMy">아이디 찾기</a>
                        <span>  </span>
                        <a href="/findMyPW.html" className="findMy">비밀번호 찾기</a></li>
                    </nav>
                </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;