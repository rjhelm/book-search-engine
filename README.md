
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/rjhelm/book-search-engine">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">book-search-engine</h3>

  <p align="center">
    A book searching tool that allows users to register and login, they can save books they search for later.
    <br />
    <a href="https://github.com/rjhelm/book-search-engine"><strong>The Repo »</strong></a>
    <a href="https://secret-beyond-27659.herokuapp.com/">Deployed At<strong>The Repo »</strong></a>
    <br />
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Book Search Engine Screenshot][product-screenshot]](./assets/book-searched.png)

This is a book search engine web app that utilizes a react front-end, express backend. It utilizes several tools including:
GraphQL, ApolloClient, GoogleBooks API. GraphQL typeDefs and resolvers allow for several queries and mutations based on the model data,
this made testing in development simple and straightforward.

Mongoose and MongoDB were used on the back-end to store data based on the schema that was created in the project.

Users can register for an account and a token is created with JSONwebtoken, allowing for authentication, the user is then able to save book info after a search and login at a later time to view what they have saved.

The app uses brcypt to protect the user's personal information, that way they can securely login and not worry about security.

Deployed on Heroku
### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Express](https://expressjs.com/)
* [GraphQL](https://www.apollographql.com/docs/apollo-server/)
* [React](https://reactjs.org/)
* [Apollo](https://www.apollographql.com/docs/apollo-server/)
* [Node](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)

## Getting Started

npm install (to install dependencies)

npm start:dev (for development enviornment)

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

npm
Node must be installed on your computer.

## Contact

Your Name - [@ryanj_dev](https://twitter.com/ryanj_dev) - ryjhelm@gmail.com

Project Link: [https://github.com/rjhelm/book-search-engine](https://github.com/rjhelm/book-search-engine)

