import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import MainBox from "./components/MainBox"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ThreadCreate from './components/thread/Create'
import ThreadComment from './components/thread/Comment'
import ThreadManage from './components/thread/Manage'
import { Button, ListGroup, ListGroupItem} from "reactstrap"

const MyLinkList = styled.section`
	width: 100px;
	height: 300px
	overflow:scroll;
	float: right;
    -webkit-overflow-scrolling: touch;
	border-radius: 25px 0px 0px 25px;
`;
const MyThreadList = styled.section`
	width: 100px;
	height: 300px
	overflow:scroll;
	float: left;
    -webkit-overflow-scrolling: touch;
	border-radius: 25px 0px 0px 25px;
`;

const links = [
	{
		link: "https://twitter.com/black_box_rx?lang=ja",
		title: "twitter"
	},
	{
		link: "https://github.com",
		title: "github"
	},
	{
		link: "/thread/create",
		title: "create"
	},
	{
		link: "/",
		title: "home"
	}
]

const threadList = () => {
	let threads = [{title: "test"}];
	var request = new XMLHttpRequest();
	request.open('GET', '/api/v1/threads', false);
	request.send(null);

	if (request.status === 200) {
		threads = JSON.parse(request.responseText);
	}
	let ts = threads.map((v, i) => (
		<ListGroupItem key={i}>
			<Link to={"/thread/comments/" + v.title}>{v.title}</Link>
		</ListGroupItem>
	));
	let tms = threads.map((v, i) => (
		<ListGroupItem key={i}>
			<Link to={"/thread/manage/" + v.title}>{v.title}</Link>
		</ListGroupItem>
	));
	return (
		<div>
			<MyThreadList>
				<ListGroup>
					{ts}
				</ListGroup>
			</MyThreadList>
			<MyThreadList>
				<ListGroup>
					{tms}
				</ListGroup>
			</MyThreadList>
		</div>
	)
}

const header = (title) => (
	<Header title={title} />
);

const linkList = (ls) =>{
	let myLinks = ls.map((v, i) => (
		<ListGroupItem key={i}>
			<Link to={v.link}>{v.title}</Link>
		</ListGroupItem>
	));
	return (
		<MyLinkList>
			<ListGroup>
				{myLinks}
			</ListGroup>
		</MyLinkList>
	)
}

const startPage = () => (
	templatePage(threadList(),linkList(links))
);
const createThreadPage = () => (
	templatePage(<ThreadCreate />, linkList(links))
)
const templatePage = (leftComponent,rightComponent) => (
	<MainBox
	headerComponent={header("test")}
	leftComponent={leftComponent}
	rightComponent={rightComponent}
	/>
);

const commentThreadPage = (props) => {
	const {params} = props.match;
	return templatePage(<ThreadComment thread={params.thread} />, linkList(links))
};

const manageThreadPage = (props) => {
	const {params} = props.match;
	return templatePage(<ThreadManage thread={params.thread} />, linkList(links))
};

ReactDOM.render(
	<BrowserRouter>
		<div>
			<div style={{marginLeft: '50px'}}>
				<Switch>
					<Route path='/thread/create' component={createThreadPage}/>
					<Route path='/thread/comments/:thread' component={commentThreadPage}/>
					<Route path='/thread/manage/:thread' component={manageThreadPage}/>
					<Route component={startPage}/>
				</Switch>
			</div>
		</div>
	</BrowserRouter>,
	document.getElementById("app")
);
