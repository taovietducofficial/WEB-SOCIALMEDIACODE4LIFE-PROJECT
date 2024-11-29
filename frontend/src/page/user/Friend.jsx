import React, { useState } from 'react'
import { FaUserPlus, FaUserCheck, FaUserFriends } from 'react-icons/fa'

const Friend = () => {
  const [followingUsers, setFollowingUsers] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn A',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 5
    },
    {
      id: 2,
      name: 'Trần Thị B', 
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 3
    }
  ])

  const [requestedUsers, setRequestedUsers] = useState([
    {
      id: 3,
      name: 'Lê Văn C',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 8,
      requestedAt: '2024-03-15'
    },
    {
      id: 4,
      name: 'Phạm Thị D',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 4, 
      requestedAt: '2024-03-14'
    }
  ])

  const handleUnfollow = (userId) => {
    setFollowingUsers(followingUsers.filter(user => user.id !== userId))
  }

  const handleCancelRequest = (userId) => {
    setRequestedUsers(requestedUsers.filter(user => user.id !== userId))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cột đang theo dõi */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-8">
              <FaUserFriends className="text-2xl text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Đang theo dõi</h1>
            </div>
            <div className="space-y-6">
              {followingUsers.map(user => (
                <div key={user.id} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition duration-300">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-14 h-14 rounded-full border-2 border-blue-200 p-0.5" 
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-lg">{user.name}</h3>
                      <p className="text-sm text-gray-600">
                        <FaUserFriends className="inline mr-1" />
                        {user.mutualFriends} bạn chung
                      </p>
                    </div>
                    <button
                      onClick={() => handleUnfollow(user.id)}
                      className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 flex items-center transition duration-300"
                    >
                      <FaUserCheck className="mr-2" />
                      <span>Bỏ theo dõi</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cột đã gửi yêu cầu */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-8">
              <FaUserPlus className="text-2xl text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">Đã gửi yêu cầu</h1>
            </div>
            <div className="space-y-6">
              {requestedUsers.map(user => (
                <div key={user.id} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition duration-300">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-14 h-14 rounded-full border-2 border-green-200 p-0.5" 
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-lg">{user.name}</h3>
                      <p className="text-sm text-gray-600">
                        <FaUserFriends className="inline mr-1" />
                        {user.mutualFriends} bạn chung
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Đã gửi: {user.requestedAt}</p>
                    </div>
                    <button
                      onClick={() => handleCancelRequest(user.id)}
                      className="px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 flex items-center transition duration-300"
                    >
                      <FaUserPlus className="mr-2" />
                      <span>Hủy yêu cầu</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Friend