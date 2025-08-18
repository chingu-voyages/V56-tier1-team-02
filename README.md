# 🏥 Surgery Status Board

## 📖 About the Project
The **Surgery Status Board** is a frontend web application designed to help surgical center staff track patients and allow families in waiting rooms to monitor the progress of their loved one’s surgery in real time. By digitizing the surgery workflow, the app reduces stress for companions in the waiting area and improves communication between medical teams and patient families.

This project was created as part of **Chingu Voyage 56 pre-work**, aiming to demonstrate a complete frontend workflow with React, TailwindCSS, and state management.

LIVE LINK : [Surgery Status Board](http://surgery-status-board.netlify.app/)

---

## 📗 Table of Contents
- [About the Project](#-about-the-project)  
- [Built With](#-built-with)  
- [Key Features](#-key-features)  
  - [Authentication & Roles](#authentication--roles)  
  - [Patient Information Screen](#patient-information-screen-admins-only)  
  - [Patient Status Update Screen](#patient-status-update-screen-admins--surgical-team)  
  - [Patient Status Display Screen](#patient-status-display-screen-all-users)  
  - [UI & Styling](#ui--styling)  
  - [Surgery Workflow Statuses](#surgery-workflow-statuses)  
- [Getting Started](#-getting-started)  
- [Authors](#-authors)  
- [Future Features](#-future-features-optional--stretch-goals) 
- [License](#-license)  

---

## 🛠 Built With
- **React.js** – Component-based UI  
- **React Router** – Routing and navigation  
- **TailwindCSS** – Styling and responsive design  
- **Swiper.js** – Patient carousel with auto-rotation  
- **LocalStorage** – Persistence across refreshes (FE-only)  
- **Context API** – Global state management  

---

## 🔑 Key Features

### Authentication & Roles
- **Guests:** View Patient Status Display only (no login required)  
- **Admins:** Manage all functionality including adding/editing patient information  
- **Surgical Team Members:** Update patient statuses only (cannot add/edit patient info)  

### Patient Information Screen (Admins Only)
- Add or update patient data:
  Patient Number (auto-generated, 6-character alphanumeric),\
  First Name,\
  Last Name,\
  Address,\
  Telephone,\
  Email
- Starting status: **Checked In**  

### Patient Status Update Screen (Admins & Surgical Team)
- Enter patient number to fetch details  
- Update status via dropdown menu (next/previous only; cannot skip statuses)  
- No timing restrictions between updates  

### Patient Status Display Screen (All Users)
- Displays patient number and current status  
- Statuses color-coded for clarity  
- Carousel cycles through patients every 20 seconds if overflow  

### UI & Styling
- Responsive layout for desktop and mobile using TailwindCSS  
- Header with app name, current date, and navigation  
- Footer with GitHub link and team member list

### Surgery Workflow Statuses
1. **Checked In** – Patient is in the facility  
2. **Pre-Procedure** – Surgical preparation underway  
3. **In Progress** – Surgery in progress  
4. **Closing** – Surgery completed  
5. **Recovery** – Post-surgery recovery  
6. **Complete** – Recovery completed, awaiting dismissal  
7. **Dismissal** – Transferred to hospital room or discharged  


## Login Credentials
Since this is a frontend-only demo, the following credentials are hardcoded:

- **Admin:**  
  Email: admin@hospital.com\
  Password: admin@123

- **Surgical Team:**  
  Email: surgeon1@hospital.com\
  Password: surgery123

- **Guest:**  
  No login required

---

## 💻 Getting Started

### Prerequisites
- Node.js & npm  
- Git  

### Setup
Clone the repository:  
```bash
git clone https://github.com/yourusername/surgery-status-board.git
cd surgery-status-board
```
Visit in browser: http://localhost:3000

---

## 👥 Authors

- Josh Ebhamen - [Frontend developer](https://github.com/Isaacjosh23)
- Ouassima ELYAKOUBI - [Frontend developer](https://github.com/ouassimaELYAKOUBI)
- Emily Morgan - [Scrum Master](https://www.linkedin.com/in/agilem/)



---

## 🔭 Future Features (Optional / Stretch Goals)

- [ ] Search functionality by patient last name

- [ ] AI Chatbot (Gemini API) for in-app help

- [ ] Email notifications for patient status updates (via EmailJS)

- [ ] OAuth authentication (Google/GitHub)

- [ ] Backend integration for real-time updates


## 📝 License

This project is licensed under the MIT License
