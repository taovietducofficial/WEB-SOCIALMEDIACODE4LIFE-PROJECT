import React from 'react'
import Sidebar from '../../components/Sidebar'
import Rightbar from '../../components/Rightbar'

const Home = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Left Sidebar */}
      <div className="w-1/4 fixed h-screen">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-1/2 mx-auto mt-4 px-4">
        {/* Create Post */}
        <div className="bg-white rounded-lg p-4 shadow mb-4">
          <div className="flex items-center space-x-4">
            <img 
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full"
            />
            <input
              type="text"
              placeholder="Bạn đang nghĩ gì?"
              className="bg-gray-100 rounded-full px-4 py-2 w-full"
            />
          </div>
          <div className="flex justify-between mt-4 pt-2 border-t">
            <button className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg">
              <span>🎥</span>
              <span>Video trực tiếp</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg">
              <span>🖼️</span>
              <span>Ảnh/Video</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg">
              <span>😊</span>
              <span>Cảm xúc</span>
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {/* Sample Post */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="https://via.placeholder.com/40"
                  alt="User"
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Người dùng</h3>
                  <p className="text-gray-500 text-sm">2 giờ trước</p>
                </div>
              </div>
              <p className="mt-4">Đây là nội dung bài viết mẫu</p>
              <img 
                src="https://via.placeholder.com/500x300"
                alt="Post content"
                className="mt-4 w-full rounded-lg"
              />
              <div className="flex justify-between items-center mt-4 pt-2 border-t">
                <button className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg">
                  <span>👍</span>
                  <span>Thích</span>
                </button>
                <button className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg">
                  <span>💬</span>
                  <span>Bình luận</span>
                </button>
                <button className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg">
                  <span>↗️</span>
                  <span>Chia sẻ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4 fixed right-0 h-screen">
        <Rightbar />
      </div>
    </div>
  )
}

export default Home