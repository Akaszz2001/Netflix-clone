import React from 'react'
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import {netflixOriginals,actions} from '../src/components/url.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={netflixOriginals} title='Netflix Originals'/>
      <RowPost url={actions} title='Action' isSmall type/>
    </div>
  );
}

export default App;
 