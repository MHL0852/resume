import React, {Component} from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import {withRouter} from "react-router-dom";
@withRouter
export default class App extends Component {
    componentWillMount(){
        (function () {
            let computed = function () {
                let desW = 640,
                    devW = document.documentElement.clientWidth;
                if (devW >= 640) {
                    document.documentElement.style.fontSize = '100px';
                    return;
                }
                document.documentElement.style.fontSize = devW / desW * 100 + 'px';
            };
            computed();
            window.addEventListener('resize', computed, false);
        })();
    }
    render() {
        return (
            <div className="App">
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}
