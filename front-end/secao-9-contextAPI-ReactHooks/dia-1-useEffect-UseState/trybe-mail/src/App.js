import { useState } from 'react';
import './App.css';
import messagesList from './data/messageList';
import Controls from './pages/Control';
import Email from './pages/Email';
import Header from './pages/Header';

function App() {
  const [messages, setMessages] = useState(messagesList);

  const setMessageStatus = (messageId, newStatus) => {
    const updatedMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status: newStatus };
      }
      return currentMessage;
    });

    setMessages(updatedMessages);
  };

  const markAllAsRead = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: 1 }));
    setMessages(allAsRead);
  };

  const markAllAsUnread = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: 0 }));
    setMessages(allAsRead);
  };

  return (
    <div className="App">
      <Header />
      <Controls
        markAllAsRead={ markAllAsRead }
        markAllAsUnread={ markAllAsUnread }
      />
      <Email
        messages={messages}
        setMessageStatus={ setMessageStatus }
      />
    </div>
  );
}

export default App;
