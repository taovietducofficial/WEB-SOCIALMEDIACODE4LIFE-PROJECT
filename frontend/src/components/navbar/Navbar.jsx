import './Navbar.css';
import { FaSearch, FaHome, FaUser, FaBell, FaSignOutAlt, FaCaretDown, FaCog, FaLifeRing, FaMoon, FaCommentDots, FaArrowRight } from 'react-icons/fa';
import { ImFilm } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLink, setActiveLink] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set active link based on current path
    const path = location.pathname.substring(1); // Remove leading slash
    setActiveLink(path || 'home'); // Default to 'home' if path is empty
  }, [location]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Add debounced search functionality here
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  const handleNavigation = (path, linkName) => {
    setActiveLink(linkName);
    const transitionDiv = document.createElement('div');
    transitionDiv.className = 'page-transition';
    document.body.appendChild(transitionDiv);

    setTimeout(() => {
      navigate(path);
      setTimeout(() => {
        transitionDiv.classList.add('fade-out');
        setTimeout(() => {
          document.body.removeChild(transitionDiv);
        }, 500);
      }, 100);
    }, 300);
  };

  return (
    <nav className="navbar">
      {/* Logo and Search */}
      <div className="navbar-logo">
        <a onClick={() => handleNavigation('/profile')} className="logo-text" style={{cursor: 'pointer'}}>Code4Life</a>
        <div className="navbar-search">
          <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            value={searchQuery}
            onChange={handleSearch}
            onKeyPress={handleKeyPress}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><a onClick={() => handleNavigation('/home', 'home')} className={activeLink === 'home' ? 'active' : ''} title="Trang chủ" style={{cursor: 'pointer'}}><FaHome /></a></li>
        <li><a onClick={() => handleNavigation('/reels', 'reels')} className={activeLink === 'reels' ? 'active' : ''} title="Reels" style={{cursor: 'pointer'}}><ImFilm /></a></li>
        <li><a onClick={() => handleNavigation('/group', 'group')} className={activeLink === 'group' ? 'active' : ''} title="Nhóm" style={{cursor: 'pointer'}}><FaPeopleGroup /></a></li>
        <li>
          <a onClick={() => handleNavigation('/notification', 'notification')} className={`notification-link ${activeLink === 'notification' ? 'active' : ''}`} title="Thông báo" style={{cursor: 'pointer'}}>
            <FaBell />
            <span className="notification-badge">3</span>
          </a>
        </li>
      </ul>

      {/* User Profile Dropdown */}
      <div className="navbar-profile" ref={dropdownRef}>
        <img
          src="/428629140_122123821286195094_987946793325005882_n (1).jpg"
          alt="User avatar"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          className="profile-avatar"
        />
        <FaCaretDown 
          className={`dropdown-icon ${dropdownOpen ? 'rotated' : ''}`} 
          onClick={toggleDropdown} 
        />
        {dropdownOpen && (
          <div className="dropdown-menu show" onClick={(e) => e.stopPropagation()}>
            <div className="dropdown-profile">
              <img 
                src="/428629140_122123821286195094_987946793325005882_n (1).jpg"                
                alt="User" 
                className="dropdown-avatar"
              />
              <span className="dropdown-name">Code4Life</span>
            </div>
            <hr className="dropdown-divider" />
            <a onClick={() => handleNavigation('/profile')} className="dropdown-item" style={{cursor: 'pointer'}}><FaUser /> Code4Life</a>
            <a onClick={() => handleNavigation('/profile')} className="dropdown-item" style={{cursor: 'pointer'}}><FaUser /> Tào Việt Đức</a>
            <a onClick={() => handleNavigation('/all-pages')} className="dropdown-item" style={{cursor: 'pointer'}}><FaArrowRight /> Xem tất cả trang cá nhân</a>
            <hr className="dropdown-divider" />
            <a onClick={() => handleNavigation('/meta-suite')} className="dropdown-item" style={{cursor: 'pointer'}}><FaCog /> Meta Business Suite</a>
            <a onClick={() => handleNavigation('/privacy')} className="dropdown-item" style={{cursor: 'pointer'}}><FaCog /> Cài đặt & quyền riêng tư</a>
            <a onClick={() => handleNavigation('/help')} className="dropdown-item" style={{cursor: 'pointer'}}><FaLifeRing /> Trợ giúp & hỗ trợ</a>
            <a onClick={() => handleNavigation('/accessibility')} className="dropdown-item" style={{cursor: 'pointer'}}><FaMoon /> Màn hình & trợ năng</a>
            <a onClick={() => handleNavigation('/feedback')} className="dropdown-item" style={{cursor: 'pointer'}}><FaCommentDots /> Đóng góp ý kiến</a>
            <a onClick={() => handleNavigation('/login')} className="dropdown-item logout" style={{cursor: 'pointer'}}><FaSignOutAlt /> Đăng xuất</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
