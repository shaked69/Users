import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './features/UserList';
function App() {
  return (
    <div className="App">
        <UserList users={["ofekTal","liranMantz","zoeyZebra","roeiBason"]}></UserList>
    </div>
  );
}

export default App;
