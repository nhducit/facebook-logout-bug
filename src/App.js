import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    login = () => {
        window.FB.login(function (response) {
            // Handle the response object, like in statusChangeCallback() in our demo
            // code.
        });
    }

    logout = () => {
        window.FB.logout(function (response) {
            // Person is now logged out
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.login}>Login</button>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default App;
