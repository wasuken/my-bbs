import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

class Comment extends React.Component{
	constructor(){
		super();
		let comment = [{comment: "test"}];
		var request = new XMLHttpRequest();
		request.open('GET', '/api/v1/thread', false);
		request.send(null);

		if (request.status === 200) {
			threads = JSON.parse(request.responseText);
		}
	}
	render(){
		return (
			<div>
				{this.props.thread}
			</div>
		)
	}
}

export default Comment;
