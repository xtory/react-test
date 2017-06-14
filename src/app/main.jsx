import React    from 'react';
import ReactDOM from 'react-dom';
import { Todo } from './todo.jsx';

var myCheese = {
    name: 'Camembert',
    price: '3.50'
};      

ReactDOM.render (
    <Todo msg='I like cheese.' cheese={myCheese} />,
    document.getElementById('todo')
);
