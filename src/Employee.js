import React, {Component} from 'react';
import axios from 'axios';  


class Employee extends Component{
    constructor(props){
        super(props);
        this.state = {
            persons: []
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            const persons = res.data;
            this.setState({persons});
        })
        console.log(this.state.persons);
    }
render(){
    
    return (
        <>
        <table>
<thead><th colSpan="5">Coordonnées</th></thead>
    <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Addresse</th>
        <th>Téléphone</th>
    </tr>
    { this.state.persons.map(person =>
<tr>
    <td>{person.name}</td>
    <td>{person.username}</td>
    <td>{person.email}</td>
    <td>{person.address.street} - {person.address.suite} . {person.address.city} - {person.address.zipcod}</td>
    <td>{person.name}</td>

</tr>

       
        )}

        </table>
  
   </>
    );
    }

}


export default Employee;



