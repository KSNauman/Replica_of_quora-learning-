# 🧠 Project Summary: Mini Quora Clone (/posts)

A simple **CRUD Express.js application** using **EJS views** for rendering a Quora-style post system, with in-memory data and routes for creating, reading, updating, and deleting posts.

---

## 🧩 Technologies Used

- **Express.js** – Backend server and routing  
- **EJS** – Template engine for dynamic HTML rendering  
- **UUID** – To generate unique IDs for each post  
- **method-override** – To simulate PUT/PATCH/DELETE from forms  
- **HTML/CSS** – Basic front-end views and styles  


## 🔄 Backend: index.js Summary

### 🔧 Setup

- `express.static()` to serve static files from `/public`  
- `express.urlencoded()` to parse form data  
- `method-override()` to support PUT/PATCH/DELETE via query param `?_method=`  
- View engine set to EJS and views directory configured  
- Posts data stored in an in-memory array (with `uuid` for unique IDs)  

---

## 📍 Route Overview

| Route            | Method | Purpose                            |
|------------------|--------|------------------------------------|
| `/posts`         | GET    | List all posts                     |
| `/posts/new`     | GET    | Show form to create a new post     |
| `/posts`         | POST   | Submit new post                    |
| `/posts/:id`     | GET    | Show one post in detail            |
| `/posts/:id/edit`| GET    | Show edit form for a post          |
| `/posts/:id`     | PATCH  | Update a post’s content            |
| `/posts/:id`     | DELETE | Delete a post                      |

---

## 🧾 Views Summary

### 📄 `index.ejs` (Home Page)

- Loops over `posts[]` and displays each post (`username` + `content`)  
- Each post includes:
  - Link to show full post
  - Link to edit
  - DELETE button using `?_method=DELETE`
- Link at bottom to create a new post

---

### 📝 `new.ejs` (Create Post Form)

- Simple HTML form with:
  - `username` input  
  - `content` textarea  
- Form submits to `/posts` via `POST`

---

### 🛠 `edit.ejs` (Edit Post Form)

- Displays `post id` and `username` (non-editable)  
- Editable content in `<textarea>`  
- Form submits to `/posts/:id?_method=PATCH` via `POST`

---

### 🔍 `show.ejs` (Show One Post)

- Shows detailed view of selected post (`ID`, `username`, `content`)  
- Link to go back to all posts

---

## 🎨 `style.css`

- `h1`: maroon text, grey background  
- `.post`: background color  
- `.user`: italic font style  

---

## 💡 Key Concepts Reinforced

- **GET vs POST**:
  - `GET` used to retrieve forms/pages (e.g., form to create or edit)
  - `POST` used to submit data to server (e.g., form submission)

- **RESTful routes** pattern followed  
- **Form limitations** (only GET and POST) handled via `method-override`  
- **UUID** for unique object ID simulation  
- **Template rendering** with dynamic data using EJS  
