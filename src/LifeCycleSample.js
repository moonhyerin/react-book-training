import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null; //ref를 설정할 부분

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    //props로 받아온 값을 state로 동기화 할 때 사용
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }

        return null;
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        //숫자의 마지막 자리가 4면 리렌더링 하지 않는다.
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }
    
    render() {
        console.log('render');

        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleSample;