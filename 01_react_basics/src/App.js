import Jsx from "./component/Jsx";
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0); // 초기값을 0으로 설정

  const handleClick = () => {
    setCount(count + 1); // 버튼 클릭시 상태값 증가
  };

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <buttonn onClick = {handleClick}>버튼</buttonn>
      <Jsx />
    </div>
  );
}

export default App;
