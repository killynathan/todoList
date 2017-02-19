var React = require('react');

var ToDoInput = React.createClass({
	render: function() {
		return <input type="text" onChange={this.props.handleUserInput} id="input"/>
	}
});

module.exports = ToDoInput;