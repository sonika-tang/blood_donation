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

---

## 📂 Project Structure
```
blood-donation-system/
│
├── backend/ 
│ ├── config/ 
│ │ ├── db.config.js 
│ │ └── auth.config.js 
│ │
│ ├── controllers/
│ │ ├── auth.controller.js 
│ │ ├── appointment.controller.js
│ │ ├── blood.controller.js
│ │ └── user.controller.js
│ │
│ ├── models/ 
│ │ ├── user.model.js 
│ │ ├── blood.model.js 
│ │ └── index.js 
│ │
│ ├── routes/ 
│ │ ├── auth.routes.js
│ │ ├── api.routes.js
│ │ └── index.js
│ │
│ ├── middleware/ 
│ │ ├── authJwt.js 
│ │ └── validator.js 
│ │
│ ├── services/ 
│ │ ├── auth.service.js
│ │ └── email.service.js
│ │
│ ├── utils/ 
│ │ ├── apiResponse.js
│ │ └── errorHandler.js
│ │
│ ├── app.js 
│ ├── server.js 
│ └── package.json
│
├── frontend/ 
│ ├── public/ 
│ │ ├── index.html
│ │ ├── favicon.ico
│ │ └── assets/ 
│ │
│ ├── src/ 
│ │ ├── components/ 
│ │ │ ├── common/ 
│ │ │ │ ├── Button.jsx
│ │ │ │ └── Card.jsx
│ │ │ │
│ │ │ ├── auth/ 
│ │ │ │ ├── LoginForm.jsx
│ │ │ │ └── RegisterForm.jsx
│ │ │ │
│ │ │ └── blood/ 
│ │ │ ├── BloodCard.jsx
│ │ │ └── Inventory.jsx
│ │ │
│ │ ├── pages/ 
│ │ │ ├── Home.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ └── Admin/
│ │ │
│ │ ├── store/ 
│ │ │ ├── slices/ 
│ │ │ └── store.js 
│ │ │
│ │ ├── services/ 
│ │ │ ├── api.js 
│ │ │ └── auth.js
│ │ │
│ │ ├── App.jsx 
│ │ ├── App.css
│ │ ├── index.css
│ │ └── main.jsx 
| |
│ ├── .env 
│ ├── jsconfig.json 
│ └── package.json
│
├── .gitignore
├── README.md 
├── package.json 
└── LICENSE
```

## 🗃 Database Configuration

### Railway PostgreSQL Setup
1. Get credentials from Railway dashboard
2. Configure `backend/.env`:

```env
DB_URL=postgresql://{user}:{password}@{host}:{port}/{dbname}?sslmode=require
JWT_SECRET=your_secure_secret
```

## ⚙ Setup Guide

### Prerequisites
- Node.js
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
  "blood_type": "O+"
}
```

### Blood Inventory
```http
GET /api/inventory?bloodType=O+
Authorization: Bearer <JWT_TOKEN>
```

## Deployment
### Backend to Railway
- Connect GitHub repo
- Set environment variables
- Enable automatic deploys

### Frontend to Vercel
```bash
vercel --prod
```