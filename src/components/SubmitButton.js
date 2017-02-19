var React = require('react');

function SubmitButton (props) {
	return <button onClick={props.handleSubmit}>Add</button>
}

module.exports = SubmitButton;