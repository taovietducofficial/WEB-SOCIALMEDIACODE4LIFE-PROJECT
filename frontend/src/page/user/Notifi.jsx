import React, { useState, useEffect } from 'react'
import { FaBell, FaUserCircle, FaGlobe, FaHeart, FaComment, FaShare, FaTrash, FaCheck } from 'react-icons/fa'

const Notifi = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'like',
      user: 'Nguyễn Văn A',
      content: 'đã thích bài viết của bạn',
      time: '5 phút trước',
      isRead: false,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 2,
      type: 'comment', 
      user: 'Trần Thị B',
      content: 'đã bình luận về bài viết của bạn',
      time: '10 phút trước',
      isRead: false,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 3,
      type: 'share',
      user: 'Lê Văn C',
      content: 'đã chia sẻ bài viết của bạn',
      time: '15 phút trước',
      isRead: true,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 4,
      type: 'like',
      user: 'Phạm Thị D',
      content: 'đã thích bình luận của bạn',
      time: '20 phút trước',
      isRead: false,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 5,
      type: 'comment',
      user: 'Hoàng Văn E',
      content: 'đã trả lời bình luận của bạn',
      time: '30 phút trước',
      isRead: true,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 6,
      type: 'share',
      user: 'Vũ Thị F',
      content: 'đã chia sẻ ảnh của bạn',
      time: '45 phút trước',
      isRead: false,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 7,
      type: 'like',
      user: 'Đặng Văn G',
      content: 'đã thích bài viết của bạn',
      time: '1 giờ trước',
      isRead: true,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 8,
      type: 'comment',
      user: 'Bùi Thị H',
      content: 'đã bình luận về ảnh của bạn',
      time: '2 giờ trước',
      isRead: false,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 9,
      type: 'share',
      user: 'Ngô Văn I',
      content: 'đã chia sẻ bài viết của bạn',
      time: '3 giờ trước',
      isRead: true,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 10,
      type: 'like',
      user: 'Dương Thị K',
      content: 'đã thích bình luận của bạn',
      time: '4 giờ trước',
      isRead: false,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 11,
      type: 'comment',
      user: 'Lý Văn L',
      content: 'đã bình luận về bài viết của bạn',
      time: '5 giờ trước',
      isRead: true,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 12,
      type: 'share',
      user: 'Mai Thị M',
      content: 'đã chia sẻ ảnh của bạn',
      time: '6 giờ trước',
      isRead: false,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 13,
      type: 'like',
      user: 'Phan Văn N',
      content: 'đã thích bài viết của bạn',
      time: '7 giờ trước',
      isRead: true,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 14,
      type: 'comment',
      user: 'Trương Thị O',
      content: 'đã bình luận về ảnh của bạn',
      time: '8 giờ trước',
      isRead: false,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 15,
      type: 'share',
      user: 'Đỗ Văn P',
      content: 'đã chia sẻ bài viết của bạn',
      time: '9 giờ trước',
      isRead: true,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 16,
      type: 'like',
      user: 'Võ Thị Q',
      content: 'đã thích bình luận của bạn',
      time: '10 giờ trước',
      isRead: false,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 17,
      type: 'comment',
      user: 'Hồ Văn R',
      content: 'đã bình luận về bài viết của bạn',
      time: '11 giờ trước',
      isRead: true,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 18,
      type: 'share',
      user: 'Đinh Thị S',
      content: 'đã chia sẻ ảnh của bạn',
      time: '12 giờ trước',
      isRead: false,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 19,
      type: 'like',
      user: 'Lương Văn T',
      content: 'đã thích bài viết của bạn',
      time: '1 ngày trước',
      isRead: true,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 20,
      type: 'comment',
      user: 'Trịnh Thị U',
      content: 'đã bình luận về ảnh của bạn',
      time: '2 ngày trước',
      isRead: false,
      avatar: 'https://via.placeholder.com/40'
    }
  ])

  const getIcon = (type) => {
    switch(type) {
      case 'like':
        return <FaHeart className="text-red-500" />
      case 'comment':
        return <FaComment className="text-blue-500" />
      case 'share':
        return <FaShare className="text-green-500" />
      default:
        return <FaGlobe className="text-gray-500" />
    }
  }

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? {...notif, isRead: true} : notif
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({...notif, isRead: true})))
  }

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <FaBell className="text-2xl" />
              Thông báo
            </h1>
            <div className="flex gap-4">
              <button 
                onClick={markAllAsRead}
                className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2"
              >
                <FaCheck /> Đánh dấu tất cả đã đọc
              </button>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {notifications.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              Không có thông báo nào
            </div>
          ) : (
            notifications.map(notification => (
              <div 
                key={notification.id}
                className={`p-4 hover:bg-gray-50 transition-all duration-300 cursor-pointer group ${
                  notification.isRead ? 'bg-white' : 'bg-blue-50'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={notification.avatar}
                    alt={notification.user}
                    className="w-12 h-12 rounded-full ring-2 ring-gray-200 hover:ring-blue-400 transition-all duration-300"
                  />
                  <div className="flex-1" onClick={() => markAsRead(notification.id)}>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                        {notification.user}
                      </span>
                      <span className="text-gray-600">{notification.content}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-gray-500">{notification.time}</span>
                      {!notification.isRead && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-xl">
                      {getIcon(notification.type)}
                    </div>
                    <button 
                      onClick={() => deleteNotification(notification.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Notifi