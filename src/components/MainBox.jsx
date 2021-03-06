import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom"
import styled from "styled-components"

const Header = styled.div`
    padding:10px 0px 5px 20px
	font-size:18px;
`;
const LeftBox = styled.div`
    padding:10px 0px 5px 20px;
	float: left;
	width: 50%;
	font-size:18px;
`;
const RightBox = styled.div`
    padding:10px 0px 5px 20px
	width: 50%;
	float: right;
	font-size:18px;
`;
const FooterBox = styled.div`
    padding:10px 0px 5px 20px
	font-size:18px;
`;

class MainBox extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
			  <Header title={this.props.title}>{this.props.headerComponent}</Header>
			  <LeftBox>{this.props.leftComponent}</LeftBox>
			  <RightBox>{this.props.rightComponent}</RightBox>
			  <FooterBox>{this.props.footerComponent}</FooterBox>
			</div>
		)
	}
}
export default MainBox;
