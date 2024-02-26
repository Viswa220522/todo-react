// App.js
import React from 'react';
import './App.css'; // Import CSS for styling
import TodoList from './TodoList';
import DarkModeToggle from './DarkModeToggle';

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-3">TODO LIST</h1>
      <DarkModeToggle />
      <TodoList />
      
    </div>
  );
}

export default App;
