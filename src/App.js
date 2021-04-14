import React from 'react';
import Hello from './Hello';
import Hello2 from './Hello2';
import './App.css'
import Wrapper from './Wrapper';
function App() {
  const name='react'
  const style={
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <Wrapper>
      <Hello/>
      <Hello2 name="props react" color='red'/>
      <Hello2 color='pink'/>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Wrapper>
  );
}
      //1. 태그는 모두 닫힌 태그여야 함
      //2. 2개 이상의 태그는 모두 하나의 태그로 감싸줘야 함
          //별도로 <></div>로 감싸면 불필요한 태그 없이 감쌀 수 있음
      //3. ()는 가독성을 위해 사용한 것(없어도 괜찮음)
      //4. 변수 사용 시(js 사용 시) {중괄호}로 감싼 후 사용
      //5. react에서 style 사용 시 객체를 만든 후 사용해야 함
      //6. css적용 시 css파일에서 작성 후 id를 이용해 적용
      //7. JSX에서 주석 사용 시 {/* 주석 */}
export default App;
