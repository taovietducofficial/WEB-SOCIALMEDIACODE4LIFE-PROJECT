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
    },
    {
      id: 3,
      name: 'Lê Văn C',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 7
    },
    {
      id: 4,
      name: 'Phạm Thị D',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 4
    },
    {
      id: 5,
      name: 'Hoàng Văn E',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 6
    },
    {
      id: 6,
      name: 'Vũ Thị F',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 8
    },
    {
      id: 7,
      name: 'Đặng Văn G',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 3
    },
    {
      id: 8,
      name: 'Trương Thị H',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 5
    },
    {
      id: 9,
      name: 'Mai Văn I',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 7
    },
    {
      id: 10,
      name: 'Lý Thị J',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 4
    },
    {
      id: 11,
      name: 'Đinh Văn K',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 6
    },
    {
      id: 12,
      name: 'Bùi Thị L',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 8
    },
    {
      id: 13,
      name: 'Ngô Văn M',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 5
    },
    {
      id: 14,
      name: 'Dương Thị N',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 3
    },
    {
      id: 15,
      name: 'Phan Văn O',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 7
    },
    {
      id: 16,
      name: 'Võ Thị P',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 4
    },
    {
      id: 17,
      name: 'Đỗ Văn Q',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 6
    },
    {
      id: 18,
      name: 'Hồ Thị R',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 8
    },
    {
      id: 19,
      name: 'Trịnh Văn S',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 5
    },
    {
      id: 20,
      name: 'Lương Thị T',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 3
    }
  ])

  const [requestedUsers, setRequestedUsers] = useState([
    {
      id: 21,
      name: 'Nguyễn Văn U',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 8,
      requestedAt: '2024-03-15'
    },
    {
      id: 22,
      name: 'Trần Thị V',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 4,
      requestedAt: '2024-03-14'
    },
    {
      id: 23,
      name: 'Lê Văn W',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 6,
      requestedAt: '2024-03-13'
    },
    {
      id: 24,
      name: 'Phạm Thị X',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 5,
      requestedAt: '2024-03-12'
    },
    {
      id: 25,
      name: 'Hoàng Văn Y',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 7,
      requestedAt: '2024-03-11'
    },
    {
      id: 26,
      name: 'Vũ Thị Z',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 3,
      requestedAt: '2024-03-10'
    },
    {
      id: 27,
      name: 'Đặng Văn AA',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 8,
      requestedAt: '2024-03-09'
    },
    {
      id: 28,
      name: 'Trương Thị BB',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 4,
      requestedAt: '2024-03-08'
    },
    {
      id: 29,
      name: 'Mai Văn CC',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 6,
      requestedAt: '2024-03-07'
    },
    {
      id: 30,
      name: 'Lý Thị DD',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 5,
      requestedAt: '2024-03-06'
    },
    {
      id: 31,
      name: 'Đinh Văn EE',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 7,
      requestedAt: '2024-03-05'
    },
    {
      id: 32,
      name: 'Bùi Thị FF',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 3,
      requestedAt: '2024-03-04'
    },
    {
      id: 33,
      name: 'Ngô Văn GG',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 8,
      requestedAt: '2024-03-03'
    },
    {
      id: 34,
      name: 'Dương Thị HH',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 4,
      requestedAt: '2024-03-02'
    },
    {
      id: 35,
      name: 'Phan Văn II',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 6,
      requestedAt: '2024-03-01'
    },
    {
      id: 36,
      name: 'Võ Thị JJ',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 5,
      requestedAt: '2024-02-29'
    },
    {
      id: 37,
      name: 'Đỗ Văn KK',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 7,
      requestedAt: '2024-02-28'
    },
    {
      id: 38,
      name: 'Hồ Thị LL',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 3,
      requestedAt: '2024-02-27'
    },
    {
      id: 39,
      name: 'Trịnh Văn MM',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 8,
      requestedAt: '2024-02-26'
    },
    {
      id: 40,
      name: 'Lương Thị NN',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 4,
      requestedAt: '2024-02-25'
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