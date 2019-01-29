import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { Button, ListGroup, ListGroupItem} from "reactstrap"


const H2 = styled.h2`
	color: #505050;
	padding: 0.5em;
	line-height: 1.3;
	background: #dbebf8;
	vertical-align: middle;
	border-radius: 25px 0px 0px 25px;
`;

const Threads = styled.section`
	width: 100px;
	height: 300px
	overflow:scroll;
	float: left;
    -webkit-overflow-scrolling: touch;
	border-radius: 25px 0px 0px 25px;
`;

const LiA = styled.a`
	background:rgb(85%,85%,85%);
    border-left:3px solid rgb(25%,25%,25%);
    color:rgb(25%,25%,25%);
    padding:5px 10px;
    margin:0 0 10px 0;
    text-decoration:none;
	display: block;
	width: 40px;
	text-overflow: ellipsis;
	&:hover{
	width: 80px;
	background:rgb(60%,60%,60%);
	}
`;


class Header extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<H2>{this.props.title}</H2>
			</div>
		);
	}
}
export default Header;
