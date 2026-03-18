import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  
  const selectedBox = props.mailboxes.find(
    (box) => box._id === Number(mailboxId)
  );

  // Is specific mailbox ke letters filter kar rahe hain
  const selectedLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  if (!selectedBox) return <main><h1>Mailbox Not Found!</h1></main>;

  return (
    <main>
      <h1>Mailbox {selectedBox._id}</h1>
      <div className="mail-box">
        <p><strong>Boxholder:</strong> {selectedBox.boxholder}</p>
        <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
      </div>

      <h3>Letters</h3>
      <ul>
        {selectedLetters.length === 0 ? <p>No letters yet.</p> : 
          selectedLetters.map((letter, index) => (
            <li key={index} className="mail-box" style={{marginTop: '10px'}}>
              <p><strong>To:</strong> {letter.recipient}</p>
              <p>{letter.message}</p>
            </li>
          ))
        }
      </ul>
    </main>
  );
};

export default MailboxDetails;