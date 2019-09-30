import React, { Component } from 'react';
import { Table } from 'reactstrap';
import {HttpLink} from 'apollo-link-http';
import gql from 'graphql-tag';
import { execute, /*makePromise */} from 'apollo-link';
import { useQuery } from 'react-apollo-hooks';

const uri = 'http://localhost:8000/graphql';
const link = new HttpLink({ uri });


const fetchEvents = {
    query: gql`query{events {title, description, creator{email}, atendees{title}}}`
};



const GET_EVENTS = gql ` 
{
events {
    title, description, creator{email}, atendees{title, description}
}
}`;

execute(link, fetchEvents).subscribe({
    next: data => console.log(`received data: ${JSON.stringify(data, null, 2)}`),
    error: error => console.log(`received error ${error}`),
    complete: () => console.log(`complete`),
    
})



class ListPage extends Component {
    

    

    
    render () {
        return(
            <React.Fragment>

            </React.Fragment>
        )
    }
        
    
}

export default ListPage;