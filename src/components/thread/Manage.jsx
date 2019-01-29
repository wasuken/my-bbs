import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import { InputGroup, InputGroupText, InputGroupAddon, Input, Button, ListGroup, ListGroupItem} from "reactstrap"

class Manage extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<InputGroup>
					<InputGroupAddon addonType="prepend">
						<InputGroupText>スレッド名入力</InputGroupText>
						<Input />
					</InputGroupAddon>
					<Button color="primary">作成</Button>{' '}
				</InputGroup>
			</div>
		)
	}
}

export default Manage;
