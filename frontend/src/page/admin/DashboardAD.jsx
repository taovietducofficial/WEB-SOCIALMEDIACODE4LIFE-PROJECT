import React, { useState } from 'react'
import { FaUsers, FaComments, FaBell, FaUserFriends, FaGraduationCap, FaUser, FaDatabase, FaChartBar } from 'react-icons/fa'

const DashboardAD = () => {
  const [activeTab, setActiveTab] = useState('posts')

  const [stats] = useState({
    totalUsers: 1250,
    totalPosts: 3500,
    totalComments: 8900,
    totalNotifications: 2500,
    totalGroups: 180,
    totalCourses: 95,
    totalMessages: 25000
  })

  const renderContent = () => {
    switch(activeTab) {
      case 'posts':
        return (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Quản lý bài viết</h2>
            {/* Bảng quản lý bài viết */}
          </div>
        )
      case 'comments':
        return (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Quản lý bình luận</h2>
            {/* Bảng quản lý bình luận */}
          </div>
        )
      case 'notifications':
        return (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Quản lý thông báo</h2>
            {/* Bảng quản lý thông báo */}
          </div>
        )
      case 'groups':
        return (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Quản lý nhóm</h2>
            {/* Bảng quản lý nhóm */}
          </div>
        )
      case 'courses':
        return (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Quản lý khóa học</h2>
            {/* Bảng quản lý khóa học */}
          </div>
        )
      case 'users':
        return (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Quản lý người dùng</h2>
            {/* Bảng quản lý người dùng */}
          </div>
        )
      case 'backup':
        return (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Sao lưu tin nhắn</h2>
            {/* Giao diện sao lưu tin nhắn */}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Bảng điều khiển quản trị</h1>
        
        {/* Thống kê tổng quan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Tổng người dùng</p>
                <h3 className="text-2xl font-bold">{stats.totalUsers}</h3>
              </div>
              <FaUsers className="text-3xl text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Tổng bài viết</p>
                <h3 className="text-2xl font-bold">{stats.totalPosts}</h3>
              </div>
              <FaChartBar className="text-3xl text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Tổng nhóm</p>
                <h3 className="text-2xl font-bold">{stats.totalGroups}</h3>
              </div>
              <FaUserFriends className="text-3xl text-purple-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Tổng khóa học</p>
                <h3 className="text-2xl font-bold">{stats.totalCourses}</h3>
              </div>
              <FaGraduationCap className="text-3xl text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Menu điều hướng */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="flex flex-wrap">
            <button
              onClick={() => setActiveTab('posts')}
              className={`px-6 py-3 ${activeTab === 'posts' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              Bài viết
            </button>
            <button
              onClick={() => setActiveTab('comments')}
              className={`px-6 py-3 ${activeTab === 'comments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              Bình luận
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`px-6 py-3 ${activeTab === 'notifications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              Thông báo
            </button>
            <button
              onClick={() => setActiveTab('groups')}
              className={`px-6 py-3 ${activeTab === 'groups' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              Nhóm
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-3 ${activeTab === 'courses' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              Khóa học
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`px-6 py-3 ${activeTab === 'users' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              Người dùng
            </button>
            <button
              onClick={() => setActiveTab('backup')}
              className={`px-6 py-3 ${activeTab === 'backup' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              Sao lưu
            </button>
          </div>
        </div>

        {/* Nội dung chính */}
        {renderContent()}
      </div>
    </div>
  )
}

export default DashboardAD