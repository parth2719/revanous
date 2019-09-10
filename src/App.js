import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import businesslist from './components/businesslist/businesslist';


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <businesslist /> 
  </div>
    
  );
  }
}

export default App;
