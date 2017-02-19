var React = require('react');

var ListItem = React.createClass({
	_handleRemove: function() {
		this.props.handleRemove(this.props.elem.id);
	},

	render: function() {
		return (
			<li key={'item' + this.props.elem.id}><button onClick={this._handleRemove}>-</button>{this.props.elem.text}</li>
		);
	}
});

function List(props) {
	var list = props.list.map(function(elem, i) {
		return <ListItem elem={elem} handleRemove={props.handleRemove}/>
		//return <li key={'item' + elem.id}><button onClick={() => props.handleRemove(elem.id)}>-</button>{elem.text}</li>
	});
	return <p>{list}</p>
}

module.exports = List;