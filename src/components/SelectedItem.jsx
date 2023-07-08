import React, { useState } from "react";

export default function SelectedItem() {
  const options = [
    {
      value: 1,
      name: "선택하세요",
    },
    {
      value: 2,
      name: "검은색바지",
    },
    {
      value: 3,
      name: "파란색바지",
    },
    {
      value: 4,
      name: "빨간색바지",
    },
  ];
  const [selectedOption, setSelectedOption] = useState("");

  const onChangeOptionHandler = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div>
      {/* select의 value속성은 문자열로 처리된다. */}
      <select value={selectedOption} onChange={onChangeOptionHandler}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <br />
      <br />
      <span>
        {/* selectedOption는 문자열이고, option의 value는 숫자이기 때문에 parseInt를 사용해 숫자로 변환한다. */}
        {selectedOption &&
          options.find((option) => option.value === parseInt(selectedOption))
            .name}
      </span>
    </div>
  );
}
