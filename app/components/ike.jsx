'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { RiRobot2Line } from "react-icons/ri";
import ReactMarkdown from 'react-markdown';
import styles from './ike.module.css';

const CHAT_API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || 'http://localhost:8000/chat';

export default function Ike() {
  const panelId = useId();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      content: 'Hi! I am Ike. Feel free to ask me about Isaac and I will do my best to help.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const history = messages.map((msg) => ({
      sender: msg.sender,
      content: msg.content,
    }));

    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', content: trimmed }, { sender: 'ai', content: '' }]);
    setIsLoading(true);

    try {
      const res = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          message: trimmed,
          history,
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error('Failed to fetch chat response.');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;
        const chunk = decoder.decode(value || new Uint8Array(), { stream: !done });

        if (chunk) {
          setMessages((prev) => {
            const next = [...prev];
            const lastIdx = next.length - 1;
            if (lastIdx >= 0 && next[lastIdx].sender === 'ai') {
              next[lastIdx] = {
                ...next[lastIdx],
                content: next[lastIdx].content + chunk,
              };
            }
            return next;
          });
        }
      }
    } catch (error) {
      setMessages((prev) => {
        const next = [...prev];
        const lastIdx = next.length - 1;
        if (lastIdx >= 0 && next[lastIdx].sender === 'ai' && !next[lastIdx].content) {
          next[lastIdx] = {
            ...next[lastIdx],
            content: 'Sorry, I had trouble reaching the chat server.',
          };
        }
        return next;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <aside
      className={`${styles.chatShell} ${isCollapsed ? styles.collapsed : ''}`}
      aria-label="Chat assistant"
    >
      <div className={styles.header}>
        <div className={styles.chatHeader}>
          <RiRobot2Line />
          <span className={styles.headerTitle}>Chat with Ike</span>
        </div>
        <button
          type="button"
          className={styles.collapseToggle}
          onClick={() => setIsCollapsed((c) => !c)}
          aria-expanded={!isCollapsed}
          aria-controls={panelId}
        >
          <span className={styles.srOnly}>{isCollapsed ? 'Collapse chat' : 'Expand chat'}</span>
          <svg
            className={styles.chevron}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M5 12.5L10 7.5L15 12.5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        id={panelId}
        className={styles.panelBody}
        aria-hidden={isCollapsed}
        inert={isCollapsed}
      >
        <div className={styles.messageList} ref={listRef}>
          {messages.map((message, idx) => (
            <div
              key={`${message.sender}-${idx}`}
              className={`${styles.bubble} ${message.sender === 'user' ? styles.userBubble : styles.aiBubble}`}
            >
              <ReactMarkdown>{message.content || (isLoading && idx === messages.length - 1 ? 'Thinking...' : '')}</ReactMarkdown>
            </div>
          ))}
        </div>

        <div className={styles.inputRow}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            rows={2}
            className={styles.input}
            disabled={isLoading}
          />
          <button onClick={sendMessage} className={styles.sendButton} disabled={isLoading || !input.trim()}>
            Send
          </button>
        </div>
      </div>
    </aside>
  );
}
