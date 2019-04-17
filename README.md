# [JDLT](https://jdlt.co.uk) full-stack developer challenge

## Installation

* Clone the repository on your local machine
* From the terminal, navigate to the project root
* Run command:
```
$ yarn
```

## Run the application

* To open connection to MongoDB database:
```
$ mongod
```
* To seed the database:
```
$ yarn seed
```
* To start the server:
```
$ yarn start
```
* Navigate to http://localhost:4000/

# Technologies
* JavaScript, Node.js, Express.js, MongoDB, Mongoose, Webpack, Yarn, Babel, React, Axios, Git, GitHub, Bulma, Sass, Mocha, Chai, Supertest.

# Process
I started developing the application by creating the backend Express server and MongoDB NoSQL database. Mongoose was used to create the database schema for products.

Initially a single index route was created to access records held in the database. The index route takes two parameters (if provided), and returned only records which matched the supplier and product. To test this seeds data was added to populate the database with initial data.

Initial testing of the api route was carried out using Insomnia.

Once the basic backend server was developed and tested using Insomnia, I built the basic React application. This included components for a search bar and table of data received from the server.

To add further functionality, create, edit and delete routes were added as api routes. These routes were again tested using Insomnia to confirm the database was updated as expected.

A New and Edit product form was added to the React app to allow users to edit existing records, and add new records. A delete record functionality was also added to allow individual records to be deleted from the database.

To provide a cleaner UI, the New, Delete and Edit products were integrated into the index form.

As records could be added and updated the dropdown lists was changed to populate via a request for the latest records. This allows the drop down list to behave as a filter for records on the frontend.

Basic automated testing was carried out for the index and create api routes.

A basic graphQL server has been added to the backend. This allows queries to be made to obtain product information. NB: This section of code has been commented out as not all routes have been set up to support frontend functionality.

# If I had more time...

## Future features

1. Initial testing for the index and create api routes has been carried out. Testing should be extended to include the other routes; update and delete.

2. GraphQL is an API query language that has recently become very popular with modern applications. Although it's a new technology to me, I would have liked to implement this fully in the frontend and backend to improve my understanding of GraphQL. Given more time I would have replaced the RESTful routes with a GraphQL API.

3. Although a very simple application, the management of state within the React app became more difficult as components become more nested. To improve state management I would like to implement Redux as a state management tool.

4. As there are currently only a small number of records within the database, all records are added into state on loading the application. As the number of records increases I would only load records that the user has queried. This would be a relatively simple update to the frontend app, as the backend index route already allows for query parameters to be included in requests.
