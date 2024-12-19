import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Rightbar from '../../components/Rightbar'

const Home = () => {
  const [postContent, setPostContent] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "Xin chào mọi người! Tôi là John và đây là bài đăng đầu tiên của tôi 👋",
      file: "https://picsum.photos/id/1/800/600",
      fileType: "image",
      timestamp: new Date("2024-01-15T08:30:00"),
      user: {
        name: "John Smith",
        avatar: "https://i.pravatar.cc/150?img=1"
      },
      likes: 15,
      liked: false,
      shares: 3
    },
    {
      id: 2,
      content: "Vừa hoàn thành dự án mới! #coding #developer",
      file: "https://picsum.photos/id/2/800/600",
      fileType: "image",
      timestamp: new Date("2024-01-14T15:45:00"),
      user: {
        name: "Emma Wilson",
        avatar: "https://i.pravatar.cc/150?img=2"
      },
      likes: 24,
      liked: false,
      shares: 5
    },
    {
      id: 3,
      content: "Chia sẻ một số tips về lập trình mà tôi học được gần đây...",
      file: null,
      fileType: null,
      timestamp: new Date("2024-01-14T10:20:00"),
      user: {
        name: "David Chen",
        avatar: "https://i.pravatar.cc/150?img=3"
      },
      likes: 32,
      liked: false,
      shares: 8
    },
    {
      id: 4,
      content: "Đang làm việc trên một dự án thú vị với React và Node.js! 🚀",
      file: "https://picsum.photos/id/3/800/600",
      fileType: "image",
      timestamp: new Date("2024-01-13T16:15:00"),
      user: {
        name: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?img=4"
      },
      likes: 45,
      liked: false,
      shares: 12
    },
    {
      id: 5,
      content: "Vừa tham gia một workshop tuyệt vời về AI và Machine Learning!",
      file: "https://picsum.photos/id/4/800/600",
      fileType: "image",
      timestamp: new Date("2024-01-13T09:30:00"),
      user: {
        name: "Michael Brown",
        avatar: "https://i.pravatar.cc/150?img=5"
      },
      likes: 38,
      liked: false,
      shares: 7
    }
  ])
  const [comments, setComments] = useState({
    1: [
      {
        id: 101,
        content: "Chào mừng bạn John!",
        user: {
          name: "Emma Wilson",
          avatar: "https://i.pravatar.cc/150?img=2"
        },
        timestamp: new Date("2024-01-15T08:35:00")
      }
    ],
    2: [
      {
        id: 201,
        content: "Tuyệt vời! Dự án gì vậy Emma?",
        user: {
          name: "David Chen",
          avatar: "https://i.pravatar.cc/150?img=3"
        },
        timestamp: new Date("2024-01-14T15:50:00")
      }
    ]
  })
  const [showComments, setShowComments] = useState({})
  const [commentContent, setCommentContent] = useState('')
  const [typingUsers, setTypingUsers] = useState({})

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handlePost = () => {
    if (postContent.trim() === '' && !selectedFile) return

    const newPost = {
      id: Date.now(),
      content: postContent,
      file: selectedFile ? URL.createObjectURL(selectedFile) : null,
      fileType: selectedFile?.type.startsWith('video/') ? 'video' : 'image',
      timestamp: new Date(),
      user: {
        name: 'Người dùng',
        avatar: 'https://via.placeholder.com/48'
      },
      likes: 0,
      liked: false,
      shares: 0
    }

    setPosts([newPost, ...posts])
    setPostContent('')
    setSelectedFile(null)
    document.getElementById('createPostModal').close()
  }

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked
        }
      }
      return post
    }))
  }

  const handleComment = (postId) => {
    if (!commentContent.trim()) return

    const newComment = {
      id: Date.now(),
      content: commentContent,
      user: {
        name: 'Người dùng',
        avatar: 'https://via.placeholder.com/48'
      },
      timestamp: new Date()
    }

    setComments({
      ...comments,
      [postId]: [...(comments[postId] || []), newComment]
    })
    setCommentContent('')
  }

  const toggleComments = (postId) => {
    setShowComments({
      ...showComments,
      [postId]: !showComments[postId]
    })
  }

  const handleShare = (post) => {
    const sharedPost = {
      ...post,
      id: Date.now(),
      timestamp: new Date(),
      isShared: true,
      originalPost: post
    }
    setPosts([sharedPost, ...posts])

    setPosts(posts.map(p => {
      if (p.id === post.id) {
        return { ...p, shares: p.shares + 1 }
      }
      return p
    }))
  }

  const handleDeleteComment = (postId, commentId) => {
    setComments({
      ...comments,
      [postId]: comments[postId].filter(comment => comment.id !== commentId)
    })
  }

  const handleShufflePosts = () => {
    const shuffledPosts = [...posts]
    for (let i = shuffledPosts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPosts[i], shuffledPosts[j]] = [shuffledPosts[j], shuffledPosts[i]]
    }
    setPosts(shuffledPosts)
  }

  const handleDeletePost = (postId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa bài viết này không?')) {
      setPosts(posts.filter(post => post.id !== postId))
    }
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Left Sidebar */}
      <div className="w-1/4 fixed h-screen border-r border-gray-200 hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto mt-6 px-4 sm:px-6">
        {/* Create Post */}
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/48"
              alt="Profile"
              className="rounded-full ring-2 ring-blue-100 hover:ring-blue-300 transition-all"
            />
            <input
              type="text"
              placeholder="Bạn đang nghĩ gì?"
              className="bg-gray-50 rounded-full px-6 py-3 w-full cursor-pointer hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200"
              onClick={() => document.getElementById('createPostModal').showModal()}
            />
          </div>
          <div className="flex justify-center gap-32 mt-6 pt-3 border-t border-gray-100">
            <button
              onClick={() => document.getElementById('createPostModal').showModal()}
              className="flex items-center space-x-2 hover:bg-blue-50 px-6 py-2.5 rounded-xl transition-colors duration-200"
            >
              <span className="text-xl">🖼️</span>
              <span className="font-medium">Ảnh/Video</span>
            </button>
            <button
              onClick={() => document.getElementById('createPostModal').showModal()}
              className="flex items-center space-x-2 hover:bg-blue-50 px-6 py-2.5 rounded-xl transition-colors duration-200"
            >
              <span className="text-xl">😊</span>
              <span className="font-medium">Cảm xúc</span>
            </button>
          </div>

          {/* Unified Create Post Modal */}
          <dialog id="createPostModal" className="modal rounded-xl p-0 overflow-hidden fixed inset-0 m-auto w-fit h-fit backdrop-blur-sm">
            <div className="modal-box bg-white shadow-2xl max-w-2xl w-[600px]">
              <div className="border-b border-gray-100 p-4 relative">
                <h3 className="font-bold text-xl text-center">Tạo bài viết</h3>
                <form method="dialog" className="absolute right-4 top-4">
                  <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </form>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://via.placeholder.com/48"
                    alt="Profile"
                    className="w-12 h-12 rounded-full ring-2 ring-blue-100"
                  />
                  <div>
                    <h4 className="font-semibold">Người dùng</h4>
                    <div className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Công khai</span>
                    </div>
                  </div>
                </div>
                <textarea
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-200 focus:outline-none resize-none text-lg"
                  placeholder="Bạn đang nghĩ gì?"
                  rows="6"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
                {selectedFile && (
                  <div className="mt-4 relative group">
                    {selectedFile.type.startsWith('video/') ? (
                      <video
                        src={URL.createObjectURL(selectedFile)}
                        controls
                        className="max-h-96 w-full rounded-lg object-contain bg-black"
                      />
                    ) : (
                      <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Preview"
                        className="max-h-96 w-full rounded-lg object-contain"
                      />
                    )}
                    <button
                      onClick={() => setSelectedFile(null)}
                      className="absolute top-2 right-2 p-2 bg-gray-800/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                )}
                <div className="flex items-center justify-between mt-6 p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-600 font-medium">Thêm vào bài viết</span>
                  <div className="flex gap-2">
                    <label className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
                      <input
                        type="file"
                        accept="image/*,video/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </label>
                  </div>
                </div>
                <button
                  onClick={handlePost}
                  disabled={!postContent.trim() && !selectedFile}
                  className={`w-full mt-6 py-2.5 rounded-xl font-medium transition-colors ${postContent.trim() || selectedFile
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-blue-200 text-white cursor-not-allowed'
                    }`}
                >
                  Đăng
                </button>
              </div>
            </div>
          </dialog>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                {post.isShared && (
                  <div className="mb-4 text-gray-500">
                    <span className="font-medium">{post.user.name}</span> đã chia sẻ một bài viết
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.user.avatar}
                      alt="User"
                      className="rounded-full ring-2 ring-blue-100"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{post.user.name}</h3>
                      <p className="text-gray-500 text-sm">
                        {new Date(post.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="p-2 hover:bg-red-50 rounded-full transition-colors group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <p className="mt-4 text-gray-800">{post.content}</p>
                {post.file && (
                  post.fileType === 'video' ? (
                    <video
                      src={post.file}
                      controls
                      className="mt-4 w-full rounded-xl"
                    />
                  ) : (
                    <img
                      src={post.file}
                      alt="Post content"
                      className="mt-4 w-full rounded-xl object-cover"
                    />
                  )
                )}
                <div className="mt-4 flex items-center space-x-4 text-gray-500">
                  <span>{post.likes} lượt thích</span>
                  <span>{(comments[post.id] || []).length} bình luận</span>
                  <span>{post.shares} lượt chia sẻ</span>
                </div>
                <div className="flex justify-center gap-32 mt-6 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-2 hover:bg-blue-50 px-6 py-2.5 rounded-xl transition-colors ${post.liked ? 'text-blue-500' : ''}`}
                  >
                    <span className="text-xl">👍</span>
                    <span className="font-medium">Thích</span>
                  </button>
                  <button
                    onClick={() => toggleComments(post.id)}
                    className="flex items-center space-x-2 hover:bg-blue-50 px-6 py-2.5 rounded-xl transition-colors"
                  >
                    <span className="text-xl">💬</span>
                    <span className="font-medium">Bình luận</span>
                  </button>
                  <button
                    onClick={() => handleShare(post)}
                    className="flex items-center space-x-2 hover:bg-blue-50 px-6 py-2.5 rounded-xl transition-colors"
                  >
                    <span className="text-xl">↗️</span>
                    <span className="font-medium">Chia sẻ</span>
                  </button>
                </div>

                {/* Comments Section */}
                {showComments[post.id] && (
                  <div className="mt-4 space-y-4">
                    <div className="flex space-x-2">
                      <img
                        src="https://via.placeholder.com/32"
                        alt="User"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1 flex space-x-2">
                        <input
                          type="text"
                          value={commentContent}
                          onChange={(e) => setCommentContent(e.target.value)}
                          placeholder="Viết bình luận..."
                          className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              handleComment(post.id)
                            }
                          }}
                        />
                        <button
                          onClick={() => handleComment(post.id)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                          disabled={!commentContent.trim()}
                        >
                          Gửi
                        </button>
                      </div>
                    </div>

                    {/* Comment List with Real-time Updates */}
                    <div className="relative">
                      {comments[post.id]?.map(comment => (
                        <div key={comment.id} className="flex space-x-2 animate-fade-in">
                          <img
                            src={comment.user.avatar}
                            alt="User"
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="bg-gray-100 rounded-2xl px-4 py-2">
                              <p className="font-medium">{comment.user.name}</p>
                              <p>{comment.content}</p>
                            </div>
                            <div className="mt-1 text-sm text-gray-500 flex items-center space-x-2">
                              <span>{new Date(comment.timestamp).toLocaleTimeString()}</span>
                              <button
                                onClick={() => handleDeleteComment(post.id, comment.id)}
                                className="text-red-500 hover:text-red-600"
                              >
                                Xóa
                              </button>
                              {comment.isTyping && (
                                <span className="text-blue-500 text-xs animate-pulse">
                                  • đang nhập...
                                </span>
                              )}
                              {comment.isNew && (
                                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                                  Mới
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Real-time typing indicator */}
                      {typingUsers[post.id]?.length > 0 && (
                        <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-sm p-2 rounded-lg text-sm text-gray-500">
                          {typingUsers[post.id].join(", ")} đang nhập bình luận...
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4 fixed h-screen border-r border-gray-200 hidden lg:block">
        <Rightbar />
      </div>
    </div>
  )
}

export default Home