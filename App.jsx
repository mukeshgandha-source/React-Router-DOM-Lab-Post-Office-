import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';
import LetterForm from './components/LetterForm'; // Naya component

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (newBoxData) => {
    newBoxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBoxData]);
  };

  const addLetter = (newLetter) => {
    setLetters([...letters, newLetter]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
        <Route 
          path="/mailboxes/:mailboxId" 
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} 
        />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
};

export default App;