import React, { Component } from "react";
import axios from "axios";
import './ProfileList.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class PersonList extends Component {

    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data.results);
            const persons = res.data.results;
            this.setState({ persons });
        });
      
    }

    render() {
        return (
            <div className="user-list">
                <h1 className="header">USER LIST</h1>
                { this.state.persons.map((person, index) => (
                    <div key={index} className="user-profile">
                        <div className="user-header">
                            <img
                                src={person.picture.large}
                                alt={`${ person.name.first } ${ person.name.last }`}
                                className="user-picture"
                                
                            />
                            <h2>{`${ person.name.title } ${ person.name.first } ${ person.name.last }`}</h2>
                            <p>{ person.login.uuid }</p>
                        </div>
                        <div className="user-details">
                            <p><strong>User Name: </strong> { person.login.username }</p>
                            <p><strong>Gender: </strong> { person.gender.toUpperCase()}</p>
                            <p><strong>Time Zone:</strong> { person.location.timezone?.description || 'NA' }</p>
                            <p>
                                <strong> Address: </strong> {`${ person.location.street.numer } ${ person.location.street.name },
                                                              ${ person.location.city}, ${ person.location.state }, 
                                                              ${ person.location.country } - ${ person.location.postcode } `}
                            </p>
                                <p><strong>Email: </strong>{ person.email }</p>
                                <p><strong>Birth Date and Age: </strong> { person.dob.date.substring(0, 10)} ({ person.dob.age } years)</p>
                                <p><strong>Registration Date: </strong> { person.registered.date.substring(0, 10)}</p>
                                <p><strong>Phone: </strong> { person.phone }</p>
                                <p><strong>Cell: </strong> { person.cell }</p>
                                <p><button className="more-btn">Details</button></p>

                            
                        </div>

                    </div>
                ))}

            </div>
        )
    }
}

export default PersonList;
