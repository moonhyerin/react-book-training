import React, { Component } from "react";

class Counter extends Component {
    //state 초기값 설정하는 방법
    //1번 : constructor 사용하기
  /* constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0
    };
  } */
  //2번 : constructor 안하고 그냥 설정
  state = {
      number: 0,
      fixedNumber: 0
  }

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          //onClick : 컴포넌트가 클릭됐을 때의 이벤트 함수를 설정
          onClick={() => {
            //setState : 컴포넌트의 state를 변경
            this.setState((prevState) => {
                return {
                    number: prevState.number + 1
                }
            })
            this.setState(prevState => ({
                number: prevState.number + 1
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
