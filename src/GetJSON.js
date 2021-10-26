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

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <ol className="item">
                    {
                        users.map(user => (
                            <li key={user.id} align="start">
                                    <p className="title">{user.name}</p>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            );
        }
      
    }
  }
  
  export default GetJSON;