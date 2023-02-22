import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Component } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/searchbox/searchbox.component'
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchString:""
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(user=>this.setState(()=>{
      return {monsters:user}
    }
    ))
  }
  onSearchChange = (event)=>{
    const searchString = event.target.value.toLowerCase();
    this.setState(()=>{
      return { searchString}
    }
    )
  } 
  render(){
    const {monsters,searchString}= this.state;
    const {onSearchChange} =  this;
    const filteredMonsters = monsters.filter((monster)=>{return monster.name.toLowerCase().includes(searchString)})
    return(
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <h1 className='flex justify-center pt-20 pb-20 text-7xl' style={{fontFamily:"papa",fontWeight:"bold"}}>Monster Mania</h1>
        <SearchBox className='search-box p-5 mt-5 mb-10 text-center text-2xl rounded-xl border-4 border-green-500' onChangeHandler={onSearchChange} />
        <div>
          <CardList monster={filteredMonsters}/>
        </div>
      </div>
    );
  }
}

export default App
