import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaUserFriends, FaBell, FaUser, FaSearch, FaUsers, FaGraduationCap, FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Left section */}
          <div className="flex items-center absolute left-4">
            <Link to="/user/home" className="text-blue-600 text-2xl font-bold">
              Code4Life
            </Link>
            <div className="ml-4 relative hidden md:block">
              {showSearch ? (
                <input
                  type="text"
                  placeholder="Tìm kiếm trên Code4Life..."
                  className="bg-gray-100 rounded-full py-2 px-4 pl-10 w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  onBlur={() => setShowSearch(false)}
                />
              ) : (
                <button onClick={() => setShowSearch(true)}>
                  <FaSearch className="text-gray-500 text-xl" />
                </button>
              )}
              {showSearch && <FaSearch className="absolute left-3 top-3 text-gray-500" />}
            </div>
          </div>

          {/* Center section - Desktop */}
          <div className="hidden md:flex space-x-8 lg:space-x-16 fixed left-1/2 transform -translate-x-1/2">
            <Link to="/user/home" className={`p-3 rounded-lg flex flex-col items-center transition-all duration-200 ${isActive('/user/home') ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
              <FaHome size={24} className={`${isActive('/user/home') ? 'text-blue-600' : 'text-gray-600'}`} />
              <span className={`text-xs mt-1 ${isActive('/user/home') ? 'text-blue-600 font-medium' : ''}`}>Trang chủ</span>
            </Link>
            <Link to="/user/friends" className={`p-3 rounded-lg flex flex-col items-center transition-all duration-200 ${isActive('/user/friends') ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
              <FaUserFriends size={24} className={`${isActive('/user/friends') ? 'text-blue-600' : 'text-gray-600'}`} />
              <span className={`text-xs mt-1 ${isActive('/user/friends') ? 'text-blue-600 font-medium' : ''}`}>Bạn bè</span>
            </Link>
            <Link to="/user/groups" className={`p-3 rounded-lg flex flex-col items-center transition-all duration-200 ${isActive('/user/groups') ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
              <FaUsers size={24} className={`${isActive('/user/groups') ? 'text-blue-600' : 'text-gray-600'}`} />
              <span className={`text-xs mt-1 ${isActive('/user/groups') ? 'text-blue-600 font-medium' : ''}`}>Nhóm</span>
            </Link>
            <Link to="/user/courses" className={`p-3 rounded-lg flex flex-col items-center transition-all duration-200 ${isActive('/user/courses') ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
              <FaGraduationCap size={24} className={`${isActive('/user/courses') ? 'text-blue-600' : 'text-gray-600'}`} />
              <span className={`text-xs mt-1 ${isActive('/user/courses') ? 'text-blue-600 font-medium' : ''}`}>Khóa học</span>
            </Link>
            <Link to="/user/notifications" className={`p-3 rounded-lg flex flex-col items-center transition-all duration-200 ${isActive('/user/notifications') ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
              <FaBell size={24} className={`${isActive('/user/notifications') ? 'text-blue-600' : 'text-gray-600'}`} />
              <span className={`text-xs mt-1 ${isActive('/user/notifications') ? 'text-blue-600 font-medium' : ''}`}>Thông báo</span>
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center absolute right-4">
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/login" className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition duration-200">
                Đăng nhập
              </Link>
              <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition duration-200">
                Đăng ký
              </Link>
              <Link to="/user/profile" className={`p-3 rounded-lg transition duration-200 ${isActive('/user/profile') ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
                <FaUser size={20} className={`${isActive('/user/profile') ? 'text-blue-600' : 'text-gray-600'}`} />
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars size={24} className="text-gray-600" />
            </button>
          </div>

        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="relative mb-4">
                {showSearch ? (
                  <input
                    type="text"
                    placeholder="Tìm kiếm trên Code4Life..."
                    className="bg-gray-100 rounded-full py-2 px-4 pl-10 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    onBlur={() => setShowSearch(false)}
                  />
                ) : (
                  <button 
                    onClick={() => setShowSearch(true)}
                    className="flex items-center w-full px-3 py-2 rounded-md hover:bg-gray-100 transition duration-200"
                  >
                    <FaSearch size={20} className="text-gray-600 mr-3" />
                    <span className="text-gray-600">Tìm kiếm</span>
                  </button>
                )}
                {showSearch && <FaSearch className="absolute left-3 top-3 text-gray-500" />}
              </div>
              
              <Link to="/" className={`block px-3 py-2 rounded-md transition duration-200 ${isActive('/') ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
                <div className="flex items-center">
                  <FaHome size={20} className={`mr-3 ${isActive('/') ? 'text-blue-600' : 'text-gray-600'}`} />
                  <span className={isActive('/') ? 'text-blue-600 font-medium' : ''}>Trang chủ</span>
                </div>
              </Link>
              <Link to="/friends" className={`block px-3 py-2 rounded-md transition duration-200 ${isActive('/friends') ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
                <div className="flex items-center">
                  <FaUserFriends size={20} className={`mr-3 ${isActive('/friends') ? 'text-blue-600' : 'text-gray-600'}`} />
                  <span className={isActive('/friends') ? 'text-blue-600 font-medium' : ''}>Bạn bè</span>
                </div>
              </Link>
              <Link to="/groups" className={`block px-3 py-2 rounded-md transition duration-200 ${isActive('/groups') ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
                <div className="flex items-center">
                  <FaUsers size={20} className={`mr-3 ${isActive('/groups') ? 'text-blue-600' : 'text-gray-600'}`} />
                  <span className={isActive('/groups') ? 'text-blue-600 font-medium' : ''}>Nhóm</span>
                </div>
              </Link>
              <Link to="/courses" className={`block px-3 py-2 rounded-md transition duration-200 ${isActive('/courses') ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
                <div className="flex items-center">
                  <FaGraduationCap size={20} className={`mr-3 ${isActive('/courses') ? 'text-blue-600' : 'text-gray-600'}`} />
                  <span className={isActive('/courses') ? 'text-blue-600 font-medium' : ''}>Khóa học</span>
                </div>
              </Link>
              <Link to="/notifications" className={`block px-3 py-2 rounded-md transition duration-200 ${isActive('/notifications') ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
                <div className="flex items-center">
                  <FaBell size={20} className={`mr-3 ${isActive('/notifications') ? 'text-blue-600' : 'text-gray-600'}`} />
                  <span className={isActive('/notifications') ? 'text-blue-600 font-medium' : ''}>Thông báo</span>
                </div>
              </Link>
              <div className="border-t mt-2 pt-2">
                <Link to="/login" className="block px-3 py-2 text-blue-600 hover:bg-gray-100 rounded-md transition duration-200">
                  Đăng nhập
                </Link>
                <Link to="/signup" className="block px-3 py-2 text-blue-600 hover:bg-gray-100 rounded-md transition duration-200">
                  Đăng ký
                </Link>
                <Link to="/profile" className={`block px-3 py-2 rounded-md transition duration-200 ${isActive('/profile') ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
                  <div className="flex items-center">
                    <FaUser size={20} className={`mr-3 ${isActive('/profile') ? 'text-blue-600' : 'text-gray-600'}`} />
                    <span className={isActive('/profile') ? 'text-blue-600 font-medium' : ''}>Hồ sơ</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar