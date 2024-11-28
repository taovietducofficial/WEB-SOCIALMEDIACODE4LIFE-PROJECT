import './Sidebar.css';
import { 
  FaUserFriends, 
  FaStore, 
  FaGamepad 
} from 'react-icons/fa';
import { RiMemoriesFill } from "react-icons/ri";
import { CiSaveDown2 } from "react-icons/ci";
import { TiGroup } from "react-icons/ti";
import { GoVideo } from "react-icons/go";
import { CgFeed } from "react-icons/cg";
import { MdEvent, MdOutlineExpandMore } from "react-icons/md";
import { BsPencil } from "react-icons/bs";

const Sidebar = () => {
  const menuItems = [
    { icon: FaUserFriends, text: 'Bạn bè', badge: '3' },
    { icon: RiMemoriesFill, text: 'Kỷ niệm' },
    { icon: CiSaveDown2, text: 'Đã lưu' },
    { icon: TiGroup, text: 'Nhóm', badge: '5' },
    { icon: GoVideo, text: 'Video' },
    { icon: MdEvent, text: 'Sự kiện' },
    { icon: FaGamepad, text: 'Chơi game' },
    { icon: CgFeed, text: 'Bảng feed' },
    { icon: MdOutlineExpandMore, text: 'Xem thêm', className: 'show-more' }
  ];

  const shortcuts = [
    { image: '/428629140_122123821286195094_987946793325005882_n (1).jpg', text: 'Code4Life' },
    { image: '/428629140_122123821286195094_987946793325005882_n (1).jpg', text: 'Góc Nhỏ Pokédex' }
  ];

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img 
          src="/428629140_122123821286195094_987946793325005882_n (1).jpg" 
          alt="Profile" 
          className="profile-pic"
        />
        <div className="profile-info">
          <p className="username">Code4Life</p>
          <small className="user-status">@code4life</small>
        </div>
      </div>

      <div className="menu-section">
        {menuItems.map((item, index) => (
          <button key={index} className={`menu-item ${item.className || ''}`}>
            <item.icon className="menu-icon" />
            <span>{item.text}</span>
            {item.badge && <span className="notification-badge">{item.badge}</span>}
          </button>
        ))}
      </div>

      <div className="your-shortcuts">
        <div className="shortcuts-header">
          <h4>Lối tắt của bạn</h4>
          <button className="edit-button">
            <BsPencil className="edit-icon" />
          </button>
        </div>
        <div className="shortcut-items">
          {shortcuts.map((shortcut, index) => (
            <button key={index} className="shortcut-item">
              <img src={shortcut.image} alt={shortcut.text} />
              <span>{shortcut.text}</span>
            </button>
          ))}
          <button className="shortcut-item show-more">
            <MdOutlineExpandMore className="shortcut-icon" />
            <span>Xem thêm</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
