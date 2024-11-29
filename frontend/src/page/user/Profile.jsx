import React, { useState, useEffect } from 'react'
import { FaCamera, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaHeart, FaComment, FaShare, FaEllipsisH, FaPen } from 'react-icons/fa'

const Profile = () => {
  const [posts, setPosts] = useState([])
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [activeTab, setActiveTab] = useState('posts')
  const [isFollowing, setIsFollowing] = useState(false)
  const [showPostOptions, setShowPostOptions] = useState(null)
  const [comments, setComments] = useState({})
  const [showComments, setShowComments] = useState({})

  const user = {
    name: 'Tào Việt Đức',
    avatar: 'https://via.placeholder.com/150',
    coverPhoto: 'https://via.placeholder.com/1200x400',
    bio: 'Xin chào mọi người 👋',
    friends: 123,
    followers: 456,
    location: 'Hà Nội, Việt Nam',
    work: 'Developer tại Tech Company',
    education: 'Đại học ABC',
    joinDate: '01/2024',
    email: 'user@example.com',
    phone: '0123456789'
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts')
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? {...post, likes: post.likes + 1} : post
    ))
  }

  const handleComment = (postId, comment) => {
    setComments({
      ...comments,
      [postId]: [...(comments[postId] || []), {
        id: Date.now(),
        text: comment,
        user: user.name,
        timestamp: new Date()
      }]
    })
  }

  const handleShare = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? {...post, shares: post.shares + 1} : post  
    ))
  }

  const handleDeletePost = (postId) => {
    if(window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      setPosts(posts.filter(post => post.id !== postId))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header Section */}
      <header>
        {/* Cover Photo */}
        <div className="relative h-[300px] overflow-hidden rounded-b-[3rem] shadow-2xl group">
          <img 
            src={user.coverPhoto}
            alt="Cover"
            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-sm" />
          <button className="absolute bottom-6 right-6 bg-white/30 hover:bg-white/40 text-white p-4 rounded-2xl backdrop-blur-md transition-all hover:scale-105 shadow-lg">
            <FaCamera size={24} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8">
        {/* Profile Info */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8 mt-8">
          <div className="flex items-start gap-8">
            <div className="relative group">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-40 h-40 rounded-3xl border-8 border-white shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute bottom-4 right-4 p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                <FaCamera size={24} />
              </button>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-800">{user.name}</h1>
                  <p className="text-xl text-gray-600 font-light mt-2">{user.bio}</p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isFollowing 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
                    }`}
                  >
                    {isFollowing ? 'Đang theo dõi' : 'Theo dõi'}
                  </button>
                  <button
                    onClick={() => setShowEditProfile(true)}
                    className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-medium transition-all duration-300"
                  >
                    <FaPen className="inline-block mr-2" />
                    Chỉnh sửa trang cá nhân
                  </button>
                </div>
              </div>

              <div className="flex gap-6 mt-6">
                <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl shadow-sm">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">{user.location}</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl shadow-sm">
                  <FaGraduationCap className="w-5 h-5 text-indigo-500" />
                  <span className="text-gray-700">{user.education}</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl shadow-sm">
                  <FaBriefcase className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">{user.work}</span>
                </div>
              </div>

              <div className="flex gap-16 mt-6">
                <div className="text-center cursor-pointer group">
                  <span className="block text-4xl font-bold text-gray-800 group-hover:text-blue-500 transition-colors">{user.friends}</span>
                  <span className="text-gray-600 font-medium">Bạn bè</span>
                </div>
                <div className="text-center cursor-pointer group">
                  <span className="block text-4xl font-bold text-gray-800 group-hover:text-blue-500 transition-colors">{user.followers}</span>
                  <span className="text-gray-600 font-medium">Người theo dõi</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            {['posts', 'about', 'friends', 'photos'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-xl' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 gap-8 mt-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-8">
                {post.image && (
                  <div className="mb-4">
                    <img
                      src={post.image}
                      alt=""
                      className="w-full rounded-2xl shadow-md"
                    />
                  </div>
                )}

                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-14 h-14 rounded-2xl ring-4 ring-blue-50"
                    />
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900">{user.name}</h3>
                      <time className="text-gray-500 text-sm">{new Date(post.timestamp).toLocaleString()}</time>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <button 
                      onClick={() => setShowPostOptions(showPostOptions === post.id ? null : post.id)}
                      className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                      <FaEllipsisH className="text-gray-500" />
                    </button>
                    {showPostOptions === post.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-10">
                        <button 
                          onClick={() => handleDeletePost(post.id)}
                          className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 transition-colors"
                        >
                          Xóa bài viết
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-gray-800 text-lg leading-relaxed">{post.content}</p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                  <div className="flex gap-6">
                    <button 
                      onClick={() => handleLike(post.id)}
                      className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors group"
                    >
                      <FaHeart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span>{post.likes}</span>
                    </button>
                    <button 
                      onClick={() => setShowComments({...showComments, [post.id]: !showComments[post.id]})}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors group"
                    >
                      <FaComment className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span>{post.comments}</span>
                    </button>
                    <button 
                      onClick={() => handleShare(post.id)}
                      className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors group"
                    >
                      <FaShare className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span>{post.shares}</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Profile