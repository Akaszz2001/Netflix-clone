import React from 'react'
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
 