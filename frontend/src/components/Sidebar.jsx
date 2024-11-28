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
    { icon: MdOutlineExpandMore, text: 'Xem thêm', className: 'hover:bg-gray-100' }
  ];

  const shortcuts = [
    { image: '/428629140_122123821286195094_987946793325005882_n (1).jpg', text: 'Code4Life' },
    { image: '/428629140_122123821286195094_987946793325005882_n (1).jpg', text: 'Góc Nhỏ Pokédex' }
  ];

  return (
    <div className="hidden lg:block lg:w-1/4 bg-white h-[calc(100vh-3.5rem)] p-4 overflow-y-auto fixed left-0 top-14 border-r border-gray-200">
      <div className="flex items-center gap-3 mb-6 p-2">
        <img 
          src="/428629140_122123821286195094_987946793325005882_n (1).jpg" 
          alt="Profile" 
          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-800 text-sm md:text-base">Code4Life</p>
          <small className="text-gray-500 text-xs md:text-sm">@code4life</small>
        </div>
      </div>

      <div className="space-y-1">
        {menuItems.map((item, index) => (
          <button 
            key={index} 
            className={`flex items-center w-full p-2 md:p-3 rounded-lg hover:bg-gray-100 transition-colors ${item.className || ''}`}
          >
            <item.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-600 mr-2 md:mr-3" />
            <span className="text-gray-700 text-sm md:text-base">{item.text}</span>
            {item.badge && (
              <span className="ml-auto bg-red-500 text-white text-xs px-1.5 md:px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 md:mt-8">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h4 className="font-semibold text-gray-600 text-sm md:text-base">Lối tắt của bạn</h4>
          <button className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors">
            <BsPencil className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
          </button>
        </div>
        <div className="space-y-1.5 md:space-y-2">
          {shortcuts.map((shortcut, index) => (
            <button key={index} className="flex items-center w-full p-1.5 md:p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <img src={shortcut.image} alt={shortcut.text} className="w-6 h-6 md:w-8 md:h-8 rounded-lg object-cover mr-2 md:mr-3" />
              <span className="text-gray-700 text-sm md:text-base">{shortcut.text}</span>
            </button>
          ))}
          <button className="flex items-center w-full p-1.5 md:p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <MdOutlineExpandMore className="w-6 h-6 md:w-8 md:h-8 text-gray-500 mr-2 md:mr-3" />
            <span className="text-gray-700 text-sm md:text-base">Xem thêm</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
