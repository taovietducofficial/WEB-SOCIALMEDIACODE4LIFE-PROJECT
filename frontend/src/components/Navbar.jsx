import { FaSearch, FaHome, FaUser, FaBell, FaSignOutAlt, FaCaretDown, FaCog, FaLifeRing, FaMoon, FaCommentDots, FaArrowRight } from 'react-icons/fa';
import { ImFilm } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLink, setActiveLink] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1);
    setActiveLink(path || 'home');
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);
  const toggleNotification = () => setNotificationOpen(prev => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('Searching for:', searchQuery);
    }
  };

  const handleNavigation = (path, linkName) => {
    setActiveLink(linkName);
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left section */}
          <div className="flex items-center flex-1">
            <div className="flex-shrink-0 transition-transform hover:scale-105">
              <img 
                src="/428629140_122123821286195094_987946793325005882_n (1).jpg" 
                alt="Code4Life"
                className="h-10 w-10 sm:h-12 sm:w-12 cursor-pointer rounded-full"
                onClick={() => handleNavigation('/home')}
              />
            </div>
            <div className="hidden sm:block ml-4">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Tìm kiếm trên Code4Life"
                  className="bg-gray-100 rounded-full pl-12 pr-4 py-2.5 w-48 md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:w-72 md:focus:w-80 transition-all"
                  value={searchQuery}
                  onChange={handleSearch}
                  onKeyPress={handleKeyPress}
                />
              </div>
            </div>
          </div>

          {/* Center section - Hidden on mobile */}
          <div className="hidden md:flex justify-center flex-1">
            <div className="flex space-x-2 lg:space-x-4">
              <button 
                onClick={() => handleNavigation('/', 'home')}
                className={`px-6 lg:px-12 py-2 rounded-xl hover:bg-gray-100 transition-all duration-200 border-b-4 ${
                  activeLink === 'home' ? 'border-blue-500 bg-blue-50' : 'border-transparent'
                }`}
              >
                <FaHome className={`text-xl lg:text-2xl ${activeLink === 'home' ? 'text-blue-500' : 'text-gray-500'}`} />
              </button>
              <button 
                onClick={() => handleNavigation('/reels', 'reels')}
                className={`px-6 lg:px-12 py-2 rounded-xl hover:bg-gray-100 transition-all duration-200 border-b-4 ${
                  activeLink === 'reels' ? 'border-blue-500 bg-blue-50' : 'border-transparent'
                }`}
              >
                <ImFilm className={`text-xl lg:text-2xl ${activeLink === 'reels' ? 'text-blue-500' : 'text-gray-500'}`} />
              </button>
              <button 
                onClick={() => handleNavigation('/group', 'group')}
                className={`px-6 lg:px-12 py-2 rounded-xl hover:bg-gray-100 transition-all duration-200 border-b-4 ${
                  activeLink === 'group' ? 'border-blue-500 bg-blue-50' : 'border-transparent'
                }`}
              >
                <FaPeopleGroup className={`text-xl lg:text-2xl ${activeLink === 'group' ? 'text-blue-500' : 'text-gray-500'}`} />
              </button>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center justify-end flex-1 space-x-2 sm:space-x-3">
            {/* Mobile search button */}
            <button className="sm:hidden p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <FaSearch className="text-xl text-gray-600" />
            </button>

            <div className="relative" ref={notificationRef}>
              <button 
                className="p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                onClick={toggleNotification}
              >
                <FaBell className="text-xl text-gray-600" />
              </button>

              {notificationOpen && (
                <div className="absolute right-0 mt-3 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="text-xl font-bold">Thông báo</h3>
                  </div>
                  <div className="max-h-[50vh] sm:max-h-[600px] overflow-y-auto">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="p-4 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex items-start gap-3">
                          <img 
                            src="/428629140_122123821286195094_987946793325005882_n (1).jpg"
                            className="w-12 h-12 rounded-full"
                            alt="User"
                          />
                          <div>
                            <p className="text-sm text-gray-800">
                              <span className="font-semibold">Code4Life</span> đã thêm một bài viết mới
                            </p>
                            <span className="text-xs text-gray-500">3 giờ trước</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center border-t border-gray-200">
                    <button className="text-blue-500 hover:text-blue-600 font-medium">
                      Xem tất cả
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleDropdown}
                className="flex items-center p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <img 
                  src="/428629140_122123821286195094_987946793325005882_n (1).jpg"
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover border-2 border-gray-200"
                  alt="Profile"
                />
                <FaCaretDown className={`ml-1.5 text-gray-600 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-[calc(100vw-2rem)] sm:w-80 bg-white rounded-xl shadow-2xl border border-gray-200">
                  <div className="p-3">
                    <div className="flex items-center p-2.5 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <img 
                        src="/428629140_122123821286195094_987946793325005882_n (1).jpg"
                        className="h-11 w-11 rounded-full border-2 border-gray-200"
                        alt="Profile"
                      />
                      <span className="ml-3 font-semibold text-gray-800">Code4Life</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200">
                    <div className="p-2">
                      {[
                        { icon: FaCog, text: 'Cài đặt & quyền riêng tư', path: '/settings' },
                        { icon: FaLifeRing, text: 'Trợ giúp & hỗ trợ', path: '/help' },
                        { icon: FaMoon, text: 'Màn hình & trợ năng', path: '/display' },
                        { icon: FaCommentDots, text: 'Đóng góp ý kiến', path: '/feedback' },
                        { icon: FaSignOutAlt, text: 'Đăng xuất', path: '/logout', className: 'text-red-500' }
                      ].map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleNavigation(item.path)}
                          className={`w-full flex items-center p-3.5 rounded-lg hover:bg-gray-100 transition-colors ${item.className || 'text-gray-700'}`}
                        >
                          <item.icon className="mr-3.5 text-lg" />
                          <span className="font-medium">{item.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile navigation menu */}
        <div className="md:hidden border-t border-gray-200">
          <div className="flex justify-around py-2">
            <button 
              onClick={() => handleNavigation('/home', 'home')}
              className={`p-2 rounded-lg ${activeLink === 'home' ? 'text-blue-500' : 'text-gray-500'}`}
            >
              <FaHome className="text-2xl" />
            </button>
            <button 
              onClick={() => handleNavigation('/reels', 'reels')}
              className={`p-2 rounded-lg ${activeLink === 'reels' ? 'text-blue-500' : 'text-gray-500'}`}
            >
              <ImFilm className="text-2xl" />
            </button>
            <button 
              onClick={() => handleNavigation('/group', 'group')}
              className={`p-2 rounded-lg ${activeLink === 'group' ? 'text-blue-500' : 'text-gray-500'}`}
            >
              <FaPeopleGroup className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
