import React, {Component} from 'react';

import axios from 'axios';  


class Europe extends Component{
    constructor(props){
        super(props);
        this.state.europe = {
            europe: []
        }
    }
    componentDidMount(){
        axios.get('https://restcountries.com/v3.1/region/europe')
        .then(res =>{
            const europe = res.data;
            this.setState({europe});
        })
       
    }
render(){
    
    return (
        <div>
        <table>
<thead>
    <tr>
      
       
        <th scope="col">Les pays</th>
        <th scope="col">Les Drapeaux</th>
        <th scope="col">Les capitales</th>
        <th scope="col">Population</th>
      
    </tr>
</thead>

    <tbody>


    <tr>
        
        <td>{ this.state.europe.map(europe =>
          <ul>{europe.name.common}</ul>)}
        </td> 
        <td>{ this.state.europe.map(europe =>
          <ul>{europe.flag}</ul>)}
        </td> 
        
        <td>{ this.state.europe.map(europe =>
          <ul>{europe.capital}</ul>)}
        </td> 
        <td>{ this.state.europe.map(europe =>
          <ul>{europe.population}</ul>)}
        </td> 

</tr>
        </tbody>
        </table>
  
   </div>
    );
    }

}


export default Europe;