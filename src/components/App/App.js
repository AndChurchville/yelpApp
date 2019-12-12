import React from 'react';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import './App.css';
import Yelp from '../../util/Yelp.js'
import Business from '../Business/Business';

// const business = {
//   imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// }

// const businesses = [business,business,business,business,business,business];

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp=this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy){
    console.log('hello')
    Yelp.search(term, location, sortBy).then(businesses =>{
      this.setState({businesses:businesses});
    });
  }

  render(){
    return (
      <div className="App">
     <div className="back-button">
     <a class="button" href="https://andchurchvilleportfolio.netlify.com">Back</a>

     </div>
    <h1>Hungry City</h1>

    
      <SearchBar searchYelp={this.searchYelp} />
      
      <BusinessList businesses={this.state.businesses}/>
  </div>)
  }
}





export default App;
