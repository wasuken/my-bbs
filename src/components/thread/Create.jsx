import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import { Label, FormGroup, InputGroup, InputGroupText, InputGroupAddon, Input, Button, ListGroup, ListGroupItem} from "reactstrap"

class Create extends React.Component{
	constructor(){
		super();
	}
	handleClick(){
		let threadTitle = document.querySelector("#thread-title").value
		let threadDesc = document.querySelector("#thread-desc").value
		var formData = new FormData();
		formData.append('title', threadTitle);
		formData.append('description', threadDesc);
		fetch("/api/v1/thread", {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
			},
			redirect: "follow",
			referrer: "no-referrer",
			body: `title=${threadTitle}&description=${threadDesc}`
		}).then(data => console.log(data));
	}
	render(){
		return (
			<div>
				<InputGroup style={{width: "500px"}}>
					<InputGroupAddon addonType="prepend">
						<InputGroupText style={{width: "150px"}}>スレッド名入力</InputGroupText>
					</InputGroupAddon>
					<Input id="thread-title"  />
				</InputGroup>
				<InputGroup style={{width: "500px"}}>
					<InputGroupAddon addonType="prepend">
						<InputGroupText style={{width: "150px"}}>スレッド説明</InputGroupText>
					</InputGroupAddon>
					<Input type="textarea" name="text" id="thread-desc" />
					<Button color="primary" onClick={this.handleClick.bind(this)}>作成</Button>{' '}
				</InputGroup>
			</div>
		);
	}
}

export default Create;
