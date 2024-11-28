import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImages, setNewPostImages] = useState([]);
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  // Sample post data (replace with actual API call)
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
    <div>
      <Navbar />
      <Sidebar />
      <Rightbar />
      <div className="home-layout">
        <div className="home-container">
          {/* Create Post Section */}
          <div className="post create-post">
            <div className="post-header">
              <img
                src="/428629140_122123821286195094_987946793325005882_n (1).jpg"
                alt="user avatar"
                className="post-avatar"
              />
              <textarea
                placeholder="CODE4LIFE ơi, bạn đang nghĩ gì thế?"
                value={newPostContent}
                onClick={() => setShowCreatePostModal(true)}
                readOnly
                className="create-post-input"
              />
            </div>
          </div>

          {/* Create Post Modal */}
          {showCreatePostModal && (
            <div className="modal-overlay" onClick={() => setShowCreatePostModal(false)}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                  <h3>Tạo bài viết</h3>
                  <button onClick={() => setShowCreatePostModal(false)}>&times;</button>
                </div>
                <div className="modal-body">
                  <div className="post-header">
                    <img
                      src="/428629140_122123821286195094_987946793325005882_n (1).jpg"
                      alt="user avatar"
                      className="post-avatar"
                    />
                    <div className="post-info">
                      <h3 style={{background: 'linear-gradient(135deg, #004d40, #00897b)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Ta&#x323;o Vi&#x1EC7;t Đ&#x1EE9;c</h3>
                      <select defaultValue="public" className="privacy-select">
                        <option value="public">Công khai</option>
                        <option value="friends">Bạn bè</option>
                        <option value="private">Chỉ mình tôi</option>
                      </select>
                    </div>
                  </div>
                  <textarea
                    placeholder="Bạn đang nghĩ gì?"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="create-post-input"
                  />

                  {newPostImages.length > 0 && (
                    <div className="post-images">
                      {newPostImages.map((image, index) => (
                        <img key={index} src={image} alt={`Upload ${index + 1}`} />
                      ))}
                    </div>
                  )}

                  <div className="create-post-actions">
                    <p className="add-to-post">Thêm vào bài viết của bạn</p>
                    <div className="post-options" style={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
                      <button className="post-option" onClick={() => document.getElementById('imageUpload').click()}>
                        <input
                          id="imageUpload"
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          style={{ display: 'none' }}
                        />
                        🖼️ Ảnh/Video
                      </button>
                      <button className="post-option">😊 Cảm xúc</button>
                      <button className="post-option">📍 Check in</button>
                    </div>
                    <button
                      className="create-post-button"
                      onClick={handleCreatePost}
                      disabled={!newPostContent.trim() && newPostImages.length === 0}
                    >
                      Đăng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Posts List */}
          {posts.map(post => (
            <div key={post.id} className="post">
              <div className="post-header">
                <img src={post.user.avatar} alt="avatar" className="post-avatar" />
                <div className="post-info">
                  <h4>{post.user.name}</h4>
                  <p>{post.timestamp}</p>
                </div>
              </div>

              <div className="post-content">
                <p>{post.content}</p>
                <div className="post-images">
                  {post.images.map((image, index) => (
                    <img key={index} src={image} alt={`Post ${index + 1}`} />
                  ))}
                </div>
              </div>

              <div className="post-actions">
                <div className="actions-buttons">
                  <button>Thích ({post.likes})</button>
                  <button>Bình luận ({post.comments.length})</button>
                  <button>Chia sẻ</button>
                </div>
              </div>

              <div className="comments-section">
                <h5>Bình luận</h5>
                {post.comments.map(comment => (
                  <div key={comment.id} className="comment">
                    <p><strong>{comment.user}</strong>: {comment.text}</p>
                  </div>
                ))}
                <input type="text" placeholder="Viết bình luận..." />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
