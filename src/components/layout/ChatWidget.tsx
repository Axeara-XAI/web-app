'use client';

import React, { useState, useRef, useEffect } from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import { Chat24Regular, Dismiss24Regular, Send24Filled } from '@fluentui/react-icons';

const useStyles = makeStyles({
  // Tombol Melayang Utama (FAB)
  fabButton: {
    position: 'fixed',
    bottom: '32px',
    right: '32px',
    zIndex: 2000,
    backgroundColor: '#0067c0',
    color: '#ffffff',
    width: '56px',
    height: '56px',
    ...shorthands.borderRadius('50%'),
    ...shorthands.border('none'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0, 67, 192, 0.3)',
    cursor: 'pointer',
    transitionProperty: 'transform, background-color',
    transitionDuration: '0.2s',
    ':hover': {
      backgroundColor: '#005bb5',
      transform: 'scale(1.05)',
    },
  },
  // Wadah Utama Kotak Chat
  chatWindow: {
    position: 'fixed',
    bottom: '100px',
    right: '32px',
    width: '380px',
    height: '520px',
    backgroundColor: '#ffffff',
    ...shorthands.borderRadius('12px'),
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2000,
    ...shorthands.border('1px', 'solid', '#e5e7eb'),
    overflow: 'hidden',
    fontFamily: '"Segoe UI", -apple-system, sans-serif',
    '@media (max-width: 480px)': {
      width: 'calc(100% - 64px)',
      height: '70vh',
    },
  },
  // Bagian Atas Chat (Header)
  chatHeader: {
    backgroundColor: '#0067c0',
    color: '#ffffff',
    ...shorthands.padding('16px', '20px'),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: '16px',
    fontWeight: '600',
  },
  closeBtn: {
    background: 'transparent',
    ...shorthands.border('none'),
    color: '#ffffff',
    cursor: 'pointer',
    opacity: 0.8,
    ':hover': { opacity: 1 },
  },
  // Area Isi Obrolan (Message List)
  messageArea: {
    flex: 1,
    ...shorthands.padding('20px'),
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    backgroundColor: '#f9fafb',
  },
  bubble: {
    maxWidth: '80%',
    ...shorthands.padding('10px', '14px'),
    ...shorthands.borderRadius('8px'),
    fontSize: '14px',
    lineHeight: '1.4',
  },
  userBubble: {
    backgroundColor: '#0067c0',
    color: '#ffffff',
    alignSelf: 'flex-end',
    borderBottomRightRadius: '2px',
  },
  agentBubble: {
    backgroundColor: '#ffffff',
    color: '#111827',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: '2px',
    ...shorthands.border('1px', 'solid', '#e5e7eb'),
  },
  loadingBubble: {
    color: '#6b7280',
    fontSize: '13px',
    fontStyle: 'italic',
    alignSelf: 'flex-start',
  },
  // Area Input Bawah
  inputArea: {
    display: 'flex',
    ...shorthands.padding('12px'),
    backgroundColor: '#ffffff',
    ...shorthands.borderTop('1px', 'solid', '#e5e7eb'),
    gap: '8px',
  },
  textInput: {
    flex: 1,
    ...shorthands.padding('10px', '14px'),
    ...shorthands.border('1px', 'solid', '#d1d5db'),
    ...shorthands.borderRadius('6px'),
    fontSize: '14px',
    outlineStyle: 'none',
    ':focus': {
      ...shorthands.borderColor('#0067c0'),
    },
  },
  sendBtn: {
    backgroundColor: '#0067c0',
    color: '#ffffff',
    ...shorthands.border('none'),
    ...shorthands.borderRadius('6px'),
    ...shorthands.padding('0', '14px'),
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ':hover': { backgroundColor: '#005bb5' },
    ':disabled': { backgroundColor: '#9ca3af', cursor: 'not-allowed' },
  },
});

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatWidget = () => {
  const styles = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Halo! Saya Axara AI Assistant. Ada yang bisa saya bantu terkait proyek riset Explainable AI kami?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll ke pesan paling baru
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();
      
      if (data.reply) {
        setMessages([...updatedMessages, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages([...updatedMessages, { role: 'assistant', content: 'Maaf, saya mengalami kendala teknis saat memproses jawaban.' }]);
      }
    } catch (error) {
      console.error('Error fetching chat:', error);
      setMessages([...updatedMessages, { role: 'assistant', content: 'Gagal terhubung ke pusat kecerdasan sistem.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button className={styles.fabButton} onClick={() => setIsOpen(!isOpen)} aria-label="Buka Chatbox AI">
        {isOpen ? <Dismiss24Regular /> : <Chat24Regular />}
      </button>

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span className={styles.headerTitle}>Axara AI Assistant</span>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <Dismiss24Regular />
            </button>
          </div>

          <div className={styles.messageArea}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`${styles.bubble} ${msg.role === 'user' ? styles.userBubble : styles.agentBubble}`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className={styles.loadingBubble}>
                Axara AI sedang berpikir...
              </div>
            )}
            <div ref={messageEndRef} />
          </div>

          <form onSubmit={handleSend} className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanyakan sesuatu tentang Axara XAI..."
              className={styles.textInput}
              disabled={isLoading}
            />
            <button type="submit" className={styles.sendBtn} disabled={!input.trim() || isLoading}>
              <Send24Filled />
            </button>
          </form>
        </div>
      )}
    </>
  );
};