import {gql} from 'apollo-boost';

export const GET_EVENTS = gql `
{
  events {
    title
    description
    price
    date
    creator {email}
    atendees {title description}
  }
}
`;
