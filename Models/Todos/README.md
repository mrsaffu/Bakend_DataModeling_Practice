# Todo Management System

This project defines a Todo Management System using MongoDB and Mongoose. It consists of three primary Mongoose models: `User`, `Todo`, and `Subtodo`. These models help structure and manage data for a task management system where users can create todos, mark them as complete, and associate subtasks with them.

## Installation

To use these models in your project, ensure you have Node.js and MongoDB installed. Then, install the necessary dependencies using npm or yarn:

```bash
npm install mongoose
```

or

```bash
yarn add mongoose
```

## Models

### 1. User Model
The `User` model defines users who can create todos. Each user has a unique username and email.

#### Schema Definition:
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
        required: [true, "Password required"]
    },
}, {
    timestamps: true
});

export const User = mongoose.model("User", userSchema);
```

#### Fields:
- `username`: A unique, lowercase string representing the user's name.
- `email`: A unique, lowercase string for user authentication.
- `password`: A required field storing the user's password.
- `timestamps`: Automatically adds `createdAt` and `updatedAt` fields.

### 2. Todo Model
The `Todo` model represents individual tasks created by users. Each task can have multiple `subTodos`.

#### Schema Definition:
```js
import mongoose from "mongoose";

let todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false,
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
});

export let Todo = mongoose.model("Todo", todoSchema);
```

#### Fields:
- `content`: A string representing the task's content.
- `complete`: A boolean field to track task completion (default: `false`).
- `createdBy`: A reference to the `User` model (who created the task).
- `subTodos`: An array of references to the `Subtodo` model.
- `timestamps`: Automatically adds `createdAt` and `updatedAt` fields.

### 3. Subtodo Model
The `Subtodo` model represents subtasks within a todo.

#### Schema Definition:
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

const Subtodo = mongoose.model("Subtodo", subTodoSchema);
```

#### Fields:
- `content`: A string representing the subtask's content.
- `complete`: A boolean field to track subtask completion (default: `false`).
- `createdBy`: A reference to the `User` model (who created the subtask).
- `timestamps`: Automatically adds `createdAt` and `updatedAt` fields.

## Usage

To use these models, import them into your project and integrate them with an Express.js API or any other backend framework.

Example:
```js
import { User } from "./models/User";
import { Todo } from "./models/Todo";
import { Subtodo } from "./models/Subtodo";

// Creating a new Todo
const newTodo = new Todo({
    content: "Complete Mongoose Tutorial",
    createdBy: userId // Replace with a valid User ID
});
newTodo.save();
```

## Conclusion
This project provides a well-structured foundation or practice for managing todos and subtasks within a user-based system. By leveraging MongoDB and Mongoose, it ensures efficient data handling and relationships between users, todos, and subtasks.

Feel free to extend these models to add more functionality, such as authentication, role-based access, or additional fields for customization.

