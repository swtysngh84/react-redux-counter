import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';

class App extends Component { 
    render() {
    return (
      <div className="App">
       <p>Counter</p><br></br>
       <button onClick={this.props.onIncrementCounter}>+</button>
       <span>{this.props.count}</span>
       <button onClick={this.props.onDecrementCounter}>-</button>
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
   count:state.count
});
const mapDispatchToProps=dispatch=>{
  return{
    onIncrementCounter:()=>dispatch({type:'INC'}),
      onDecrementCounter:()=>dispatch({type:'DEC'})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
