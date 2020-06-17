import React from 'react';
import Courses from './courseHead'
import Course from './course'
import './App.css';

function App() {
  return (
    <div className="App">
      <Courses title="Web Development Course:">
        <Course course="HTML" />
        <Course course="CSS" />
        <Course course="JAVASCRIPT" />
        <Course course="React" />
        <Course course="NODEJS" />
      </Courses>
    </div>
  );
}

export default App;
