import React from 'react';

// Test:
/*
var TodoComponent = React.createClass ({
    render: function() {
        return (
            <div>
                <p><strong>{this.props.msg}</strong></p>
                <p><strong>Cheese name: {this.props.cheese.name}</strong></p>
                <p><strong>Cheese price: {this.props.cheese.price}</strong></p>
            </div>
        );
    }
});
*/

class Todo extends React.Component {
    render() {
        return (
            <div>
                <p><strong>{this.props.msg}</strong></p>
                <p><strong>Cheese name: {this.props.cheese.name}</strong></p>
                <p><strong>Cheese price: {this.props.cheese.price}</strong></p>
            </div>
        );
    }
}
// :Test

export { Todo };
