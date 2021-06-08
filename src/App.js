import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state ={

    }
  }

  render(){
    return(
      <div>
        <HomePage />
      </div>
    )
  }
}

export default App;
