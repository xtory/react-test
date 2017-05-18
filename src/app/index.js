//alert('It wooooorks!');

var React = require('react');
var ReactDOM = require('react-dom');

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

var myCheese = {
    name: 'Camembert',
    price: '3.50'
};      

ReactDOM.render (
    <TodoComponent msg='I like cheese.' cheese={myCheese} />,
    document.getElementById('todo')
);
