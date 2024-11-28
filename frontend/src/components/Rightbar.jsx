import React, { useState, useEffect } from 'react';

const Rightbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ads = [
    {
      src: "/ads/thanhnien.jpg",
      alt: "Quảng cáo 1",
      link: "thanhnien.vn"
    },
    {
      src: "/ads/elroydevops.jpg", 
      alt: "Quảng cáo 2",
      link: "elroydevops.tech"
    },
    {
      src: "/ads/antoanthongtin.jpg",
      alt: "Quảng cáo 3", 
      link: "antoanthongtin.vn"
    },
    {
      src: "/ads/cardy.jpg",
      alt: "Quảng cáo 4",
      link: "cardy.vn"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const contacts = [
    {
      name: "Nguyễn Văn A",
      avatar: "/428629140_122123821286195094_987946793325005882_n (1).jpg",
      status: "online"
    },
    {
      name: "Trần Thị B", 
      avatar: "/428629140_122123821286195094_987946793325005882_n (1).jpg",
      status: "offline"
    },
    {
      name: "Lê Văn C",
      avatar: "/428629140_122123821286195094_987946793325005882_n (1).jpg", 
      status: "online"
    }
  ];

  return (
    <div className="hidden lg:block lg:w-1/4 bg-white h-[calc(100vh-3.5rem)] p-4 overflow-y-auto fixed right-0 top-14 border-l border-gray-200">
      {/* Sponsored Section */}
      <div className="mb-8">
        <h4 className="text-gray-500 font-semibold mb-4">Được tài trợ</h4>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-sm">
            <a href={`https://${ads[currentIndex].link}`} target="_blank" rel="noopener noreferrer" 
               className="block">
              <img src={ads[currentIndex].src} alt={ads[currentIndex].alt} 
                   className="w-full h-32 md:h-40 object-cover" />
              <span className="text-xs md:text-sm text-gray-600 mt-2 block px-2 pb-2">
                {ads[currentIndex].link}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Your Pages Section */}
      <div className="mb-8">
        <h4 className="text-gray-500 font-semibold mb-4">Trang và trang cá nhân của bạn</h4>
        <div className="flex items-start space-x-3">
          <img src="/428629140_122123821286195094_987946793325005882_n (1).jpg" 
               alt="Code4Life" 
               className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover" />
          <div className="flex flex-col space-y-1">
            <span className="font-medium text-sm md:text-base">Code4Life</span>
            <small className="text-gray-500 text-xs md:text-sm">17 tin nhắn</small>
            <small className="text-gray-500 hover:underline cursor-pointer text-xs md:text-sm">Chuyển sang Trang</small>
            <small className="text-gray-500 hover:underline cursor-pointer text-xs md:text-sm">Tạo bài quảng bá</small>
          </div>
        </div>
      </div>

      {/* Friend Requests Section */}
      <div className="mb-8">
        <h4 className="text-gray-500 font-semibold mb-4">Lời mời kết bạn</h4>
        <div className="flex items-start space-x-3">
          <img src="/428629140_122123821286195094_987946793325005882_n (1).jpg" 
               alt="Tào Việt Đức" 
               className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover" />
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-sm md:text-base">Tào Việt Đức</span>
              <small className="text-gray-500 text-xs md:text-sm">5 ngày</small>
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Xác nhận
              </button>
              <button className="px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div>
        <h4 className="text-gray-500 font-semibold mb-4">Người liên hệ</h4>
        <div className="space-y-3">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
              <div className="relative">
                <img src={contact.avatar} 
                     alt={contact.name} 
                     className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover" />
                <div className={`absolute bottom-0 right-0 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full border-2 border-white
                  ${contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}>
                </div>
              </div>
              <span className="font-medium text-sm md:text-base">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
