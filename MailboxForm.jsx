import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = (props) => {
  const [boxholder, setBoxholder] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  
  const navigate = useNavigate(); // Form submit ke baad page redirect karne ke liye

  const handleSubmit = (e) => {
    e.preventDefault();
    // App.jsx ke function ko call kar rahe hain data ke saath
    props.addBox({ boxholder, boxSize });
    // Wapas list wale page par bhejne ke liye
    navigate('/mailboxes');
  };

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          value={boxholder}
          onChange={(e) => setBoxholder(e.target.value)}
          required
        />
        
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={boxSize}
          onChange={(e) => setBoxSize(e.target.value)}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;