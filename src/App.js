


import './App.css';

import React, { Component } from 'react'
import Plan from './Plan';

export default class App extends Component {
  state={
    items:[],
    text:""
  }

  handleChange= e=>{
    this.setState({text: e.target.value})
  }

  handletext=e=>{
    if(this.state.text !="")
    {
      const items = [...this.state.items,this.state.text]
      this.setState({items: items,text:""});
    }
  }
  handleDelete=id=>{
    console.log("delete",id);
    const Olditems=[...this.state.items];
    console.log("old items",Olditems);
    const items = Olditems.filter((element,i)=>
    {
      return i!==id
    })
    console.log("items",items)

    this.setState({items:items})
  
    
    
  }
  render() {
    
    return (
     
      <div className='container-fluid my-5'>
      <div className='row'>
        <div className='col-sm-6 mx-auto text-white shadow-lg p-3'>
         <h1 className='text-center'>Today's plan</h1>
         <div className='row'>
          <div className='col-9'>
          <input type ='text' placeholder='write your plan here' className='form-control' value={this.state.text}
            onChange={this.handleChange}
          />
          </div>
          <div className='col-1'></div>
          <button className='btn btn-warning px-2 font-weight-bold ' onClick={this.handletext}>  Add  </button>
        </div>
      <div className='container-fluid'>
        <ul className='list-unstyled row m-5'></ul>
        {
          this.state.items.map((value,i) =>
          {
            return <Plan key={i} id={i}  sendData={this.handleDelete}  value={value}/>;
          })
        }
      </div>
</div>
</div>
      </div>
    )
  }
}



