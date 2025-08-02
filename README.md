# 🩸 Blood Donation Management System

A **Full-Stack Web Application** for managing blood donations, requests, inventory, and donor engagement. Built with modern web technologies to streamline blood bank operations and enhance donor accessibility.


## 🚀 Key Features

### User Portal
- 🔐 **JWT Authentication**: Secure login/registration
- 🗓️ **Appointment Scheduling**: Calendar integration for donations
- 🩸 **Blood Request System**: Real-time blood type availability checks
- 📊 **Donor Dashboard**: Track donation history and eligibility status
- 📚 **Educational Hub**: Articles/videos on donation safety

### Admin Portal
- 👥 **Role Management**: RBAC (Admin, Staff, Donor)
- 📦 **Inventory Management**: CRUD operations for blood stock

### Medical Staff Tools
- 🏥 **Eligibility Screening**: Digital health questionnaires
- 🏷️ **Blood Bag Tracking**: Barcode/UUID generation
- 🔄 **Cross-matching**: Virtual blood compatibility checks

## 🛠 Tech Stack

### Frontend
| Technology    | Purpose                     |
|--------------|----------------------------|
| React        | Component-based UI          |
| Vite         | Ultra-fast bundler          |


### Backend
| Technology    | Purpose                     |
|--------------|----------------------------|
| Node.js      | Runtime environment         |
| Express      | API framework               |
| Sequelize    | PostgreSQL ORM              |
| JWT          | Authentication tokens       |

### Infrastructure
| Technology    | Purpose                     |
|--------------|----------------------------|
| Railway      | DB/API hosting             |
| GitHub       | Version control            |
| Postman      | API testing                |


# 🩸 Blood Donation System – Project Structure


## 🖥️ Frontend (React + Vite)

- **public/**
  - images/                 → Static assets
- **src/**
  - **components/**         → Shared UI components
    - Footer.jsx
    - Logo.jsx
    - Navbar.jsx
  - **context/**            → React Contexts (e.g. Auth)
    - AuthContext.jsx
  - **layouts/**            → Page-level layouts
    - AuthLayout.jsx
    - MainLayout.jsx
  - **pages/**              → Main route views
    - Donation.jsx
    - Education.jsx
    - History.jsx
    - Home.jsx
    - Inventory.jsx
    - Login.jsx
    - NotFound.jsx
    - Request.jsx
    - SignUp.jsx
  - **services/**           → API wrappers and auth
    - api.js
    - auth.js
  - App.jsx
  - main.jsx
  - index.css
  - vite-env.d.ts
- .gitignore
- index.html
- postcss.config.js
- tailwind.config.js
- README.md
- package.json
- package-lock.json



## 🛠️ Backend (Express + Node.js)

- **config/**               → Application configuration files
  - db.config.js
  - jwt.config.js
- **controllers/**          → Request logic and handlers
  - appointment.controller.js
  - auth.controller.js
  - bloodInventory.controller.js
  - bloodRequest.controller.js
  - donor.controller.js
  - hospital.controller.js
  - user.controller.js
- **middleware/**           → Reusable middleware functions
  - auth.middleware.js
  - errorHandler.js
- **models/**               → Sequelize/Mongoose data schemas
  - appointment.model.js
  - bloodInventory.model.js
  - bloodRequest.model.js
  - donor.model.js
  - hospital.model.js
  - user.model.js
- **routes/**               → API endpoint definitions
  - appointment.routes.js
  - auth.routes.js
  - bloodInventory.routes.js
  - bloodRequest.routes.js
  - donor.routes.js
  - hospital.routes.js
  - user.routes.js
- **node_modules/**         → Installed dependencies
- app.js                    → Main application entry point
- .env                      → Environment variables
- .gitignore
- README.md
- package-lock.json
- package.json

---


## 🗃 Database Configuration

### Railway PostgreSQL Setup
1. Get credentials from Railway dashboard
2. Configure `backend/.env`:

```env
PGHOST=caboose.proxy.rlwy.net
PGUSER=postgres
PGPASSWORD=Your_password
PGDATABASE=postgres
PGPORT=10177

JWT_SECRET=Your_jwt_secret

# Environment
NODE_ENV=development
```

## ⚙ Setup Guide

### Prerequisites
- Node.js
- Express.js
- axios
- React.js
- PostgreSQL
- Git

### Backend Setup
```bash
cd backend
npm install
cp .env # Configure your Railway DB URL
npm run dev
```

### Backend Dependencies (Node.js/Express)
Core Dependencies (install with `npm install <package>`):
```bash
express
sequelize
pg pg-hstore  # PostgreSQL adapter
dotenv
cors
bcryptjs
jsonwebtoken
body-parser
```

Development Dependencies (install with `npm install -D <package>`):
```bash
nodemon
sequelize-cli
eslint
prettier
jest  # Testing
```

---
### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
### Frontend Dependencies (React)
Core dependencies
```bash
react
react-dom
react-router-dom
axios
@mui/material @emotion/react @emotion/styled  # Material UI
@mui/icons-material  # Material UI icons
formik yup  # Form handling
redux @reduxjs/toolkit react-redux  # State management
```

Development Dependencies:
```bash
@vitejs/plugin-react
eslint
prettier
@types/react @types/react-dom  # For TypeScript
vitest  # Testing
```

## 📡 API Documentation

### Auth Endpoints
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "donor@example.com",
  "password": "SecurePass123!",
}
```

### Blood Inventory
```http
GET /api/inventory?bloodType=O+
Authorization: Bearer <JWT_TOKEN>
```