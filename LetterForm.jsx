import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = (props) => {
  const [mailboxId, setMailboxId] = useState(props.mailboxes[0]?._id || '');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addLetter({ mailboxId: Number(mailboxId), recipient, message });
    navigate(`/mailboxes/${mailboxId}`); // Letter bhejte hi us mailbox par jao
  };

  return (
    <main>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label>Select Mailbox:</label>
        <select value={mailboxId} onChange={(e) => setMailboxId(e.target.value)}>
          <option value="" disabled>Select a Mailbox</option>
          {props.mailboxes.map((box) => (
            <option key={box._id} value={box._id}>Mailbox {box._id}</option>
          ))}
        </select>
        
        <label>Recipient Name:</label>
        <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} required />
        
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default LetterForm;