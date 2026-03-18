import { Link } from 'react-router-dom';

const MailboxList = (props) => {
  return (
    <main>
      <h1>Mailbox List</h1>
      <ul>
        {props.mailboxes.map((mailbox) => (
          <li key={mailbox._id} className="mail-box">
            {/* Link humein specific ID wale page par le jayega */}
            <Link to={`/mailboxes/${mailbox._id}`}>
              Mailbox {mailbox._id}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MailboxList;