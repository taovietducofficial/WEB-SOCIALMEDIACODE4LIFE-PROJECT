import React, { useState } from 'react';
import './Group.css';
import Navbar from '../../components/navbar/Navbar';
import { FaPlus, FaPhone, FaVideo, FaInfoCircle, FaImage, FaPaperclip, FaSmile, FaThumbsUp, FaPaperPlane, FaComments } from 'react-icons/fa';

const Group = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const groups = [
    {
      id: 1,
      name: 'GROUP 1',
      messages: [
        { id: 1, text: 'Xin chào mọi người!', sender: 'other', time: '10:00' },
        { id: 2, text: 'Chào bạn!', sender: 'me', time: '10:01' },
        { id: 3, text: 'Dự án của chúng ta thế nào rồi?', sender: 'other', time: '10:02' }
      ]
    },
    {
      id: 2,
      name: 'GROUP 2', 
      messages: [
        { id: 1, text: 'Họp nhóm lúc mấy giờ?', sender: 'other', time: '09:30' },
        { id: 2, text: '2h chiều nhé!', sender: 'me', time: '09:31' },
        { id: 3, text: 'Ok, hẹn gặp lại!', sender: 'other', time: '09:32' }
      ]
    }
  ];

  const handleSendMessage = (groupId) => {
    if (!newMessage.trim()) return;

    const currentGroup = groups.find(g => g.id === groupId);
    if (!currentGroup) return;

    const newMsg = {
      id: currentGroup.messages.length + 1,
      text: newMessage,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    currentGroup.messages.push(newMsg);
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  const GroupList = () => (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Danh sách nhóm</h2>
        <button className="create-group-btn">
          <FaPlus />
          Tạo nhóm mới
        </button>
      </div>
      <div className="group-list">
        {groups.map(group => (
          <div 
            key={group.id}
            className={`group-item ${selectedGroup === group.id ? 'active' : ''}`}
            onClick={() => setSelectedGroup(group.id)}
          >
            <div className="group-avatar">
              {group.name.charAt(0)}
            </div>
            <div className="group-preview">
              <h4>{group.name}</h4>
              <p>{group.messages[group.messages.length - 1].text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ChatArea = () => (
    <div className="chat-container">
      {selectedGroup ? (
        <>
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                {groups.find(g => g.id === selectedGroup)?.name.charAt(0)}
              </div>
              <div className="chat-details">
                <h3>{groups.find(g => g.id === selectedGroup)?.name}</h3>
                <span className="online-status">Đang hoạt động</span>
              </div>
            </div>
            <div className="chat-actions">
              <button className="header-btn">
                <FaPhone />
              </button>
              <button className="header-btn">
                <FaVideo />
              </button>
              <button className="header-btn">
                <FaInfoCircle />
              </button>
            </div>
          </div>
          <div className="messages-container">
            {groups.find(g => g.id === selectedGroup)?.messages.map(message => (
              <div key={message.id} className={`message ${message.sender === 'me' ? 'message-sent' : 'message-received'}`}>
                <div className="message-content">
                  {message.text}
                  <span className="message-time">{message.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="message-input-container">
            <div className="message-input-wrapper">
              <button className="action-btn"><FaImage /></button>
              <button className="action-btn"><FaPaperclip /></button>
              <button className="action-btn"><FaSmile /></button>
              <input
                type="text" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && newMessage.trim()) {
                    e.preventDefault();
                    handleSendMessage(selectedGroup);
                  }
                }}
                placeholder="Nhập tin nhắn..."
                className="message-input"
                autoFocus
              />
              <button className="action-btn like-btn"><FaThumbsUp /></button>
              <button 
                className="send-button"
                onClick={() => handleSendMessage(selectedGroup)}
                disabled={!newMessage.trim()}
              ><FaPaperPlane /></button>
            </div>
          </div>
        </>
      ) : (
        <div className="no-chat-selected">
          <div className="empty-state">
            <FaComments />
            <p>Chọn một cuộc trò chuyện để bắt đầu</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="messenger-layout">
        <GroupList />
        <ChatArea />
      </div>
    </>
  );
};

export default Group;
