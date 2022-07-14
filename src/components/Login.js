import React , { Component } from 'react';
import './assets/css/Login.css'
class Login extends Component{
    state={
      guestname:'123',
      guestpassword:'123',
      username: '',
      password: ''
    }
    handleUsernameInput = (e) => {
      this.setState({username: e.target.value});
    };
  
    handlePasswordInput = (e) => {
      this.setState({password: e.target.value});
    };
    handleSubmit = async(e) => {  // async可以配合箭头函数
      this.setState({requesting: true});
      const username = this.state.username;
      const password = this.state.password;
    };
    render(){
        return(
          <div id="loginDIV">

            <div className="login">
              <h1>{globalConfig.name}</h1>
              <form onSubmit={this.handleSubmit}>
                <input className="login-input" type="text" value={this.state.username}
                      onChange={this.handleUsernameInput} placeholder="用户名" required="required"/>
                <input className="login-input" type="password" value={this.state.password}
                      onChange={this.handlePasswordInput} placeholder="密码" required="required"/>
                <button className="btn btn-primary btn-block btn-large"
                        type="submit" disabled={this.state.requesting}>
                  登录
                </button>
              </form>
            </div>

          </div>
        );
    }
}

export default Login;