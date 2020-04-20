import React, { useState, useImperativeHandle } from 'react'

import Header from './components/Header'

import './App.css'

import backgroudImage from './assets/img/image01.jpeg'

const App = () => {
  const [projects, setProjects] = useState(['App', 'Front-end', 'Back-end'])
  
  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`])
  }

  return (
    <>
      <Header title="Projects">
        <img width={300} src={backgroudImage} />
        <ul>
          {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Add</button>
      </Header>
    </>
  )
}

export default App