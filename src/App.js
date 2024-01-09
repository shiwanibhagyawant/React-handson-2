import React, { Component } from 'react'
import "./App.css"

export class App extends Component {
  //Golden rule:If u want to store some data u have to use state.state can be changed using setState() function
  state={
    Name:"",
    Department:"",
    Rating:"",
    employees:[]
  }
  changeHandler = (e) => {
    //here we get whole input..for e.target...<input />line...e.target.type---to target type..
    // console.log(e.target);
    // console.log(e.target.value);
    // to update our state...console.log("ChangeHandler called..");
    //e:synthetic event(whole event)
    // console.log(e);
    this.setState({[e.target.name] : e.target.value })
    // console.log(e.target.name+":"+e.target.value);
    // console.log(this.state);
  }

  onSubmit = (e) =>{
    console.log(e.target);
    e.preventDefault();
    console.log("onsubmit event fired..");
    // this.setState({Name:"",Department:"",Rating:""});
    // An object created to store some data in  the form of key value pair.
    const emplObj={
      Name:this.state.Name,
      Department:this.state.Department,
      Rating:this.state.Rating,
    }
    //pushing data in to employees array...
    const arr = this.state.employees;
    arr.push(emplObj);
    this.setState({employees:arr})
  }
  render() {
    // const {Name,Department,Rating} = this.state
    return (
      <div className='container'>
        <h1>Employee Feedback Form</h1>
        {/* onSubmit={this.onSubmit} place it in place of action="" */}
        <form action="">
          <label htmlFor="Name">Name:</label><br/> 
          <input type="text" name="Name" value={this.state.Name} placeholder="Enter Your Name..." onChange={this.changeHandler}></input>
          {/* <input type="text" name="Name" value={Name} placeholder="Enter Your Name..." onChange={this.changeHandler}></input> */}
          <br/>
          <label htmlFor="Department">Department:</label><br/>
          <input type="text" name="Department" value={this.state.Department} placeholder="Enter your Department" onChange={this.changeHandler}></input>
          <br/>
          <label htmlFor="Rating">Rating:</label><br/>
          <input type="number" name="Rating" value={this.state.Rating} placeholder="Give your Rating" onChange={this.changeHandler}></input>
          <br/><br/>
          <button type="submit" onClick={this.onSubmit}>Submit</button>
        </form>
        
        <div className='data'>
          {this.state.employees.map((value,index,array)=>{
            return(
              <span key={index}>{value.Name}&nbsp;&nbsp;{value.Department}&nbsp;&nbsp;{value.Rating}&nbsp;&nbsp;</span>
            )
          }
          )}
        </div>
      </div>
    )
  }
}
export default App