
import React, {Component} from 'react';

import axios from 'axios';  


class Pays extends Component{
    constructor(props){
        super(props);
        this.state = {
            region: []
        }
    }
    componentDidMount(){
        axios.get('https://restcountries.com/v3.1/all')
        .then(res =>{
            const region = res.data;
            this.setState({region});
        })
       
    }
render(){
    
    return (
        <div>
        <table>
<thead>
    <tr>
      
       
        <th scope="col">Les pays du monde</th>
        <th scope="col">Les Drapeaux</th>
        <th scope="col">Les capitales</th>
        <th scope="col">Population</th>
      
    </tr>
</thead>

    <tbody>


    <tr>
        
        <td>{ this.state.region.map(region =>
          <ul>{region.name.common}</ul>)}
        </td> 
        <td>{ this.state.region.map(region =>
          <ul>{region.flag}</ul>)}
        </td> 
        
        <td>{ this.state.region.map(region =>
          <ul>{region.capital}</ul>)}
        </td> 
        <td>{ this.state.region.map(region =>
          <ul>{region.population}</ul>)}
        </td> 

</tr>
        </tbody>
        </table>
  
   </div>
    );
    }

}


export default Pays;