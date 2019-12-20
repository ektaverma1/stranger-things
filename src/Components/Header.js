import React, { Component } from "react";
//import { data } from "../data/data";
//import LocalizedStrings from "react-localization";

export default class Header extends Component {
    render() {
        //let strings = new LocalizedStrings({data});
        return (
            <div className="header-container">
                <div className="custom-header">
                    <h1>Stranger Things in RTP</h1>
                </div>
                <div className="header-select">
                    <select className="custom-select" onChange={this.handleLanguageChange}>
                        <option>Language</option>
                        <option value="en">English</option>
                        <option value="la">Latin</option>
                    </select>
                </div>
            </div>
        )
    }
}