# Shop Spot Server

This directory contains the server-side code for the **Shop Spot** project. The server is built using Node.js and handles all backend operations, including API endpoints, database interactions, and authentication.

## Table of Contents

- [Structure](#structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Structure

The server code is organized into the following directories and files:

- **controllers/**: Contains the logic for handling requests and responses.
- **helpers/**: Utility functions and middleware.
- **models/**: Database models and schemas.
- **routes/**: API route definitions.
- **server.js**: Main entry point for the server.
- **package.json**: Project metadata and dependencies.
- **vercel.json**: Configuration for deployment on Vercel.

## Installation

To set up the server locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/origotdaskill/Shop_Spot.git
   ```

2. **Navigate to the server directory**:

    ```bash
    cd Shop_Spot/server
    ```
3. **Install dependencies**:
```bash
npm install
```
## Configuration

PORT: 5000 

DATABASE_URL: The connection string for your database.

## Scripts

1. **Start the server**:
```bash
npm start
```
2. **Run in development mode** :
```bash
npm run dev
```

## Endpoints

 ### Here are some key API endpoints :
**User Authentication**:
- `POST /api/auth/login`: Log in a user
- `POST /api/auth/register`: Register a new user

**Products**:
- `GET /api/products`: Retrieve all products
- `POST /api/products`: Add a new product

**Orders**:
- `GET /api/orders`: Retrieve all orders
- `POST /api/orders`: Create a new order

## Contributing
We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

Thank you for contributing to the **Shop Spot** server!