import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";

class Header extends React.Component{
	constructor(){
		super();
	}
	render(){
		let lis = this.props.lis.map((v, i) => <li key="{i}">{v}</li>);
		return (
			<div>
				<h2>{this.props.title}</h2>
				<ul>
					{lis}
				</ul>
			</div>
		);
	}
}
export default Header;
