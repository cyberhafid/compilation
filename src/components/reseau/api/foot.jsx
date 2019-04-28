import React, { Component } from 'react';
import axios from 'axios';
import './../../../App.css';


class Foot extends Component {
  state = {
    users: [],
    isLoading: true,
    errors: null
  };

  getUsers() {
    let config = {'X-Auth-Token': 'a8fd10c1a4ce46889c901ab960eaecb1'};
    axios
      .get('http://api.football-data.org/v2/competitions',{headers:config})
      .then(response =>
        response.data.competitions.map(user => ({
          id: `${user.id} `,  name: `${user.name} `, 
        
          
        }))
      )
      .then(users => {
        this.setState({
          users,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <React.Fragment>
        <h2>Random User</h2>
        <div>
          {!isLoading ? (
            users.map(user => {
              const { id, name, currentSeason } = user; 
              return (
                <div key={id}>
                  <p>{name}</p> <p>{currentSeason}</p>
                
               
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}



export default Foot;