var React = require('react');
var ToDoInput = require('../components/ToDoInput');
var SubmitButton = require('../components/SubmitButton');
var List = require('../components/List');

var ToDoListContainer = React.createClass({
	toDoID: 0,

	getInitialState: function() {
		return {
			userInput: '',
			toDoList: []
		};
	},

	handleUserInput: function(e) {
		this.setState({
			userInput: e.target.value
		});
	},	

	handleSubmit: function() {
		var toDo = {text: this.state.userInput, id: this.toDoID};
		this.state.toDoList.push(toDo);
		document.getElementById('input').value = '';
		this.toDoID++;
		this.setState({
			toDoList: this.state.toDoList
		});
	},

	handleRemove: function(id) {
		var remainder = this.state.toDoList.filter(function(elem) {
			if (elem.id !== id) return elem;
		});
		this.setState({toDoList: remainder});
	},

	render: function() {
		return (
			<div>
				<h1>Nates Todo List</h1>
				<ToDoInput handleUserInput={this.handleUserInput} />
				<SubmitButton handleSubmit={this.handleSubmit}/>
				<List list={this.state.toDoList} handleRemove={this.handleRemove}/>
			</div>
		);
	}
});

module.exports = ToDoListContainer;