# Simple Book Management REST API (Elevate Labs Task 3)

This project is a basic CRUD (Create, Read, Update, Delete) RESTful API built to fulfill Task 3 requirements.

## 🚀 Technologies Used
* **Backend:** Node.js
* **Framework:** Express.js
* **Data Storage:** In-Memory Array (no database needed for this task)

## 📌 Setup and Execution
1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Shreya2k05/ElevateLabs_Task03]
    ```
2.  **Install Dependencies:**
    ```bash
    npm install express
    ```
3.  **Run the Server:**
    ```bash
    node server.js
    ```
    The API runs on `http://localhost:3000`.

## 🧪 API Endpoints and Testing
The following endpoints implement the full CRUD functionality and were tested using Postman:

| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| **GET** | `/books` | Retrieves all books. | 200 OK |
| **POST** | `/books` | Adds a new book. | 201 Created |
| **PUT** | `/books/:id` | Updates a specific book by ID. | 200 OK |
| **DELETE** | `/books/:id` | Deletes a specific book by ID. | 204 No Content |

## 📸 Proof of Functionality
***Note:** All functionality has been confirmed via Postman, as shown in the attached screenshots (GET_initial, POST, PUT, DELETE, GET_final).*
