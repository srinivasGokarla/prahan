﻿# 🎬 Node.js Movie Management Backend

A mini backend system built with **Node.js**, **Express.js**, and **MongoDB** featuring:

- 🔐 JWT-based authentication
- 👥 Role-based access (Admin & User)
- 🎥 Movie management: manual + bulk Excel upload
- 🧾 Excel handling with `multer` and `xlsx`

---

## 🚀 Features

### ✅ Authentication & Roles
- Register and login for both Admin and Users
- JWT-based session management
- Middleware for role-based access control

### ✅ Admin Functionalities
- Add a single movie: `POST /movies`
- Bulk upload movies via Excel: `POST /movies/bulk-upload`
- List movies with filters and pagination: `GET /movies`

### ✅ User Functionalities
- Login and access movie listing: `GET /movies`

---

## 📁 Folder Structure

movie-backend/
├── controllers/
│ ├── authController.js
│ └── movieController.js
├── middleware/
│ ├── authMiddleware.js
│ └── roleMiddleware.js
├── models/
│ ├── User.js
│ └── Movie.js
├── routes/
│ ├── authRoutes.js
│ └── movieRoutes.js
├── config/
│ └── db.js
├── uploads/ (for Excel files)
├── server.js
├── .env
├── package.json


---



## ⚙️ Setup Instructions

### 1. 📦 Create env file and add below values

PORT=5000
MONGO_URI ="mongodb+srv://Srinivas:Srinivas@cluster0.eu5eekh.mongodb.net/prahan?retryWrites=true&w=majority"
JWT_SECRET= prahan


### 2. 📦 Install Dependencies

``` install dependependencies
npm install

```


### 2. 📦Run the project

``` start the project

npm run dev

```


