import React from 'react'
import { FaHome, FaUserFriends, FaUsers, FaVideo, FaStore, FaGamepad, FaHistory, FaBookmark, FaFlag, FaCalendarAlt } from 'react-icons/fa'

const Sidebar = () => {
  const menuItems = [
    { icon: <FaHome className="text-blue-600" />, text: 'Trang chủ' },
    { icon: <FaUserFriends className="text-green-500" />, text: 'Bạn bè' },
    { icon: <FaUsers className="text-purple-500" />, text: 'Nhóm' },
    { icon: <FaVideo className="text-red-500" />, text: 'Watch' },
    { icon: <FaStore className="text-orange-500" />, text: 'Marketplace' },
    { icon: <FaGamepad className="text-pink-500" />, text: 'Trò chơi' },
    { icon: <FaHistory className="text-indigo-500" />, text: 'Kỷ niệm' },
    { icon: <FaBookmark className="text-yellow-500" />, text: 'Đã lưu' },
    { icon: <FaFlag className="text-teal-500" />, text: 'Trang' },
    { icon: <FaCalendarAlt className="text-cyan-500" />, text: 'Sự kiện' }
  ]

  return (
    <div className="w-[300px] h-screen bg-white p-4 overflow-y-auto fixed left-0 top-16 shadow-lg">
      <div className="space-y-1.5">
        {menuItems.map((item, index) => (
          <div 
            key={index}
            className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md"
          >
            <div className="text-2xl transform transition-transform duration-300 hover:scale-110">{item.icon}</div>
            <span className="text-gray-700 font-medium">{item.text}</span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 my-4"></div>
      
      <div className="text-gray-600">
        <p className="mb-3 font-semibold text-base">Lối tắt của bạn</p>
        <div className="space-y-2">
          {[1, 2, 3].map((_, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 p-2.5 hover:bg-gray-50 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md group"
            >
              <img 
                src={`https://via.placeholder.com/32`}
                alt={`Shortcut ${index + 1}`}
                className="w-9 h-9 rounded-xl ring-2 ring-gray-100 group-hover:ring-blue-100 transition-all duration-300"
              />
              <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                Nhóm {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar