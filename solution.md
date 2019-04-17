# [JDLT](https://jdlt.co.uk) full-stack developer challenge

<!-- We're hoping to see how you approach a challenge and what sort of standards you use in your code so please feel free to be as creative as you like.

The [job spec](https://jdlt.co.uk/join/full-stack-developer) will help you understand what we'd like to see.

## Dependencies
* NPM / Yarn
## Instructions
From the project root folder:
```
$ npm install
```
OR
```
$ yarn
```
Then it's over to you!

**Please demonstrate:**
* Selecting suppliers and products in the drop-downs
* A round-trip to a server pulling back prices
* Displaying the returned data in the grid
* Anything else you'd like to show us

### Sample data

| Supplier    | Product      | Price (£) |
| ------------|--------------|-----------|
| New Co Ltd  | Small wongle | 5         |
| New Co Ltd  | Large wongle | 8         |
| New Co Ltd  | Super wongle | 12        |
| Old Co Ltd  | Mini wongle  | 4         |
| Old Co Ltd  | Small wongle | 6         |
| Old Co Ltd  | Large wongle | 9         |
| Old Co Ltd  | Super wongle | 13        | -->

## Installation

* Clone the repository on your local machine
* From the terminal, navigate to the project root
* Run command:
```
$ yarn
```

## Run the application

* Run command:
```
$ yarn seed
```
* Then:
```
$ yarn start
```
* Navigate to http://localhost:4000/

# Technologies
* JavaScript, Node.js, Express.js, MongoDB, Mongoose, Webpack, Yarn, Babel, React, Axios, Git, GitHub, Bulma, Sass, Mocha, Chai, Supertest.


# Process
I started developing the application by creating the backend Express server and MongoDB NoSQL database. Mongoose was used to create the database schema for products.

Initially a single index route was created to access records held in the database. The index route took two parameters (if provided), and returned only records which matched the supplier and product. To test this seeds data was added to populate the database with initial data.

Initial testing of the api route was carried out using Insomnia.

Once the basic backend server was developed and tested using Insomnia, I built the basic React application. This included components for a search bar and table of data received from the server.

To add further functionality, create, edit and delete routes were added as api routes. These routes were again tested using Insomnia to confirm the database was updated as expected.

A New and Edit product form was added to the React app to allow users to edit existing records, and add new records. A delete record functionality was also added to allow individual records to be deleted from the database.

To provide a cleaner UI, the New, Delete and Edit products were integrated into the index form.

As records could be added and updated the dropdown lists was changed to populate via a request for the latest records. This allows the drop down list to behave as a filter for records on the frontend.

Basic automated testing was carried out for the index and create api routes.

# If I had more time...

## Future features

1. Initial testing for the index and create api routes has been carried out. Testing should be extended to include the other routes, update and delete.

2. Graphql is a api query language that has recently become very popular with modern applicaition. Although it's a new technology to me I wanted to implement to improve my understanding of Graphql . If I had more time I would have replaced the RESTful routes with a Graphql api.

3. Although a very simple application the management of state within the React app became more difficult as components become more nested. To improve state management I would like to implement Redux as a statement tool.
