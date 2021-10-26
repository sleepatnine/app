import React, { Component } from 'react';

import "./GetJSON.css";

class GetJSON extends Component {

    constructor(props){
        super(props);

        this.state = {
            error : null,
            isLoaded : false,
            users : []          
        };
    }

    componentDidMount(){
        fetch("http://jsonplaceholder.typicode.com/users")
        .then( response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded : true,
                    users : result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, users} = this.state;

            return(
                <>
                {
                    !isLoaded ? <div>Loading ...</div> : null
                }

                {
                    error ? <div>Error in loading</div> : null
                }
                <ol className="item">
                {
                    users.map(user => (
                        <li key={user.id} align="start">
                                <p className="title">{user.name}</p>
                        </li>
                    ))
                }
                </ol>
            </>
        );
    }
      
}
  
  export default GetJSON;