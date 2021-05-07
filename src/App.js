import React,{Component} from 'react';
import './App.css';
import Cards from './components/cards/cards';
import Search from './components/search/search'
class App extends Component {
  state = { 
    monsters:[],
    serarchText:''
   }
   componentDidMount() {
     fetch('http://jsonplaceholder.typicode.com/users')
     .then(response=>response.json())
     .then(user=>this.setState({monsters:user}))
   }
   handelChange = (e)=>{
    this.setState({serarchText:e.target.value})
   }
  render() { 
    const {monsters,serarchText} = this.state
    const filter = monsters.filter(e=>e.name.toLowerCase().includes(serarchText.toLowerCase()))
    return ( 
      <div className="containers">
        <Search change = {this.handelChange} />
        <Cards monsters={filter} />
        </div>
     )
  }
}
 
export default App;
