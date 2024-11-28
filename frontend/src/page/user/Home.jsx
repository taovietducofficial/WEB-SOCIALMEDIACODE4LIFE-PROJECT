import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Rightbar from '../../components/Rightbar';
import { FaGlobe, FaUserFriends, FaLock, FaImage, FaSmile, FaMapMarkerAlt, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImages, setNewPostImages] = useState([]);
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  useEffect(() => {
    const samplePosts = [
      {
        id: 1,
        user: {
          name: 'Tào Việt Đức',
          avatar: "/428629140_122123821286195094_987946793325005882_n (1).jpg",
        },
        content: 'Hôm nay là một ngày tuyệt vời!',
        timestamp: '2 giờ trước',
        images: ["/428629140_122123821286195094_987946793325005882_n (1).jpg"],
        likes: 15,
        comments: [
          { id: 1, user: 'Trần Thị B', text: 'Bài viết hay quá!' }
        ]
      },
      {
        id: 2,
        user: {
          name: 'Huỳnh Trung Kiên',
          avatar: '/428629140_122123821286195094_987946793325005882_n (1).jpg'
        },
        content: 'Đi code dạo cùng anh em!',
        timestamp: '5 giờ trước',
        images: [
          '/428629140_122123821286195094_987946793325005882_n (1).jpg',
          '/428629140_122123821286195094_987946793325005882_n (1).jpg'
        ],
        likes: 25,
        comments: [
          { id: 1, user: 'Phạm Thị D', text: 'Code hay quá anh ơi!' },
          { id: 2, user: 'Hoàng Văn E', text: 'Cho em xin source code với ạ!' }
        ]
      },
      {
        id: 3,
        user: {
          name: 'Huỳnh Trung Kiên', 
          avatar: '/428629140_122123821286195094_987946793325005882_n (1).jpg'
        },
        content: 'Đi code dạo cùng anh em!',
        timestamp: '5 giờ trước',
        images: [
          '/428629140_122123821286195094_987946793325005882_n (1).jpg',
          '/428629140_122123821286195094_987946793325005882_n (1).jpg',
          '/428629140_122123821286195094_987946793325005882_n (1).jpg'
        ],
        likes: 25,
        comments: [
          { id: 1, user: 'Phạm Thị D', text: 'Code hay quá anh ơi!' },
          { id: 2, user: 'Hoàng Văn E', text: 'Cho em xin source code với ạ!' }
        ]
      }
    ];
    setPosts(samplePosts);
  }, []);

  const handleCreatePost = () => {
    if (!newPostContent.trim() && newPostImages.length === 0) return;

    const newPost = {
      id: posts.length + 1,
      user: {
        name: 'Người dùng hiện tại',
        avatar: '/428629140_122123821286195094_987946793325005882_n (1).jpg'
      },
      content: newPostContent,
      timestamp: 'Vừa xong',
      images: newPostImages,
      likes: 0,
      comments: []
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
    setNewPostImages([]);
    setShowCreatePostModal(false);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setNewPostImages([...newPostImages, ...imageUrls]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 w-full lg:max-w-2xl mx-auto py-4 lg:py-6 px-2 lg:px-4">
          {/* Create Post Card */}
          <div className="bg-white rounded-lg shadow p-3 lg:p-4 mb-4 lg:mb-6">
            <div className="flex items-center space-x-2 lg:space-x-4">
              <img
                src="/428629140_122123821286195094_987946793325005882_n (1).jpg"
                alt="user avatar"
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
              />
              <button 
                onClick={() => setShowCreatePostModal(true)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full py-2 lg:py-2.5 px-3 lg:px-4 text-left text-sm lg:text-base text-gray-500"
              >
                CODE4LIFE ơi, bạn đang nghĩ gì thế?
              </button>
            </div>
          </div>

          {/* Create Post Modal */}
          {showCreatePostModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 lg:p-4">
              <div className="bg-white rounded-xl w-full max-w-sm lg:max-w-lg" onClick={e => e.stopPropagation()}>
                <div className="border-b p-3 lg:p-4 flex items-center justify-between">
                  <h3 className="text-lg lg:text-xl font-semibold">Tạo bài viết</h3>
                  <button 
                    onClick={() => setShowCreatePostModal(false)}
                    className="text-gray-400 hover:text-gray-500 text-xl lg:text-2xl"
                  >
                    &times;
                  </button>
                </div>
                
                <div className="p-3 lg:p-4">
                  <div className="flex items-center space-x-2 lg:space-x-3 mb-3 lg:mb-4">
                    <img
                      src="/428629140_122123821286195094_987946793325005882_n (1).jpg"
                      alt="user avatar"
                      className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-sm lg:text-base bg-gradient-to-r from-teal-800 to-teal-500 bg-clip-text text-transparent">
                        Tào Việt Đức
                      </h3>
                      <select className="text-xs lg:text-sm bg-gray-100 rounded-md px-1.5 lg:px-2 py-0.5 lg:py-1">
                        <option value="public">🌎 Công khai</option>
                        <option value="friends">👥 Bạn bè</option>
                        <option value="private">🔒 Chỉ mình tôi</option>
                      </select>
                    </div>
                  </div>

                  <textarea
                    placeholder="Bạn đang nghĩ gì?"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="w-full min-h-[100px] lg:min-h-[120px] resize-none border-0 focus:ring-0 text-base lg:text-lg"
                  />

                  {newPostImages.length > 0 && (
                    <div className="grid grid-cols-2 gap-1.5 lg:gap-2 mb-3 lg:mb-4">
                      {newPostImages.map((image, index) => (
                        <img 
                          key={index} 
                          src={image} 
                          alt={`Upload ${index + 1}`}
                          className="rounded-lg object-cover w-full h-36 lg:h-48"
                        />
                      ))}
                    </div>
                  )}

                  <div className="border rounded-lg p-2 lg:p-3 mt-3 lg:mt-4">
                    <p className="text-xs lg:text-sm text-gray-500 mb-2 lg:mb-3">Thêm vào bài viết của bạn</p>
                    <div className="flex justify-between">
                      <button 
                        onClick={() => document.getElementById('imageUpload').click()}
                        className="flex items-center space-x-1 lg:space-x-2 text-gray-600 hover:bg-gray-100 rounded-lg px-2 lg:px-3 py-1.5 lg:py-2 text-sm lg:text-base"
                      >
                        <FaImage className="text-green-500" />
                        <span>Ảnh/Video</span>
                      </button>
                      <input
                        id="imageUpload"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <button className="flex items-center space-x-1 lg:space-x-2 text-gray-600 hover:bg-gray-100 rounded-lg px-2 lg:px-3 py-1.5 lg:py-2 text-sm lg:text-base">
                        <FaSmile className="text-yellow-500" />
                        <span>Cảm xúc</span>
                      </button>
                      <button className="flex items-center space-x-1 lg:space-x-2 text-gray-600 hover:bg-gray-100 rounded-lg px-2 lg:px-3 py-1.5 lg:py-2 text-sm lg:text-base">
                        <FaMapMarkerAlt className="text-red-500" />
                        <span>Check in</span>
                      </button>
                    </div>
                  </div>

                  <button
                    className="w-full mt-3 lg:mt-4 bg-gradient-to-r from-teal-800 to-teal-500 text-white rounded-lg py-1.5 lg:py-2 text-sm lg:text-base font-semibold disabled:opacity-50"
                    onClick={handleCreatePost}
                    disabled={!newPostContent.trim() && newPostImages.length === 0}
                  >
                    Đăng
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Posts List */}
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow mb-4 lg:mb-6">
              <div className="p-3 lg:p-4">
                <div className="flex items-center space-x-2 lg:space-x-3 mb-3 lg:mb-4">
                  <img 
                    src={post.user.avatar} 
                    alt="avatar" 
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-sm lg:text-base">{post.user.name}</h4>
                    <p className="text-gray-500 text-xs lg:text-sm">{post.timestamp}</p>
                  </div>
                </div>

                <p className="mb-3 lg:mb-4 text-sm lg:text-base">{post.content}</p>
                
                <div className="grid grid-cols-2 gap-1.5 lg:gap-2">
                  {post.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Post ${index + 1}`}
                      className="rounded-lg object-cover w-full h-36 lg:h-48"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between mt-3 lg:mt-4 pt-3 lg:pt-4 border-t">
                  <button className="flex items-center space-x-1 lg:space-x-2 text-gray-600 hover:text-blue-600 text-sm lg:text-base">
                    <FaThumbsUp />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 lg:space-x-2 text-gray-600 hover:text-blue-600 text-sm lg:text-base">
                    <FaComment />
                    <span>{post.comments.length}</span>
                  </button>
                  <button className="flex items-center space-x-1 lg:space-x-2 text-gray-600 hover:text-blue-600 text-sm lg:text-base">
                    <FaShare />
                    <span>Chia sẻ</span>
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 p-3 lg:p-4 rounded-b-lg">
                <h5 className="font-semibold mb-2 lg:mb-3 text-sm lg:text-base">Bình luận</h5>
                {post.comments.map(comment => (
                  <div key={comment.id} className="mb-2 bg-white p-2 lg:p-3 rounded-lg">
                    <p className="text-sm lg:text-base">
                      <span className="font-semibold">{comment.user}</span>: {comment.text}
                    </p>
                  </div>
                ))}
                <input
                  type="text"
                  placeholder="Viết bình luận..."
                  className="w-full mt-2 lg:mt-3 p-1.5 lg:p-2 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm lg:text-base"
                />
              </div>
            </div>
          ))}
        </main>
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
