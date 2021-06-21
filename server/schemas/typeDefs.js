const { gql } = require('apollo-server-express'); // template function gql tagged //

const typeDefs = gql`
type Book {
    _id: ID!
    bookId: String
    authors: [String]
    # authors: String
    description: String
    title: String
    image: String
    link: String
}
type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

`;