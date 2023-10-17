# Real Estate MERN Stack App

This is a real estate website built using the MERN stack (MongoDB, Express, React, Node.js). 

## Features

- Browse listed properties for sale or rent
- Search for properties based on criteria like price, location, number of bedrooms etc
- View property details like photos, description, price, location etc
- Manage listings (for site admins) - add, edit or delete 
- User authentication and profiles
- Contact agents via the site
- And more...

## Usage

The frontend is built with React and makes requests to the Express + Node.js backend API. The backend connects to a MongoDB database to store and retrieve property listings, users and other data.

Some key components and services used:

- React for creating resuable UI components
- React Router for routing between pages 
- Redux for state management
- Express as the Node.js web framework
- Mongoose ODM for interacting with MongoDB
- JSON Web Tokens for authentication
- Bcrypt for password hashing
- Multer for file uploads 
- And more...

## Getting Started

### Prerequisites

- Node.js and NPM
- MongoDB instance

### Install

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm install
```

### Run

```bash
# Run client & server 
npm run dev

# Server runs on http://localhost:3000
# Client on http://localhost:5173
```

There are also scripts for running the client and server separately.

## License

This project is open source and available under the [MIT License](LICENSE).
