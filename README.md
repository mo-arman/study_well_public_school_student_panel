<div align="center">

# 🎓 Study Well Public School

### Student Management & Information Portal

**One secure home for every student's record — attendance, marks, fees, and notices — always up to date, always in reach.**

🔗 **Live Site:** [study-well-public-school-student-pa.vercel.app](https://study-well-public-school-student-pa.vercel.app/)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black&style=flat-square)
![Firebase](https://img.shields.io/badge/Firebase-Firestore%20%7C%20Auth-FFCA28?logo=firebase&logoColor=black&style=flat-square)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white&style=flat-square)
![Bilingual](https://img.shields.io/badge/Language-English%20%7C%20हिंदी-orange?style=flat-square)

</div>

---

## ✨ About

**Study Well Public School** (Sitapur) is a full-featured, bilingual school management web app built with React and Firebase. It gives the school **one secure portal** for managing students, attendance, marks, fees, and notices — with separate, protected logins for the **Principal (Admin)** and **Students**.

> *"Knowledge is the true ornament of all wealth"*

---

## 🚀 Features

| | Feature | Description |
|---|---------|-------------|
| 👥 | **Student Records** | Roll number, class, guardian details, and photo — organised and searchable in seconds. |
| 📅 | **Attendance Register** | Daily, class-wise attendance tracking with a full yearly overview. |
| 🎓 | **Marks & Results** | Exam-wise marks, percentages, and grades — recorded once, available to students instantly. |
| 📜 | **Notices** | School announcements published in one place so no one is left uninformed. |
| 🛡️ | **Secure Login** | Separate, protected logins for Principal and Students with full password control. |
| 🌐 | **Bilingual** | The entire portal works in both **Hindi** and **English**, switchable with one tap. |
| 💰 | **Fee Status** | Track fee status per student — Paid, Pending, or Overdue. |
| 🖼️ | **Photo Uploads** | Student profile photos with a clean in-app photo viewer. |

---

## 🧑‍💻 Roles

### 🛡️ Admin (Principal)
- Manage students (add / edit / delete)
- Record marks & results
- Mark daily attendance
- Publish & manage notices
- Manage account settings, password, and profile

### 🎓 Student
- View personal profile & photo
- Check marks & results
- Check attendance history
- Read school notices

---

## 🛠️ Tech Stack

- **Frontend:** React (Hooks — `useState`, `useEffect`, `useRef`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Backend / Database:** [Firebase Firestore](https://firebase.google.com/docs/firestore) (real-time sync + offline persistence)
- **Authentication:** [Firebase Auth](https://firebase.google.com/docs/auth) (email/password, password reset, re-authentication)
- **Hosting:** [Vercel](https://vercel.com/)

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd study-well-public-school
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Firebase
Create a Firebase project at the [Firebase Console](https://console.firebase.google.com/), enable **Firestore** and **Authentication (Email/Password)**, then update the config in `App.jsx`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### 4. Run locally
```bash
npm run dev
```

### 5. Deploy
This project is ready to deploy on **Vercel** — just connect your repo and deploy. 🚀

---

## 📁 Project Structure

```
├── src/
│   └── App.jsx        # Main application (auth, dashboard, students, marks, attendance, notices)
├── public/
└── README.md
```

---

## 🌐 Live Demo

👉 **[study-well-public-school-student-pa.vercel.app](https://study-well-public-school-student-pa.vercel.app/)**

---

<div align="center">

Made with ❤️ for **Study Well Public School**, Sitapur

</div>
