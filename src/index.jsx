import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";
import MainBox from "./components/MainBox"
import Header from "./components/Header"
import Footer from "./components/Footer"

const links = [
	{
		link: "https://twitter.com/black_box_rx?lang=ja",
		title: "twitter"
	},
	{
		link: "https://github.com",
		title: "github"
	}
]
const header = (title, lis) => (
	<Header title={title} lis={lis} />
)
const footer = (links) => {

}

ReactDOM.render(
	<div>
	  {header("title", links)}
	  <Footer />
	</div>,
	document.getElementById("app")
);
