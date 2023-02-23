import PropTypes from 'prop-types';

function Email({ messages, setMessageStatus }) {
  return (
    <ul className="messages-list">
      {messages.map((message) => {
        const messageClass = message.status === 1
          ? 'message-read'
          : 'message-unread';

        return (
          <li key={ message.id }>
            <p
              className={ `message-title ${messageClass}` }
            >
              {message.title}
            </p>
            <div>
              <button
                type="button"
                title="Marcar como lida"
                onClick={ () => setMessageStatus(message.id, 1) }
              >
                Marcar como lida
              </button>
              <button
                type="button"
                title="Marcar como não lida"
                onClick={ () => setMessageStatus(message.id, 0) }
              >
                Marcar como não lida
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

Email.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
  setMessageStatus: PropTypes.func.isRequired,
};

export default Email;