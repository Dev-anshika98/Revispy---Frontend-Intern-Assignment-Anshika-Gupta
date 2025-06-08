# 📝 User Registration & Category Selection Web App

This is a full-stack web application built as part of the Revispy Frontend Internship Assignment. The app supports new user registration, login functionality, protected routing, and category selection with pagination.

---

## 🚀 Live Links

- **Frontend (Vercel):** [Live Frontend](https://your-frontend-link.vercel.app)
- **Backend (Render):** [Live Backend](https://your-backend-link.onrender.com)

> Replace with actual URLs

---

## 📌 Features

- ✅ Two-step **new user registration**
- ✅ **Existing user login**
- ✅ **Protected route** accessible only after login
- ✅ **Static header** across all pages
- ✅ **Category selection with pagination** (6 per page)
- ✅ **Persistence of user-selected categories** across sessions
- ✅ **MongoDB integration** for storing users and their selected categories

---

## ⚙️ Tech Stack

### Frontend:
- ⚛️ React.js with Vite
- 🟦 TypeScript
- 💄 CSS Modules

### Backend:
- 🌐 Node.js + Express.js
- 📬 Nodemailer (for optional email features)
- 🧠 MongoDB (via Mongoose)

---

## ❌ Known Limitation

Although `faker.js` was used to generate mock category data during development, due to unforeseen issues in the implementation, the **categories were not successfully fetched/displayed** from the database on the protected page.

> The rest of the functionality, including pagination UI, selection handling, and user persistence, is implemented and working as expected.

---

## 📂 Folder Structure

├── client/ # Vite + React frontend
│ └── ...
├── server/ # Node.js + Express backend
│ └── ...
└── README.md



---

## 🛡️ Authentication Flow

- **Sign-Up (2 screens)** – collects user details in a step-wise manner
- **Login Page** – verifies credentials
- **JWT-based Protected Route** – user is redirected if not authenticated

---

## 🖼️ UI & UX

- 🔐 Clean, minimal, and responsive UI
- 🧩 Categories can be selected with checkbox interface
- 📄 Pagination implemented for smooth navigation

---

## 🛠️ Installation & Running Locally

```bash
# Clone the repo
git clone https://github.com/your-username/revispy-assignment.git
cd revispy-assignment

# Frontend setup
cd client
npm install
npm run dev

# Backend setup
cd ../server
npm install
npm run dev
