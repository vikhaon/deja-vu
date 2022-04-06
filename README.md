# Deja vu

**The project is not completely finished yet.**

It's an E-commerce application that was built with the MERN stack.

- The user can register
- login
- logout
- browse the responsive website on any device
- sort the products based on price
- add product(s) to the cart based on size/color of the item
- remove the added products
- checkout with the cart's cargo and pay for the products with stripe. `todo`: have to upgrade from the legacy api

`UI`: React with:

- styled-components for styling
- react-router-dom for navigation
- react-redux for managing app state (users, cart)
- stripe (have to update from the legacy api)

`Database`: MongoDB with:

- MongoDB Atlas for storing the database in the cloud

`Server`: Node.js backend with:

- Express.js framework
- Mongoose for schema based modelling
- JWT handles the authentication
- Crypto.js handles password encryption
