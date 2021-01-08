import React from "react";
import PropTypes from 'prop-types';

//함수형 컴포넌트를 선언할 때 function과 화살표 함수에는 별다른 차이가 없기 때문에
//쓰고 싶은거 아무거나 쓰면 된다.
const MyComponent = (props) => {
  const { name, children, favoriteNumber } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다. <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

//propTypes는 컴포넌트의 prop 자료형을 지정해 놓을 때 유용하다.
//C#의 enum과 비슷한 느낌인 것 같다.
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired //필수로 있어야되는 prop
};

export default MyComponent;
