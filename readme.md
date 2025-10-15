# Mini Quora Posts App — Node.js & Express

A simple **CRUD web app** to manage posts, built with **Node.js**, **Express**, and **EJS**. This is a learning project focusing on RESTful routes and form handling.

---

## Core Features

- **Create Posts**: Users can add new posts with a username and content.
- **Read Posts**: View all posts or a single post in detail.
- **Update Posts**: Edit existing posts via a form.
- **Delete Posts**: Remove posts using a delete button.
- **Dynamic Rendering**: Uses **EJS templates** to render posts dynamically.
- **In-Memory Database**: Posts are stored in a server-side array (no persistent database).

---
## Tech Stack

- **Backend**: Node.js & Express.js
- **Templating**: EJS
- **Form Method Override**: `method-override` for PATCH & DELETE
- **UUID**: `uuid` package to generate unique post IDs
- **Static Assets**: Served from `/public`
