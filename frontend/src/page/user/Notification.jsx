import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Rightbar from '../../components/Rightbar';
import { IoNotificationsSharp } from "react-icons/io5"
import { FaUserPlus, FaHeart, FaComment, FaEllipsisH } from "react-icons/fa"

export const Notification = () => {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      avatar: "/428629140_122123821286195094_987946793325005882_n (1).jpg",
      content: "Nguyễn Văn A đã gửi lời mời kết bạn cho bạn",
      time: "1 giờ trước",
      type: "friend",
      isRead: false
    },
    {
      id: 2, 
      avatar: "/428629140_122123821286195094_987946793325005882_n (1).jpg",
      content: "Trần Thị B đã thích bài viết của bạn",
      time: "2 giờ trước", 
      type: "like",
      isRead: true
    },
    {
      id: 3,
      avatar: "/428629140_122123821286195094_987946793325005882_n (1).jpg",
      content: "Lê Văn C đã bình luận về bài viết của bạn",
      time: "3 giờ trước",
      type: "comment", 
      isRead: false
    }
  ]);

  const getIcon = (type) => {
    switch(type) {
      case 'friend':
        return <FaUserPlus className="text-blue-500 text-xl" />
      case 'like':
        return <FaHeart className="text-red-500 text-xl" />
      case 'comment':
        return <FaComment className="text-green-500 text-xl" />
      default:
        return <IoNotificationsSharp className="text-gray-500 text-xl" />
    }
  }

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? {...notification, isRead: true} : notification
    ));
  }

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(notification => ({...notification, isRead: true})));
  }

  const handleDelete = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  }

  const filteredNotifications = filter === 'unread' 
    ? notifications.filter(n => !n.isRead)
    : notifications;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Thông báo</h2>
              <div className="space-x-2">
                <button 
                  className={`px-4 py-2 rounded-md transition-colors ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => setFilter('all')}
                >
                  Tất cả
                </button>
                <button 
                  className={`px-4 py-2 rounded-md transition-colors ${filter === 'unread' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => setFilter('unread')}
                >
                  Chưa đọc
                </button>
                <button 
                  className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                  onClick={handleMarkAllAsRead}
                >
                  Đánh dấu tất cả đã đọc
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {filteredNotifications.map(notification => (
                <div 
                  key={notification.id} 
                  className={`flex items-center justify-between p-4 rounded-lg ${notification.isRead ? 'bg-white' : 'bg-blue-50'} hover:bg-gray-50 transition-colors`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img 
                        src={notification.avatar} 
                        alt="avatar" 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                        {getIcon(notification.type)}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-800">{notification.content}</p>
                      <span className="text-sm text-gray-500">{notification.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {!notification.isRead && (
                      <button 
                        className="px-3 py-1 text-sm text-blue-500 hover:bg-blue-50 rounded-md transition-colors"
                        onClick={() => handleMarkAsRead(notification.id)}
                      >
                        Đánh dấu đã đọc
                      </button>
                    )}
                    <button 
                      className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                      onClick={() => handleDelete(notification.id)}
                    >
                      <FaEllipsisH />
                    </button>
                  </div>
                </div>
              ))}
              {filteredNotifications.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  Không có thông báo nào
                </div>
              )}
            </div>
          </div>
        </div>
        <Rightbar />
      </div>
    </div>
  )
}
