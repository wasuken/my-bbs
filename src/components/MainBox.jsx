import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom"
import styled from "styled-components"

const Header = styled.div`
    padding:10px 0px 5px 20px
	font-size:18px;
`;
const LeftBox = styled.div`
    padding:10px 0px 5px 20px
	font-size:18px;
`;
const RightBox = styled.div`
    padding:10px 0px 5px 20px
	font-size:18px;
`;
const BottomBox = styled.div`
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
			  <Header></Header>
			  <LeftBox></LeftBox>
			  <RightBox></RightBox>
			  <BottomBox></BottomBox>
			</div>
		)
	}
}
