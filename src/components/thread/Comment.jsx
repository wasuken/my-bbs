import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import { Label, FormGroup, InputGroup, InputGroupText, InputGroupAddon, Input, Button, ListGroup, ListGroupItem} from "reactstrap"

const BaloonLeft = styled.div`
	position: relative;
 	margin: 1.5em 0 1.5em 15px;
	padding: 7px 10px;
	min-width: 120px;
 	max-width: 100%;
 	color: #555;
	font-size: 16px;
	background: #e0edff;
	&:before{
	content: "";
	position: absolute;
	top: 50%;
	left: -30px;
 	margin-top: -15px;
	border: 15px solid transparent;
	border-right: 15px solid #e0edff;
	}
`;
const BaloonRight = styled.div`
	position: relative;
 	margin: 1.5em 15px 1.5em 0;
	padding: 7px 10px;
	min-width: 120px;
 	max-width: 100%;
 	color: #555;
	font-size: 16px;
	background: #e0edff;
	&:before{
	content: "";
	position: absolute;
	top: 50%;
	left: 100%;
 	margin-top: -15px;
	border: 15px solid transparent;
	border-left: 15px solid #e0edff;
	}
`;
const BaloonP = styled.p`
	margin: 0;
	padding: 0;
`;
class Comment extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			comments: this.getComments(this.props.thread_id)
		}
	}
	getComments(thread_id){
		let comments = [{comment: "test", comment_id: "1"}];
		let request = new XMLHttpRequest();
		request.open('GET', '/api/v1/comments/' + thread_id, false);
		request.send(null);

		if (request.status === 200) {
			comments = JSON.parse(request.responseText);
			console.log(comments);
		}
		return comments;
	}
	handleClick(){
		let comment = document.querySelector("#comment").value
		let that = this;
		fetch("/api/v1/comment", {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
			},
			redirect: "follow",
			referrer: "no-referrer",
			body: `thread_id=${this.props.thread_id}&comment=${comment}&user_id=1`
		}).then(data => {
			that.setState({
				comments: this.getComments(this.props.thread_id)
			})
		});
	}

	render(){
		let comments = this.state.comments.map((v, i) => {
			if(i % 2 == 0) {
				return <p><BaloonLeft><BaloonP key={i}>{v.comment}</BaloonP></BaloonLeft></p>;
			}else{
				return <p><BaloonRight><BaloonP key={i}>{v.comment}</BaloonP></BaloonRight></p>;
			}
		});
		return (
			<div>
				{comments}
				<InputGroup style={{width: "500px"}}>
					<InputGroupAddon addonType="prepend">
						<InputGroupText style={{width: "150px"}}>コメント入力</InputGroupText>
					</InputGroupAddon>
					<Input id="comment" />
					<Button id="comment-submit" onClick={this.handleClick.bind(this)}>送信</Button>
				</InputGroup>
			</div>
		)
	}
}

export default Comment;
