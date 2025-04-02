# E-commerce Management System

This project defines an E-commerce Management System using MongoDB and Mongoose. It includes models for `User`, `Product`, `Category`, and `Order`, enabling efficient handling of an online store's data.

## Installation

Ensure you have Node.js and MongoDB installed, then install dependencies:

```bash
npm install mongoose
```

or

```bash
yarn add mongoose
```

## Models

### 1. User Model
The `User` model defines users who can register and manage their accounts.

#### Schema Definition:
```js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
```

#### Fields:
- `username`: A unique, lowercase string representing the user's name.
- `email`: A unique, lowercase string for user authentication.
- `password`: A required field storing the user's password.
- `timestamps`: Automatically adds `createdAt` and `updatedAt` fields.

### 2. Category Model
The `Category` model defines different product categories.

#### Schema Definition:
```js
import mongoose from "mongoose";

let categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
}, { timestamps: true });

export let Category = mongoose.model('Category', categorySchema);
```

#### Fields:
- `name`: A required string representing the category name.
- `timestamps`: Automatically adds `createdAt` and `updatedAt` fields.

### 3. Product Model
The `Product` model stores product details.

#### Schema Definition:
```js
import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    productImage: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export let Product = mongoose.model('Product', productSchema);
```

#### Fields:
- `description`: A required string describing the product.
- `name`: A required string for the product name.
- `productImage`: A string for storing image URLs.
- `price`: A number representing the product price.
- `stock`: A number indicating available stock.
- `category`: A reference to the `Category` model.
- `owner`: A reference to the `User` model.
- `timestamps`: Automatically adds `createdAt` and `updatedAt` fields.

### 4. Order Model
The `Order` model stores details about customer orders.

#### Schema Definition:
```js
import mongoose from "mongoose";

let orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
});

let orderSchema = new mongoose.Schema({
    orderPrice: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    orderItems: [orderItemsSchema],
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "cancelled", "delivered"],
        default: "pending"
    }
}, { timestamps: true });

export let Order = mongoose.model('Order', orderSchema);
```

#### Fields:
- `orderPrice`: A required string representing the total order price.
- `customer`: A reference to the `User` model.
- `orderItems`: An array of `orderItemsSchema`, which stores product details and quantity.
- `address`: A required string storing the shipping address.
- `status`: A string indicating the order status (`pending`, `cancelled`, `delivered`).
- `timestamps`: Automatically adds `createdAt` and `updatedAt` fields.

## Usage

To use these models, import them into your project:

```js
import { User } from "./models/User";
import { Category } from "./models/Category";
import { Product } from "./models/Product";
import { Order } from "./models/Order";

// Creating a new Product
const newProduct = new Product({
    name: "Laptop",
    description: "Gaming laptop with high performance",
    price: 1500,
    stock: 10,
    category: categoryId // Replace with a valid Category ID
});
newProduct.save();
```

## Conclusion
This system provides a structured approach to managing an e-commerce platform with MongoDB and Mongoose. You can extend it with authentication, payment processing, and additional features.

