/* eslint-disable no-unused-vars */
import React from "react"
import TodoApp from "./components/TodoApp"
import { Route, Routes, BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter basename="/todoapp_react/">
        <Routes>
          <Route path='/' element={<TodoApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App