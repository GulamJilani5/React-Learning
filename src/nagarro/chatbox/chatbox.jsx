import { useState } from "react";
import styles from "./chatbox.module.css";

export default function chatbox() {
  const [messages, setMessages] = useState([]);
  const [curretnMessage, setCurrenttMessage] = useState("");

  const sendMessage = (e) => {
    if (curretnMessage.trim()) {
      setMessages([...messages, curretnMessage]);
      setCurrenttMessage("");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>header</header>
      <main className={styles.main}>
        {messages.length > 0 &&
          messages.map((message) => (
            <div className={styles.chatText}>
              <strong>{message}</strong>
            </div>
          ))}
      </main>

      <div className={styles.footerCotnainer}>
        <footer className={styles.footer}>
          <input
            type="text"
            placeholder="Type a message"
            value={curretnMessage}
            onChange={(e) => seCurrenttMessage(e.target.value)}
            /*
                onKeyPress has been deprecated  
                onKeyPress={(e) => (e.key === "Enter" ? sendMessage() : null)}
            */
            onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)}
          />
          <button onClick={sendMessage}>Send</button>
        </footer>
      </div>
    </div>
  );
}
