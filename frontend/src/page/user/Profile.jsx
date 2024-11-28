import React, { useState } from 'react'

const Profile = () => {
  const [posts, setPosts] = useState([])
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [activeTab, setActiveTab] = useState('posts')

  const user = {
    name: 'Người dùng',
    avatar: 'https://via.placeholder.com/150',
    coverPhoto: 'https://via.placeholder.com/1200x400',
    bio: 'Xin chào mọi người 👋',
    friends: 123,
    followers: 456,
    location: 'Hà Nội, Việt Nam',
    work: 'Developer tại Tech Company',
    education: 'Đại học ABC'
  }

  return (
    <div className="flex bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Main Content */}
      <div className="w-full">
        {/* Cover Photo */}
        <div className="relative h-[450px] overflow-hidden rounded-b-3xl">
          <img 
            src={user.coverPhoto}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Profile Info */}
        <div className="relative px-8 pb-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-end -mt-32 relative z-10">
            <div className="flex items-end">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-48 h-48 rounded-2xl border-4 border-white shadow-xl object-cover"
                />
                <div className="absolute -bottom-3 -right-3 bg-blue-500 text-white p-2 rounded-xl shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-8 mb-6 text-white">
                <h1 className="text-5xl font-bold mb-2">{user.name}</h1>
                <p className="text-xl font-light mb-4">{user.bio}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    {user.location}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    {user.education}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    {user.work}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowEditProfile(true)}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors mb-6 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span>Chỉnh sửa trang cá nhân</span>
            </button>
          </div>

          <div className="flex justify-between items-center mt-12 border-b border-gray-200 pb-4">
            <div className="flex space-x-12">
              <div className="text-center">
                <span className="block text-3xl font-bold text-gray-900">{user.friends}</span>
                <span className="text-gray-600 font-medium">Bạn bè</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-gray-900">{user.followers}</span>
                <span className="text-gray-600 font-medium">Người theo dõi</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setActiveTab('posts')}
                className={`px-6 py-2.5 rounded-xl font-medium transition-colors ${
                  activeTab === 'posts' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Bài viết
              </button>
              <button 
                onClick={() => setActiveTab('about')}
                className={`px-6 py-2.5 rounded-xl font-medium transition-colors ${
                  activeTab === 'about'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Giới thiệu
              </button>
              <button 
                onClick={() => setActiveTab('friends')}
                className={`px-6 py-2.5 rounded-xl font-medium transition-colors ${
                  activeTab === 'friends'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Bạn bè
              </button>
              <button 
                onClick={() => setActiveTab('photos')}
                className={`px-6 py-2.5 rounded-xl font-medium transition-colors ${
                  activeTab === 'photos'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Ảnh
              </button>
            </div>
          </div>

          {/* Posts Section */}
          <div className="mt-8 space-y-6">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-xl ring-4 ring-blue-50"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{user.name}</h3>
                    <p className="text-gray-500 text-sm">
                      {new Date(post.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-800 text-lg">{post.content}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt=""
                    className="mt-4 rounded-xl w-full object-cover shadow-lg"
                  />
                )}
                <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Thích</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Bình luận</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span>Chia sẻ</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile