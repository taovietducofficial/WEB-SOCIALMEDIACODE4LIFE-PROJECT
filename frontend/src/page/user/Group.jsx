import React, { useState, useEffect } from 'react'
import { FaUsers, FaUserPlus, FaSearch, FaEllipsisH, FaImage, FaSmile, FaThumbsUp, FaPaperPlane, FaTimes, FaTrash, FaUndoAlt, FaPhone, FaVideo, FaInfoCircle, FaPlus } from 'react-icons/fa'

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
      reactions: [],
      isRecalled: false,
      type: 'text'
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
      isRecalled: false,
      type: 'text'
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
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [showReactionPopup, setShowReactionPopup] = useState(null)
  const [showDeleteAlert, setShowDeleteAlert] = useState(false)

  const [availableMembers] = useState([
    { id: 1, name: 'Nguyễn Văn A', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3' },
    { id: 2, name: 'Trần Thị B', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3' },
    { id: 3, name: 'Lê Văn C', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3' },
    { id: 4, name: 'Phạm Thị D', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3' },
    { id: 5, name: 'Hoàng Văn E', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3' }
  ])

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages')
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages))
    }
  }, [])

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages))
  }, [messages])

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
      lastMessageTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
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

  const handleSendMessage = (isLike = false) => {
    if (!messageInput.trim() && !isLike) return

    const newMessage = {
      id: messages.length + 1,
      sender: {
        id: 999,
        name: 'Tôi',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3'
      },
      content: isLike ? '👍' : messageInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      reactions: [],
      isRecalled: false,
      type: 'text',
      recallTime: null
    }

    setMessages([...messages, newMessage])
    setMessageInput('')
  }

  const handleDeleteGroup = () => {
    if (!selectedGroup) return

    // Xóa nhóm khỏi danh sách groups
    const updatedGroups = groups.filter(group => group.id !== selectedGroup.id)
    setGroups(updatedGroups)
    
    // Cập nhật selectedGroup
    if (updatedGroups.length > 0) {
      setSelectedGroup(updatedGroups[0])
    } else {
      setSelectedGroup(null)
    }
    
    // Xóa tin nhắn của nhóm
    setMessages([])
    setShowGroupOptions(false)
    
    // Hiển thị thông báo
    setShowDeleteAlert(true)
    setTimeout(() => {
      setShowDeleteAlert(false)
    }, 3000)
  }

  const handleDeleteMessage = (messageId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa tin nhắn này?')) {
      setMessages(messages.filter(message => message.id !== messageId))
      setShowMessageOptions(null)
    }
  }

  const handleRecallMessage = (messageId) => {
    const now = new Date()
    const message = messages.find(m => m.id === messageId)
    const messageTime = new Date()
    messageTime.setHours(parseInt(message.timestamp.split(':')[0]))
    messageTime.setMinutes(parseInt(message.timestamp.split(':')[1]))

    // Kiểm tra thời gian thu hồi (trong vòng 30 phút)
    const timeDiff = (now - messageTime) / (1000 * 60) // Đổi ra phút

    if (timeDiff > 30) {
      alert('Không thể thu hồi tin nhắn sau 30 phút!')
      return
    }

    setMessages(messages.map(message =>
      message.id === messageId
        ? { 
            ...message, 
            isRecalled: true, 
            content: 'Tin nhắn đã được thu hồi',
            recallTime: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        : message
    ))
    setShowMessageOptions(null)
  }

  const handleReaction = (messageId, reaction) => {
    setMessages(messages.map(message =>
      message.id === messageId
        ? {
          ...message,
          reactions: message.reactions.includes(reaction)
            ? message.reactions.filter(r => r !== reaction)
            : [reaction]
        }
        : message
    ))
    setShowReactionPopup(null)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const newMessage = {
          id: messages.length + 1,
          sender: {
            id: 999,
            name: 'Tôi',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3'
          },
          content: reader.result,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          reactions: [],
          isRecalled: false,
          type: 'image',
          recallTime: null
        }
        setMessages([...messages, newMessage])
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="fixed inset-0 flex bg-white mt-16">
      {/* Sidebar */}
      <div className="w-[360px] border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Chat</h1>
            <button
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setShowCreateGroup(true)}
            >
              <FaUserPlus className="text-gray-600 text-xl" />
            </button>
          </div>

          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm trong Messenger"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-y-auto flex-1">
          {groups.map(group => (
            <div
              key={group.id}
              className={`p-3 hover:bg-gray-100 cursor-pointer ${selectedGroup?.id === group.id ? 'bg-gray-100' : ''}`}
              onClick={() => setSelectedGroup(group)}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={group.avatar}
                    alt={group.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  {group.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900">{group.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <p className="truncate">{group.lastMessage}</p>
                    <span className="mx-1">•</span>
                    <span>{group.lastMessageTime}</span>
                  </div>
                </div>
                {group.unread > 0 && (
                  <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {group.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      {selectedGroup ? (
        <div className="flex-1 flex flex-col">
          <div className="h-16 border-b flex items-center justify-between px-4">
            <div className="flex items-center space-x-3">
              <img
                src={selectedGroup.avatar}
                alt={selectedGroup.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="font-semibold">{selectedGroup.name}</h2>
                <p className="text-sm text-gray-500">
                  {selectedGroup.isOnline ? 'Đang hoạt động' : 'Không hoạt động'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <FaPhone className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <FaVideo className="text-gray-600" />
              </button>
              <button 
                className="p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setShowGroupOptions(!showGroupOptions)}
              >
                <FaEllipsisH className="text-gray-600" />
              </button>
              {showGroupOptions && (
                <div className="absolute right-4 top-16 bg-white rounded-lg shadow-lg py-2">
                  <button 
                    onClick={handleDeleteGroup}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 text-red-500 flex items-center"
                  >
                    <FaTrash className="mr-2" />
                    Xóa nhóm
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
            {messages.map(message => (
              <div key={message.id} className={`flex mb-4 ${message.sender.id === 999 ? 'justify-end' : 'justify-start'}`}>
                {message.sender.id !== 999 && (
                  <img
                    src={message.sender.avatar}
                    alt={message.sender.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
                <div className="relative group">
                  {message.type === 'text' ? (
                    <div
                      className={`px-4 py-2 rounded-2xl max-w-[300px] ${message.isRecalled
                          ? 'bg-gray-200 italic'
                          : message.sender.id === 999
                            ? 'bg-blue-500 text-white'
                            : 'bg-white'
                        }`}
                      onMouseEnter={() => setShowReactionPopup(message.id)}
                      onMouseLeave={() => setShowReactionPopup(null)}
                    >
                      <p className="break-words">{message.content}</p>
                      {message.isRecalled && (
                        <span className="text-xs text-gray-500">
                          • Thu hồi lúc {message.recallTime}
                        </span>
                      )}

                      {message.sender.id === 999 && !message.isRecalled && (
                        <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100">
                          <button
                            onClick={() => setShowMessageOptions(message.id)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <FaEllipsisH className="text-gray-600" />
                          </button>
                          {showMessageOptions === message.id && (
                            <div className="absolute right-0 bottom-6 bg-white rounded shadow-lg py-1 flex flex-row">
                              <button
                                onClick={() => handleRecallMessage(message.id)}
                                className="w-full px-3 py-1 text-left hover:bg-gray-100 flex items-center text-black"
                              >
                                Thu hồi
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="max-w-[300px] rounded-lg overflow-hidden">
                      <img
                        src={message.content}
                        alt="Uploaded"
                        className="w-full h-auto"
                      />
                    </div>
                  )}

                  {message.reactions.length > 0 && !message.isRecalled && (
                    <div className="absolute -bottom-2 right-0 bg-white rounded-full px-2 py-1 shadow-sm">
                      {message.reactions.map((reaction, index) => (
                        <span key={index} className="text-sm">{reaction}</span>
                      ))}
                    </div>
                  )}

                  <span className="text-xs text-gray-500 mt-1 block">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t bg-white">
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <FaPlus className="text-gray-600" />
              </button>
              <label className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <FaImage className="text-gray-600" />
              </label>
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <FaSmile className="text-gray-600" />
              </button>
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Aa"
                className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={() => messageInput ? handleSendMessage() : handleSendMessage(true)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                {messageInput ? <FaPaperPlane className="text-blue-500" /> : <FaThumbsUp className="text-blue-500" />}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">Chọn một nhóm để bắt đầu trò chuyện</p>
        </div>
      )}

      {/* Create group modal */}
      {showCreateGroup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[400px] p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Tạo nhóm mới</h2>
              <button onClick={() => setShowCreateGroup(false)}>
                <FaTimes />
              </button>
            </div>

            <input
              type="text"
              placeholder="Tên nhóm"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />

            <div className="mb-4">
              <input
                type="text"
                placeholder="Tìm kiếm thành viên"
                value={searchMember}
                onChange={(e) => setSearchMember(e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />

              <div className="max-h-48 overflow-y-auto">
                {availableMembers
                  .filter(member =>
                    !selectedMembers.find(m => m.id === member.id) &&
                    member.name.toLowerCase().includes(searchMember.toLowerCase())
                  )
                  .map(member => (
                    <div
                      key={member.id}
                      onClick={() => handleSelectMember(member)}
                      className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span>{member.name}</span>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowCreateGroup(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
              >
                Hủy
              </button>
              <button
                onClick={handleCreateGroup}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={!newGroupName.trim() || selectedMembers.length < 2}
              >
                Tạo nhóm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Alert */}
      {showDeleteAlert && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          Nhóm đã được xóa thành công!
        </div>
      )}
    </div>
  )
}

export default Group