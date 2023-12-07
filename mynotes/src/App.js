import React, { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';
import FolderList from './components/FolderList';

function App() {
  const [folders, setFolders] = useState([]);

  const addFolder = (folderName) => {
    const newFolders = [...folders, folderName];
    setFolders(newFolders);
  };

  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <FolderList folders={folders} onAddFolder={addFolder} />
          <Routes>
            <Route path='/' element={<NotesListPage />} />
            <Route path='/note/:id' element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
