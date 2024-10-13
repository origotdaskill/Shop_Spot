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

1. PORT: 5000 
2. DATABASE_URL: The connection string for your database.

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

### Authentication
- **POST** `/api/auth` - Authentication routes for user login, registration, etc.

### Admin
- **GET/POST/PUT/DELETE** `/api/admin/products` - Manage products in the admin panel.
- **GET/POST/PUT/DELETE** `/api/admin/orders` - Manage orders in the admin panel.

### Shop
- **GET/POST/PUT/DELETE** `/api/shop/products` - Product-related routes for the shop.
- **GET/POST/PUT/DELETE** `/api/shop/cart` - Manage cart items in the shop.
- **GET/POST/PUT/DELETE** `/api/shop/address` - Address-related routes for the shop.
- **GET/POST/PUT/DELETE** `/api/shop/order` - Manage orders for customers in the shop.
- **GET** `/api/shop/search` - Product search functionality in the shop.
- **GET/POST/PUT/DELETE** `/api/shop/review` - Product review routes.

### Common
- **GET/POST/PUT/DELETE** `/api/common/feature` - Common features accessible by both admin and shop.

## Contributing
We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE.txt) file for details.

Thank you for contributing to the **Shop Spot** server!