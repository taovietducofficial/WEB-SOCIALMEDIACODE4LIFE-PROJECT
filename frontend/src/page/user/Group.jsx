import React, { useState } from 'react'
import { FaUsers, FaUserPlus, FaSearch, FaEllipsisH, FaImage, FaSmile, FaThumbsUp, FaPaperPlane, FaTimes, FaTrash, FaUndoAlt } from 'react-icons/fa'

const Group = () => {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: 'Nhóm học tập',
      avatar: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3',
      members: 156,
      lastMessage: 'Bài tập về nhà đã được gửi',
      lastMessageTime: '12:30',
      unread: 3,
      isOnline: true
    },
    {
      id: 2, 
      name: 'Nhóm gia đình',
      avatar: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3',
      members: 8,
      lastMessage: 'Cuối tuần mình họp mặt nhé',
      lastMessageTime: '09:15', 
      unread: 0,
      isOnline: false
    }
  ])

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: {
        id: 1,
        name: 'Nguyễn Văn A',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3'
      },
      content: 'Xin chào mọi người!',
      timestamp: '12:25',
      reactions: ['👍', '❤️'],
      isRecalled: false
    },
    {
      id: 2,
      sender: {
        id: 2,
        name: 'Trần Thị B',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3'
      },
      content: 'Chào bạn!',
      timestamp: '12:26',
      reactions: [],
      isRecalled: false
    }
  ])

  const [messageInput, setMessageInput] = useState('')
  const [selectedGroup, setSelectedGroup] = useState(groups[0])
  const [showCreateGroup, setShowCreateGroup] = useState(false)
  const [newGroupName, setNewGroupName] = useState('')
  const [selectedMembers, setSelectedMembers] = useState([])
  const [searchMember, setSearchMember] = useState('')
  const [showGroupOptions, setShowGroupOptions] = useState(false)
  const [showMessageOptions, setShowMessageOptions] = useState(null)

  const [availableMembers] = useState([
    { id: 1, name: 'Nguyễn Văn A', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3' },
    { id: 2, name: 'Trần Thị B', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3' },
    { id: 3, name: 'Lê Văn C', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3' },
    { id: 4, name: 'Phạm Thị D', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3' },
    { id: 5, name: 'Hoàng Văn E', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3' }
  ])

  const handleCreateGroup = () => {
    if (!newGroupName.trim() || selectedMembers.length < 2) {
      alert('Vui lòng nhập tên nhóm và chọn ít nhất 3 thành viên')
      return
    }

    if (groups.length >= 5) {
      alert('Bạn đã đạt giới hạn số lượng nhóm có thể tạo (tối đa 5 nhóm). Vui lòng xóa bớt nhóm cũ trước khi tạo nhóm mới.')
      return
    }

    if (groups.some(group => group.name.toLowerCase() === newGroupName.toLowerCase())) {
      alert('Tên nhóm đã tồn tại. Vui lòng chọn tên khác.')
      return
    }

    if (selectedMembers.length > 100) {
      alert('Số lượng thành viên trong nhóm không được vượt quá 100 người.')
      return
    }

    const newGroup = {
      id: groups.length + 1,
      name: newGroupName,
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3',
      members: selectedMembers.length + 1,
      lastMessage: 'Nhóm vừa được tạo',
      lastMessageTime: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      unread: 0,
      isOnline: true
    }

    setGroups([newGroup, ...groups])
    setNewGroupName('')
    setSelectedMembers([])
    setShowCreateGroup(false)
  }

  const handleSelectMember = (member) => {
    if (!selectedMembers.find(m => m.id === member.id)) {
      setSelectedMembers([...selectedMembers, member])
    }
  }

  const handleRemoveMember = (memberId) => {
    setSelectedMembers(selectedMembers.filter(m => m.id !== memberId))
  }

  const handleSendMessage = () => {
    if (!messageInput.trim()) return

    const newMessage = {
      id: messages.length + 1,
      sender: {
        id: 999,
        name: 'Tôi',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3'
      },
      content: messageInput,
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      reactions: [],
      isRecalled: false
    }

    setMessages([...messages, newMessage])
    setMessageInput('')
  }

  const handleDeleteGroup = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa nhóm này?')) {
      const newGroups = groups.filter(group => group.id !== selectedGroup.id)
      setGroups(newGroups)
      setSelectedGroup(newGroups[0] || null)
      setShowGroupOptions(false)
    }
  }

  const handleRecallMessage = (messageId) => {
    if (window.confirm('Bạn có chắc chắn muốn thu hồi tin nhắn này?')) {
      setMessages(messages.map(message => 
        message.id === messageId 
          ? {...message, isRecalled: true}
          : message
      ))
      setShowMessageOptions(null)
    }
  }

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-purple-50 mt-16">
      {/* Sidebar */}
      <div className="w-96 bg-white border-r shadow-lg">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nhóm chat</h1>
            <button 
              className="p-3 hover:bg-blue-50 rounded-full transition duration-200"
              onClick={() => setShowCreateGroup(true)}
            >
              <FaUserPlus className="text-blue-600 text-xl" />
            </button>
          </div>
          
          <div className="relative">
            <FaSearch className="absolute left-4 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm nhóm"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-184px)]">
          {groups.map(group => (
            <div 
              key={group.id} 
              className={`p-4 hover:bg-blue-50 cursor-pointer transition duration-200 ${selectedGroup.id === group.id ? 'bg-blue-100' : ''}`}
              onClick={() => setSelectedGroup(group)}
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src={group.avatar}
                    alt={group.name}
                    className="w-14 h-14 rounded-xl object-cover shadow-md"
                  />
                  {group.isOnline && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-800">{group.name}</h3>
                    <span className="text-xs text-gray-500 font-medium">{group.lastMessageTime}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaUsers className="mr-2" />
                      <span>{group.members} thành viên</span>
                    </div>
                    {group.unread > 0 && (
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-3 py-1 text-xs font-medium">
                        {group.unread}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 truncate mt-1">{group.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <div className="p-6 border-b bg-white shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={selectedGroup.avatar}
                  alt={selectedGroup.name}
                  className="w-12 h-12 rounded-xl object-cover shadow-md"
                />
                {selectedGroup.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">{selectedGroup.name}</h2>
                <p className="text-sm text-gray-600">{selectedGroup.members} thành viên • {selectedGroup.isOnline ? 'Đang hoạt động' : 'Không hoạt động'}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-3 hover:bg-gray-100 rounded-xl transition duration-200">
                <FaSearch className="text-gray-600" />
              </button>
              <div className="relative">
                <button 
                  className="p-3 hover:bg-gray-100 rounded-xl transition duration-200"
                  onClick={() => setShowGroupOptions(!showGroupOptions)}
                >
                  <FaEllipsisH className="text-gray-600" />
                </button>
                {showGroupOptions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl z-50">
                    <button 
                      onClick={handleDeleteGroup}
                      className="w-full px-4 py-3 text-left text-red-500 hover:bg-red-50 rounded-xl transition duration-200 flex items-center"
                    >
                      <FaTrash className="mr-3" />
                      Xóa nhóm
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50">
          {messages.map(message => (
            <div key={message.id} className={`flex mb-6 ${message.sender.id === 999 ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex ${message.sender.id === 999 ? 'flex-row-reverse' : 'flex-row'} items-end max-w-[70%]`}>
                <img 
                  src={message.sender.avatar} 
                  alt={message.sender.name}
                  className="w-10 h-10 rounded-xl object-cover shadow-md mx-3"
                />
                <div>
                  <div 
                    className={`relative px-6 py-3 rounded-2xl shadow-sm ${
                      message.isRecalled 
                        ? 'bg-gray-200 italic' 
                        : message.sender.id === 999 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                          : 'bg-white'
                    }`}
                    onContextMenu={(e) => {
                      e.preventDefault()
                      if (message.sender.id === 999 && !message.isRecalled) {
                        setShowMessageOptions(message.id)
                      }
                    }}
                  >
                    <p className="text-[15px] leading-relaxed">{message.isRecalled ? 'Tin nhắn đã bị thu hồi' : message.content}</p>
                    
                    {showMessageOptions === message.id && message.sender.id === 999 && !message.isRecalled && (
                      <div className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-xl shadow-xl z-50">
                        <button 
                          onClick={() => handleRecallMessage(message.id)}
                          className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-xl transition duration-200 flex items-center"
                        >
                          <FaUndoAlt className="mr-3" />
                          Thu hồi tin nhắn
                        </button>
                      </div>
                    )}
                  </div>
                  <div className={`flex items-center mt-2 text-xs text-gray-500 ${message.sender.id === 999 ? 'justify-end' : 'justify-start'}`}>
                    <span>{message.timestamp}</span>
                    {message.reactions.length > 0 && !message.isRecalled && (
                      <div className="flex ml-3">
                        {message.reactions.map((reaction, index) => (
                          <span key={index} className="ml-1 text-base">{reaction}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-white border-t shadow-lg">
          <div className="flex items-center space-x-4">
            <button className="p-3 hover:bg-blue-50 rounded-xl transition duration-200">
              <FaImage className="text-blue-500 text-xl" />
            </button>
            <button className="p-3 hover:bg-yellow-50 rounded-xl transition duration-200">
              <FaSmile className="text-yellow-500 text-xl" />
            </button>
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Nhập tin nhắn..."
              className="flex-1 p-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            {messageInput ? (
              <button 
                onClick={handleSendMessage}
                className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition duration-200"
              >
                <FaPaperPlane />
              </button>
            ) : (
              <button className="p-4 hover:bg-blue-50 rounded-xl transition duration-200">
                <FaThumbsUp className="text-blue-500 text-xl" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal tạo nhóm mới */}
      {showCreateGroup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[550px] p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tạo nhóm mới</h2>
              <button 
                onClick={() => setShowCreateGroup(false)}
                className="p-2 hover:bg-gray-100 rounded-xl transition duration-200"
              >
                <FaTimes />
              </button>
            </div>

            <input
              type="text"
              placeholder="Tên nhóm"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className="w-full p-4 mb-6 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />

            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedMembers.map(member => (
                  <div key={member.id} className="flex items-center bg-blue-100 rounded-xl px-4 py-2">
                    <img 
                      src={member.avatar}
                      alt={member.name}
                      className="w-8 h-8 rounded-lg object-cover shadow-sm mr-2"
                    />
                    <span className="text-sm font-medium">{member.name}</span>
                    <button 
                      onClick={() => handleRemoveMember(member.id)}
                      className="ml-2 text-gray-500 hover:text-gray-700 transition duration-200"
                    >
                      <FaTimes size={12} />
                    </button>
                  </div>
                ))}
              </div>

              <input
                type="text"
                placeholder="Tìm kiếm thành viên"
                value={searchMember}
                onChange={(e) => setSearchMember(e.target.value)}
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              />
            </div>

            <div className="max-h-48 overflow-y-auto mb-6">
              {availableMembers
                .filter(member => 
                  !selectedMembers.find(m => m.id === member.id) &&
                  member.name.toLowerCase().includes(searchMember.toLowerCase())
                )
                .map(member => (
                  <div 
                    key={member.id}
                    onClick={() => handleSelectMember(member)}
                    className="flex items-center p-3 hover:bg-blue-50 cursor-pointer rounded-xl transition duration-200"
                  >
                    <img 
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-lg object-cover shadow-sm mr-4"
                    />
                    <span className="font-medium">{member.name}</span>
                  </div>
                ))
              }
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowCreateGroup(false)}
                className="px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition duration-200"
              >
                Hủy
              </button>
              <button
                onClick={handleCreateGroup}
                disabled={!newGroupName.trim() || selectedMembers.length < 3}
                className={`px-6 py-3 text-white rounded-xl transition duration-200 ${
                  !newGroupName.trim() || selectedMembers.length < 3
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90'
                }`}
              >
                Tạo nhóm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Group