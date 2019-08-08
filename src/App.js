import React,{Component}from 'react';
import {CardList} from './Component/card-list/card.list.component.jsx'
import './App.css';
import {SearchBox} from './Component/search-box/searchbox.jsx'


class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:"",

    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>this.setState({monsters:users}));
  }

  render(){
    const filterMonster = this.state.monsters.filter(monster=>
      monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='monster search'
          handleOnChange={e=>this.setState({searchField:e.target.value})}
          state={this.state}
        />
        <CardList monsters={filterMonster}>
        </CardList>
      </div>
    );
  }
}
export default App;
