# 📬 Reactville Post Office - React Router Lab

Welcome to the **Reactville Local Post Office**! This application is a management system where users can create digital mailboxes and send letters to them.

The primary goal of this project was to master **React Router DOM** for building a seamless Single Page Application (SPA).

## 🚀 Live Demo
*(Optional: Add your Vercel or GitHub Pages link here)*

## 🧠 Key Learnings: React Router DOM
During this lab, I implemented several core routing concepts:

- **BrowserRouter**: Established the routing context for the entire application.
- **Routes & Route**: Mapped specific URL paths to functional components like `MailboxList` and `MailboxForm`.
- **Link**: Enabled instant navigation between views without page reloads.
- **useParams**: Dynamically retrieved the `mailboxId` from the URL to display specific mailbox details and filtered letters.
- **useNavigate**: Implemented programmatic navigation to redirect users after form submissions.

## 🛠️ Features
- **Create Mailbox**: Register new mailboxes with a holder's name and box size.
- **Mailbox List**: A centralized view of all created mailboxes.
- **Mailbox Details**: Dedicated pages for each mailbox showing its unique ID and properties.
- **Letter System**: A "Level Up" feature allowing users to draft and send letters to specific mailboxes.

## 📂 Project Structure
```text
src/
├── components/
│   ├── NavBar.jsx
│   ├── MailboxList.jsx
│   ├── MailboxForm.jsx
│   ├── MailboxDetails.jsx
│   └── LetterForm.jsx
├── App.jsx
├── index.css
└── main.jsx
