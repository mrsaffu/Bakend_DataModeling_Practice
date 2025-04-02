# Backend Data Modeling with Express.js

## Overview
This document provides a structured guide for implementing backend data modeling using Express.js, including database schema design, API endpoints, and best practices for managing data effectively.

## Technologies Used
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM (Object Data Modeling) for MongoDB
- **Postman** - API testing tool


```



## Defining Data Models
This application consists of three data models: `User`, `Todo`, and `Subtodo`.

### User Model
Defines user details with unique constraints on `username` and `email`.

Example: `models/User.js`
```js
import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
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
        requred: [true, "Password required"]
    },
},{
    timestamps:true
  })
export const User = mongoose.model("User", userSchema)




### Todo Model
Defines tasks with references to the `User` and `Subtodo` models.

Example: `models/Todo.js`
```js
import mongoose from "mongoose";

let todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false

    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subtodo"
        }
    ]
    }, {
    timestamps: true
    })
    
    export let Todo = mongoose.model("Todo", todoSchema)



### Subtodo Model
Defines subtasks associated with a `Todo` and created by a `User`.
>>>>>>> 4a8cbbb (add redme)

Example: `models/Subtodo.js`
```js
import mongoose from "mongoose";

let subTodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

export const Subtodo = mongoose.model("Subtodo", subTodoSchema);
```

## Creating API Routes
Create RESTful routes to interact with the database.

Example: `routes/userRoutes.js`
```js
import express from "express";
import { User } from "../models/User.js";
const router = express.Router();

// Create a new user
router.post("/users", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
```

## Integrating Routes into the Application
In `server.js`, integrate routes:
```js
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use("/api", userRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
```

## Running the Application
Start the Express server:
```sh
npm start
```

## API Testing
Use Postman or cURL to test API endpoints.
- **Create User** (POST): `http://localhost:5000/api/users`
- **Get Users** (GET): `http://localhost:5000/api/users`

## Best Practices
- Use **dotenv** for environment variables.
- Implement **validation** using `express-validator`.
- Handle **error responses** properly.
- Secure passwords using **bcrypt**.
- Use JWT for **authentication**.

## Conclusion
This guide provides a foundation for backend data modeling using Express.js. You can extend this structure for additional models and API functionalities as per your project requirements.

<<<<<<< HEAD
const Subtodo = mongoose.model("Subtodo",subTodoSchema)
=======
>>>>>>> 4a8cbbb (add redme)
