const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Event {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
        creator: User!
        atendees: [Company!]
    }

    type Company {
        _id: ID!
        title: String!
        description: String!
        
    }

    type User {
        _id: ID!
        email: String!
        password: String
    }

    input EventInput {
        title: String!
        description: String!
        price: Float!
        date: String!
    }

    input CompanyInput {
        title: String!
        description: String!
    }

    input UserInput {
        email: String!
        password: String!
    }

    type RootQuery {
        events: [Event!]!
        company: [Company!]
    }

    type RootMutation {
        createEvent(eventInput: EventInput): Event
        createUser(userInput: UserInput): User
        createCompany(companyInput: CompanyInput): Company
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);