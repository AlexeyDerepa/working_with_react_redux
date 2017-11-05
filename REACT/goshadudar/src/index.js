import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const games = [
    { name: 'game 1', age: 10 },
    { name: 'game 2', age: 11 },
    { name: 'game 3', age: 12 },
    { name: 'game 4', age: 13 },
];

class Block extends React.Component {
    render() {
        return (<h3>itProger</h3>);
    }
};
class Check extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        };
        //this.handleCheck = this.handleCheck.bind(this);

    }
    // handleCheck() {
    //     this.setState(prevState => ({ checked: !prevState.checked }));
    // }
    handleCheck = () => {
        this.setState({ checked: !this.state.checked });
    };
    render() {
        var message;
        if (this.state.checked) {
            message = 'choice';
        } else {
            message = 'not choice';
        }

        return (
            <div>
                <input
                    type='checkbox'
                    defaultChecked={this.state.checked}
                    onChange={this.handleCheck} />
                <h2>checkbox is {message} </h2>
            </div>
        );
    }
};
class Field extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                'some 1',
                'some 2',
                'some 3',
            ]
        }
    }
    eachTack = (item, index) => {
        return <Task key={index} index={index} updateText={this.updateText} deleteBlock={this.deleteBlock}>
            {item}
        </Task>
    }
    deleteBlock = (index) => {
        var arr = this.state.tasks;
        arr.splice(index, 1);
        this.setState({ tasks: arr });
    }
    updateText = (text, index) => {
        var arr = this.state.tasks;
        arr[index] = text;
        this.setState({ tasks: arr });
    }
    handleClickNewTask = (text) => {
        var arr = this.state.tasks;
        arr.push(text);
        this.setState({ tasks: arr });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClickNewTask.bind(null,'text by default')}>New Task</button>

                {
                    this.state.tasks.map(this.eachTack)
                }
            </div>

        );
    }
};

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        };
        //this.handleClickEdit = this.handleClickEdit.bind(this);
        //this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleClickEdit = () => {
        this.setState({ edit: true });
    }

    handleClickDelete= () => {
        console.log('remove');
        this.props.deleteBlock(this.props.index);
    }
    handleClickSave = () => {
        this.props.updateText(this.refs.text.value, this.props.index);
        this.setState({ edit: false });
    }
    rendNorm = () => {
        return (
            <div>
                <div>{
                    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    this.props.children
                } </div>
                <button onClick={this.handleClickEdit}>Edit</button>
                <button onClick={this.handleClickDelete}>DELETE</button>
            </div>
        );
    }
    rendEdit = () => {
        return (
            <div>
                <textarea defaultValue={this.props.children} ref="text"></textarea>
                <button onClick={this.handleClickSave}>SAVE</button>
            </div>
        );
    }

    render() {
        if (this.state.edit) {
            return this.rendEdit();
        } else {
            return this.rendNorm();
        }

    }
};
class GameList extends React.Component {
    render() {
        console.log(this.props.games);
        return (
            this.props.games.map(
                (game) => (
                    <Game name={game.name} age={game.age} />
                )));
    }
};
class Game extends React.Component {
    render() {
        console.log(this.props.game);

        return (
            <div>
                <h1>Game {this.props.name} </h1>
                <h2>Age {this.props.age} </h2>
            </div>
        );
    }
};



const place = document.getElementById('root');

ReactDOM.render(<Field />, place);
registerServiceWorker();
