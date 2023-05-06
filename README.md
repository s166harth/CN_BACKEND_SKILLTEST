

# CN_BACKEND_SKILLTEST

This repository contains the solution for a backend coding test that evaluates the candidate's skills in building RESTful APIs using Node.js and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository to your local machine using the following command:

```
git clone https://github.com/s166harth/CN_BACKEND_SKILLTEST.git
```

2. Navigate to the project directory and install the dependencies:

```
cd CN_BACKEND_SKILLTEST
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```
PORT=3000
MONGODB_URI=<your-mongodb-uri>
```

4. Start the server using the following command:

```
npm start
```

## Usage

The API provides various endpoints for performing CRUD operations on the user data. You can access the API at `http://localhost:3000/api/users`.

## API Documentation

For detailed documentation on the API endpoints and their usage, please refer to the [API documentation](./API_DOCUMENTATION.md).

## Testing

This project uses Jest as its testing framework. To run the tests, use the following command:

```
npm test
```

## Contributing

Contributions to this project are welcome! To contribute, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the [MIT License](./LICENSE).
