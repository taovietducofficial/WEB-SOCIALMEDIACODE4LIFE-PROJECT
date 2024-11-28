import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
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
    <div className="w-1/4 bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">Danh sách nhóm</h2>
        <button className="mt-3 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <FaPlus className="text-sm" />
          <span>Tạo nhóm mới</span>
        </button>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-180px)]">
        {groups.map(group => (
          <div 
            key={group.id}
            className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${selectedGroup === group.id ? 'bg-gray-100' : ''}`}
            onClick={() => setSelectedGroup(group.id)}
          >
            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
              {group.name.charAt(0)}
            </div>
            <div className="ml-3">
              <h4 className="font-medium">{group.name}</h4>
              <p className="text-sm text-gray-500 truncate">{group.messages[group.messages.length - 1].text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ChatArea = () => (
    <div className="flex-1 flex flex-col">
      {selectedGroup ? (
        <>
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                {groups.find(g => g.id === selectedGroup)?.name.charAt(0)}
              </div>
              <div className="ml-3">
                <h3 className="font-medium">{groups.find(g => g.id === selectedGroup)?.name}</h3>
                <span className="text-sm text-green-500">Đang hoạt động</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <FaPhone className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <FaVideo className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <FaInfoCircle className="text-gray-600" />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {groups.find(g => g.id === selectedGroup)?.messages.map(message => (
              <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] rounded-lg px-4 py-2 ${message.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
                  <p>{message.text}</p>
                  <span className={`text-xs ${message.sender === 'me' ? 'text-blue-100' : 'text-gray-500'} block mt-1`}>
                    {message.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
              <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <FaImage className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <FaPaperclip className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <FaSmile className="text-gray-600" />
              </button>
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
                className="flex-1 bg-transparent outline-none px-2"
                autoFocus
              />
              <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <FaThumbsUp className="text-gray-600" />
              </button>
              <button 
                className={`p-2 rounded-full transition-colors ${newMessage.trim() ? 'text-blue-500 hover:bg-blue-50' : 'text-gray-400'}`}
                onClick={() => handleSendMessage(selectedGroup)}
                disabled={!newMessage.trim()}
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <FaComments className="text-6xl mx-auto mb-4" />
            <p>Chọn một cuộc trò chuyện để bắt đầu</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        <GroupList />
        <ChatArea />
      </div>
    </div>
  );
};

export default Group;
