# Insurance Claim Processing System

A full-stack web application that simulates a simplified insurance claim
processing workflow.\
Users can submit claims, and the system automatically evaluates them
based on predefined business rules. Claims are stored in a database and
displayed in a dashboard with dynamic status updates.

------------------------------------------------------------------------

## 🚀 Tech Stack

### Backend

-   Node.js
-   Express.js
-   SQLite
-   dotenv
-   CORS

### Frontend

-   React.js
-   Axios
-   Bootstrap

### Database

-   SQLite (lightweight relational database)

------------------------------------------------------------------------

## 🏗 Architecture Overview

### Backend (API Layer)

-   Handles business logic
-   Validates input data
-   Applies claim processing rules
-   Stores and retrieves data from SQLite
-   Returns structured JSON responses

### Database Layer

Stores: - claim_id (Primary Key) - customer_name - amount -
fraud_score - status - created_at timestamp

### Frontend (UI Layer)

-   Claim submission form
-   Client-side validation
-   Dashboard view with filtering
-   Dynamic UI updates after submission
-   Error and loading state handling

------------------------------------------------------------------------

## ⚙️ Business Rules

-   If fraud_score \> 0.7 → Rejected
-   If amount \> 100000 → Manual Review
-   Otherwise → Approved

------------------------------------------------------------------------

## 🔌 API Endpoints

### POST /claims

Request Body: { "claim_id": "CLM001", "customer_name": "John Doe",
"amount": 75000, "fraud_score": 0.65 }

Response: { "claim_id": "CLM001", "status": "Approved", "message":
"Claim approved successfully" }

------------------------------------------------------------------------

### GET /claims

Returns all submitted claims from the database.

------------------------------------------------------------------------

## 🛡 Validation & Edge Cases Handled

-   Duplicate claim IDs
-   Missing required fields
-   Invalid data types
-   Fraud score range validation (0--1)
-   Customer name must contain only alphabets
-   Backend failure handling on frontend
-   Loading states on form submission

------------------------------------------------------------------------

## 🖥 Setup Instructions

### 1. Clone the Repository

git clone `<your-repo-url>`{=html} cd mini_claim_processing

------------------------------------------------------------------------

### 2. Backend Setup

cd backend npm install

Create .env file: PORT=5000

Start backend: node server.js

Server runs at: http://localhost:5000

------------------------------------------------------------------------

### 3. Frontend Setup

cd frontend npm install

Create .env file: REACT_APP_API_URL=http://localhost:5000

Start frontend: npm start

App runs at: http://localhost:3000

------------------------------------------------------------------------

## 🎯 Evaluation Criteria Covered

-   Clean code structure
-   Proper API behavior
-   SQLite database integration
-   Frontend-backend integration
-   Dynamic UI updates
-   Input validation and error handling
-   Real-world workflow simulation

------------------------------------------------------------------------

## 👨‍💻 Author

Surya Mahesh

GitHub: https://github.com/SuryamaheshPenke
LinkedIn: https://linkedin.com/in/surya-mahesh-penkey-8477aa306
