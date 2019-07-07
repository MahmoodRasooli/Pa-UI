import React, {Component} from 'react';
import logo from './logo.svg';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
    username:'',
    password:''
    }
  } 
  
   SignUp(){
    console.log(this.state);
   }
  
  render (){
    return(
    <form>
    <div className="form-group">
    <input type="text" name="username" className="form-control" onChange={event=>this.setState({username:event.target.value})} placeholder="username" ></input>
    </div><br/>
  
    <div className="form-group"> <input type="password" name="password"  onChange={event=>this.setState({password:event.target.value})}  className="form-control" placeholder="password"></input></div> 
    <button className="btn btn-success" onClick={()=>this.SignUp()}>signUp</button>
  </form>
    )
  }
  
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          pashmam from app js.
        </p>
<SignUp/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
