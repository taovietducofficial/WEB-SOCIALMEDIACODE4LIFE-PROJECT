import React, { useState } from 'react'
import './Notification.css'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
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
        return <FaUserPlus className="notification-icon friend" />
      case 'like':
        return <FaHeart className="notification-icon like" />
      case 'comment':
        return <FaComment className="notification-icon comment" />
      default:
        return <IoNotificationsSharp className="notification-icon" />
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
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className='notification-layout'>
          <div className="notification-header">
            <h2>Thông báo</h2>
            <div className="notification-filters">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                Tất cả
              </button>
              <button 
                className={`filter-btn ${filter === 'unread' ? 'active' : ''}`}
                onClick={() => setFilter('unread')}
              >
                Chưa đọc
              </button>
              <button 
                className="filter-btn"
                onClick={handleMarkAllAsRead}
              >
                Đánh dấu tất cả đã đọc
              </button>
            </div>
          </div>

          <div className="notification-list">
            {filteredNotifications.map(notification => (
              <div key={notification.id} className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}>
                <div className="notification-avatar">
                  <img src={notification.avatar} alt="avatar" />
                  {getIcon(notification.type)}
                </div>
                <div className="notification-content">
                  <p>{notification.content}</p>
                  <span className="notification-time">{notification.time}</span>
                </div>
                <div className="notification-actions">
                  <button 
                    className="action-btn"
                    onClick={() => handleMarkAsRead(notification.id)}
                  >
                    {!notification.isRead && "Đánh dấu đã đọc"}
                  </button>
                  <button 
                    className="action-btn"
                    onClick={() => handleDelete(notification.id)}
                  >
                    <FaEllipsisH />
                  </button>
                </div>
              </div>
            ))}
            {filteredNotifications.length === 0 && (
              <div className="no-notifications">
                Không có thông báo nào
              </div>
            )}
          </div>
        </div>
        <Rightbar />
      </div>
    </div>
  )
}
