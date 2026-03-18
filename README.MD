# 📬 Reactville Post Office - React Router Lab

Welcome to **Reactville's Local Post Office**! Ye application simulate karti hai ek post office management system jahan users mailboxes create kar sakte hain aur unke liye letters bhej sakte hain.

Is project ka main focus **React Router DOM** ko seekhna aur implement karna tha.

## 🚀 Live Demo
*(Apne Vercel ya GitHub Pages ka link yahan daal sakte ho)*

## 🧠 Key Learnings: React Router DOM
Is lab mein humne Single Page Application (SPA) ke core concepts ko implement kiya:

- **BrowserRouter**: Poori app ko routing environment provide karne ke liye.
- **Routes & Route**: URL paths ko specific components (`MailboxList`, `MailboxForm`, etc.) se map karne ke liye.
- **Link**: Page refresh kiye bina navigate karne ke liye.
- **useParams**: URL se dynamic parameters (jaise `:mailboxId`) nikaal kar specific data render karne ke liye.
- **useNavigate**: Programmatically user ko ek page se doosre page par redirect karne ke liye (e.g., Form submit ke baad).



## 🛠️ Features
- **Create Mailbox**: User apna naam aur box size select karke naya mailbox register kar sakta hai.
- **Mailbox List**: Saare registered mailboxes ki ek clean list.
- **Mailbox Details**: Har box ki apni unique detail page jahan uske letters dikhte hain.
- **Send Letters**: Kisi bhi existing mailbox ko letter bhejni ki suvidha.

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