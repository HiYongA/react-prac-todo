import React, { useState } from "react";
import { styled } from "styled-components";

export default function DarkMode() {
  const [mode, setMode] = useState(false);

  return (
    <>
      <ModeStyle mode={mode}>{mode ? "다크모드!" : "화이트모드!"}</ModeStyle>
      <input
        type="checkbox"
        name="mode"
        style={{ accentColor: "green" }}
        value={mode}
        onChange={() => setMode(!mode)}
      />
    </>
  );
}

// 스타일 컴포넌트에서 자바스크립트 표현식을 사용해야 할 때, 템플릿 리터럴( =${}) 문법을 활용한다.
const ModeStyle = styled.p`
  /* 콜백 함수를 사용한 이유는 'mode'prop의 값을 인자로 받아 동적인 스타일링을 하기 위해서이다. */
  background-color: ${({ mode }) => (mode ? "black" : "white")};
  color: ${({ mode }) => (mode ? "white" : "black")};
`;
