import React, { useState } from "react";
import { nanoid } from "nanoid";
import { FaTrashAlt } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import SelectedItem from "./components/SelectedItem";
import DarkMode from "./components/DarkMode";
import { styled } from "styled-components";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      content: "리액트 공부하기",
      likeCount: 0,
    },
    {
      id: nanoid(),
      content: "아침 운동하기",
      likeCount: 0,
    },
  ]);
  const [content, setContent] = useState("");

  const onClickAddBtnHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: nanoid(),
        content,
        likeCount: 0,
      },
    ]);
    setContent("");
  };

  const onClickDeleteBtnHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onClickLikesBtnHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, likeCount: todo.likeCount + 1 } : todo
      )
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={onClickAddBtnHandler}>추가</button>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <span key={todo.id}>{todo.content}</span>
              <DeleteBtn onClick={() => onClickDeleteBtnHandler(todo.id)}>
                <FaTrashAlt />
              </DeleteBtn>
              {/* 좋아요 버튼 */}
              <LikesBtn onClick={() => onClickLikesBtnHandler(todo.id)}>
                <BsSuitHeartFill /> <span>{todo.likeCount}</span>
              </LikesBtn>
            </div>
          );
        })}
      </div>
      <SelectedItem />
      <DarkMode />
    </>
  );
}

const DeleteBtn = styled.button`
  background: transparent;
  border: none;
  padding: 5px;
`;

const LikesBtn = styled.button`
  background: transparent;
  border: none;
`;
