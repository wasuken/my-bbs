import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";
import MainBox from "./components/MainBox"

ReactDOM.render(
	<div>
	  <MainBox leftComponent={}
			   rightComponent={}
			   headerComponent={}
			   footerComponent={}/>
	</div>,
	document.getElementById("app"));
);
