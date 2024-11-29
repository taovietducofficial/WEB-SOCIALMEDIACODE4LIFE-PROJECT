import React, { useState } from 'react'
import { FaUsers, FaUserPlus, FaSearch, FaEllipsisH, FaImage, FaSmile, FaThumbsUp, FaPaperPlane, FaTimes, FaTrash } from 'react-icons/fa'

const Group = () => {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: 'Nhóm học tập',
      avatar: 'https://via.placeholder.com/48', 
      members: 156,
      lastMessage: 'Bài tập về nhà đã được gửi',
      lastMessageTime: '12:30',
      unread: 3,
      isOnline: true
    },
    {
      id: 2,
      name: 'Nhóm gia đình',
      avatar: 'https://via.placeholder.com/48',
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
        avatar: 'https://via.placeholder.com/48'
      },
      content: 'Xin chào mọi người!',
      timestamp: '12:25',
      reactions: ['👍', '❤️']
    },
    {
      id: 2, 
      sender: {
        id: 2,
        name: 'Trần Thị B',
        avatar: 'https://via.placeholder.com/48'
      },
      content: 'Chào bạn!',
      timestamp: '12:26',
      reactions: []
    }
  ])

  const [messageInput, setMessageInput] = useState('')
  const [selectedGroup, setSelectedGroup] = useState(groups[0])
  const [showCreateGroup, setShowCreateGroup] = useState(false)
  const [newGroupName, setNewGroupName] = useState('')
  const [selectedMembers, setSelectedMembers] = useState([])
  const [searchMember, setSearchMember] = useState('')
  const [showGroupOptions, setShowGroupOptions] = useState(false)

  // Danh sách người dùng mẫu để chọn thành viên
  const [availableMembers] = useState([
    { id: 1, name: 'Nguyễn Văn A', avatar: 'https://via.placeholder.com/48' },
    { id: 2, name: 'Trần Thị B', avatar: 'https://via.placeholder.com/48' },
    { id: 3, name: 'Lê Văn C', avatar: 'https://via.placeholder.com/48' },
    { id: 4, name: 'Phạm Thị D', avatar: 'https://via.placeholder.com/48' },
    { id: 5, name: 'Hoàng Văn E', avatar: 'https://via.placeholder.com/48' }
  ])

  const handleCreateGroup = () => {
    if (!newGroupName.trim() || selectedMembers.length < 2) {
      alert('Vui lòng nhập tên nhóm và chọn ít nhất 3 thành viên')
      return
    }

    // Kiểm tra số lượng nhóm hiện tại
    if (groups.length >= 5) {
      alert('Bạn đã đạt giới hạn số lượng nhóm có thể tạo (tối đa 5 nhóm). Vui lòng xóa bớt nhóm cũ trước khi tạo nhóm mới.')
      return
    }

    // Kiểm tra tên nhóm đã tồn tại
    if (groups.some(group => group.name.toLowerCase() === newGroupName.toLowerCase())) {
      alert('Tên nhóm đã tồn tại. Vui lòng chọn tên khác.')
      return  
    }

    // Kiểm tra số lượng thành viên tối đa
    if (selectedMembers.length > 100) {
      alert('Số lượng thành viên trong nhóm không được vượt quá 100 người.')
      return
    }

    const newGroup = {
      id: groups.length + 1,
      name: newGroupName,
      avatar: 'https://via.placeholder.com/48',
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
        id: 999, // Current user
        name: 'Tôi',
        avatar: 'https://via.placeholder.com/48'
      },
      content: messageInput,
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      reactions: []
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

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gray-100 mt-16">
      {/* Sidebar */}
      <div className="w-96 bg-white border-r">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Nhóm chat</h1>
            <button 
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setShowCreateGroup(true)}
            >
              <FaUserPlus className="text-blue-500 text-xl" />
            </button>
          </div>
          
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm nhóm"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-184px)]">
          {groups.map(group => (
            <div 
              key={group.id} 
              className={`p-3 hover:bg-gray-100 cursor-pointer ${selectedGroup.id === group.id ? 'bg-blue-50' : ''}`}
              onClick={() => setSelectedGroup(group)}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img 
                    src={group.avatar}
                    alt={group.name}
                    className="w-12 h-12 rounded-full"
                  />
                  {group.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{group.name}</h3>
                    <span className="text-xs text-gray-500">{group.lastMessageTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaUsers className="mr-1" />
                      <span>{group.members} thành viên</span>
                    </div>
                    {group.unread > 0 && (
                      <span className="bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs">
                        {group.unread}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 truncate">{group.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b bg-white sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src={selectedGroup.avatar}
                  alt={selectedGroup.name}
                  className="w-10 h-10 rounded-full"
                />
                {selectedGroup.isOnline && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div>
                <h2 className="font-semibold">{selectedGroup.name}</h2>
                <p className="text-sm text-gray-500">{selectedGroup.members} thành viên • {selectedGroup.isOnline ? 'Đang hoạt động' : 'Không hoạt động'}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <FaSearch className="text-gray-600" />
              </button>
              <div className="relative">
                <button 
                  className="p-2 hover:bg-gray-100 rounded-full"
                  onClick={() => setShowGroupOptions(!showGroupOptions)}
                >
                  <FaEllipsisH className="text-gray-600" />
                </button>
                {showGroupOptions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                    <button 
                      onClick={handleDeleteGroup}
                      className="w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100 rounded-lg flex items-center"
                    >
                      <FaTrash className="mr-2" />
                      Xóa nhóm
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map(message => (
            <div key={message.id} className={`flex mb-4 ${message.sender.id === 999 ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex ${message.sender.id === 999 ? 'flex-row-reverse' : 'flex-row'} items-end max-w-[70%]`}>
                <img 
                  src={message.sender.avatar} 
                  alt={message.sender.name}
                  className="w-8 h-8 rounded-full mx-2"
                />
                <div>
                  <div className={`px-4 py-2 rounded-2xl ${message.sender.id === 999 ? 'bg-blue-500 text-white' : 'bg-white'}`}>
                    <p>{message.content}</p>
                  </div>
                  <div className={`flex items-center mt-1 text-xs text-gray-500 ${message.sender.id === 999 ? 'justify-end' : 'justify-start'}`}>
                    <span>{message.timestamp}</span>
                    {message.reactions.length > 0 && (
                      <div className="flex ml-2">
                        {message.reactions.map((reaction, index) => (
                          <span key={index} className="ml-0.5">{reaction}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t">
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FaImage className="text-blue-500 text-xl" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FaSmile className="text-yellow-500 text-xl" />
            </button>
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Nhập tin nhắn..."
              className="flex-1 p-3 bg-gray-100 rounded-full focus:outline-none"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            {messageInput ? (
              <button 
                onClick={handleSendMessage}
                className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              >
                <FaPaperPlane />
              </button>
            ) : (
              <button className="p-3 hover:bg-gray-100 rounded-full">
                <FaThumbsUp className="text-blue-500 text-xl" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal tạo nhóm mới */}
      {showCreateGroup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[500px] p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Tạo nhóm mới</h2>
              <button 
                onClick={() => setShowCreateGroup(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <FaTimes />
              </button>
            </div>

            <input
              type="text"
              placeholder="Tên nhóm"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:border-blue-500"
            />

            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedMembers.map(member => (
                  <div key={member.id} className="flex items-center bg-blue-100 rounded-full px-3 py-1">
                    <img 
                      src={member.avatar}
                      alt={member.name}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-sm">{member.name}</span>
                    <button 
                      onClick={() => handleRemoveMember(member.id)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
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
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="max-h-48 overflow-y-auto mb-4">
              {availableMembers
                .filter(member => 
                  !selectedMembers.find(m => m.id === member.id) &&
                  member.name.toLowerCase().includes(searchMember.toLowerCase())
                )
                .map(member => (
                  <div 
                    key={member.id}
                    onClick={() => handleSelectMember(member)}
                    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
                  >
                    <img 
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span>{member.name}</span>
                  </div>
                ))
              }
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowCreateGroup(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Hủy
              </button>
              <button
                onClick={handleCreateGroup}
                disabled={!newGroupName.trim() || selectedMembers.length < 3}
                className={`px-4 py-2 text-white rounded-lg ${
                  !newGroupName.trim() || selectedMembers.length < 3
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
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