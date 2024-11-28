import React, { useState, useEffect } from 'react';
import './Rightbar.css';

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
    <div className="right-bar">
      <div className="sponsored-section">
        <h4>Được tài trợ</h4>
        <div className="slideshow-container">
          <div className="sponsored-item">
            <a href={`https://${ads[currentIndex].link}`} target="_blank" rel="noopener noreferrer">
              <img src={ads[currentIndex].src} alt={ads[currentIndex].alt} />
            </a>
            <span>{ads[currentIndex].link}</span>
          </div>
        </div>
      </div>

      <div className="your-pages-section">
        <h4>Trang và trang cá nhân của bạn</h4>
        <div className="your-page-item">
          <img src="/428629140_122123821286195094_987946793325005882_n (1).jpg" alt="Code4Life" />
          <div className="page-details">
            <span>Code4Life</span>
            <small>17 tin nhắn</small>
            <small>Chuyển sang Trang</small>
            <small>Tạo bài quảng bá</small>
          </div>
        </div>
      </div>

      <div className="friend-requests-section">
        <h4>Lời mời kết bạn</h4>
        <div className="friend-request-item">
          <img src="/428629140_122123821286195094_987946793325005882_n (1).jpg" alt="Tào Việt Đức" />
          <div className="request-details">
            <span>Tào Việt Đức</span> <small>5 ngày</small>
            <div className="request-actions">
              <button className="accept">Xác nhận</button>
              <button className="delete">Xóa</button>
            </div>
          </div>
        </div>
      </div>

      <div className="contacts-section">
        <h4>Người liên hệ</h4>
        {contacts.map((contact, index) => (
          <div key={index} className="contact-item">
            <img src={contact.avatar} alt={contact.name} />
            <div className="contact-info">
              <span>{contact.name}</span>
              <div className={`status-dot ${contact.status}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rightbar;
