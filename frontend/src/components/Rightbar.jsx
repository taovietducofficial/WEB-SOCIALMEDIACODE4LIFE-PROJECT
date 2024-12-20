import React from 'react'
import { FaBirthdayCake, FaUserFriends, FaUsers } from 'react-icons/fa'

const Rightbar = () => {
  const birthdays = [
    {
      id: 1,
      name: 'Nguyễn Văn A', 
      avatar: "/428629140_122123821286195094_987946793325005882_n (1).jpg"
    },
    {
      id: 2,
      name: 'Trần Thị B',
      avatar: 'https://via.placeholder.com/40'
    }
  ]

  const onlineFriends = [
    {
      id: 1,
      name: 'Lê Văn C',
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 2,
      name: 'Phạm Thị D',
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 3,
      name: 'Hoàng Văn E',
      avatar: 'https://via.placeholder.com/40'
    }
  ]

  const suggestedGroups = [
    {
      id: 1,
      name: 'Nhóm Du lịch Việt Nam',
      avatar: 'https://via.placeholder.com/40',
      members: 1200
    },
    {
      id: 2,
      name: 'Hội Ẩm thực',
      avatar: 'https://via.placeholder.com/40',
      members: 850
    }
  ]

  return (
    <div className="w-[320px] p-4 space-y-6 fixed right-0 top-16 h-screen overflow-y-auto">
      {/* Sinh nhật */}
      <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="font-semibold mb-4 flex items-center text-lg">
          <FaBirthdayCake className="text-pink-500 mr-3 text-xl" />
          Sinh nhật hôm nay
        </h3>
        <div className="space-y-4">
          {birthdays.map(person => (
            <div key={person.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <img src={person.avatar} alt={person.name} className="w-12 h-12 rounded-full ring-2 ring-pink-100" />
              <p className="text-sm">
                <span className="font-medium text-gray-800">{person.name}</span>
                <span className="text-gray-600"> có sinh nhật hôm nay</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bạn bè trực tuyến */}
      <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="font-semibold mb-4 flex items-center text-lg">
          <FaUserFriends className="text-green-500 mr-3 text-xl" />
          Bạn bè đang hoạt động
        </h3>
        <div className="space-y-4">
          {onlineFriends.map(friend => (
            <div key={friend.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="relative">
                <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full ring-2 ring-green-100" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="font-medium text-gray-800 hover:text-green-600 transition-colors">{friend.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gợi ý nhóm */}
      <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="font-semibold mb-4 flex items-center text-lg">
          <FaUsers className="text-blue-500 mr-3 text-xl" />
          Gợi ý nhóm cho bạn
        </h3>
        <div className="space-y-4">
          {suggestedGroups.map(group => (
            <div key={group.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <img src={group.avatar} alt={group.name} className="w-12 h-12 rounded-xl ring-2 ring-blue-100" />
                <div>
                  <p className="font-medium text-gray-800">{group.name}</p>
                  <p className="text-sm text-gray-500">{group.members.toLocaleString()} thành viên</p>
                </div>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-white hover:bg-blue-500 rounded-lg transition-all duration-300 border border-blue-200 hover:border-blue-500">
                Tham gia
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Rightbar