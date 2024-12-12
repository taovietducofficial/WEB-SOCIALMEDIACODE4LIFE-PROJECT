import React, { useState, useEffect } from 'react'
import { FaUsers, FaComments, FaBell, FaUserFriends, FaGraduationCap, FaUser, FaDatabase, FaChartBar } from 'react-icons/fa'
import { CRUD_User, CRUD_User_By_Id } from '../../api/admin/CRUD_User'

const DashboardAD = () => {
  // Lấy giá trị tab từ localStorage hoặc mặc định là 'posts'
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem('activeTab') || 'posts'
  })

  const [stats] = useState({
    totalUsers: 1250,
    totalPosts: 3500,
    totalComments: 8900,
    totalNotifications: 2500,
    totalGroups: 180,
    totalCourses: 95,
    totalMessages: 25000
  })
  const [users, setUsers] = useState([])
  const [posts] = useState([
    { id: 1, title: 'Bài viết 1', author: 'Nguyễn Văn A', date: '2024-01-15', status: 'Đã duyệt' },
    { id: 2, title: 'Bài viết 2', author: 'Trần Thị B', date: '2024-01-16', status: 'Chờ duyệt' },
    { id: 3, title: 'Bài viết 3', author: 'Lê Văn C', date: '2024-01-17', status: 'Đã duyệt' },
    { id: 4, title: 'Bài viết 4', author: 'Phạm Thị D', date: '2024-01-18', status: 'Chờ duyệt' },
    { id: 5, title: 'Bài viết 5', author: 'Hoàng Văn E', date: '2024-01-19', status: 'Đã duyệt' },
    { id: 6, title: 'Bài viết 6', author: 'Vũ Thị F', date: '2024-01-20', status: 'Đã duyệt' },
    { id: 7, title: 'Bài viết 7', author: 'Đặng Văn G', date: '2024-01-21', status: 'Chờ duyệt' },
    { id: 8, title: 'Bài viết 8', author: 'Trương Văn H', date: '2024-01-22', status: 'Đã duyệt' },
    { id: 9, title: 'Bài viết 9', author: 'Mai Thị I', date: '2024-01-23', status: 'Chờ duyệt' },
    { id: 10, title: 'Bài viết 10', author: 'Lý Văn J', date: '2024-01-24', status: 'Đã duyệt' },
    { id: 11, title: 'Bài viết 11', author: 'Đinh Thị K', date: '2024-01-25', status: 'Chờ duyệt' },
    { id: 12, title: 'Bài viết 12', author: 'Bùi Văn L', date: '2024-01-26', status: 'Đã duyệt' },
    { id: 13, title: 'Bài viết 13', author: 'Ngô Thị M', date: '2024-01-27', status: 'Đã duyệt' },
    { id: 14, title: 'Bài viết 14', author: 'Dương Văn N', date: '2024-01-28', status: 'Chờ duyệt' },
    { id: 15, title: 'Bài viết 15', author: 'Phan Thị O', date: '2024-01-29', status: 'Đã duyệt' },
    { id: 16, title: 'Bài viết 16', author: 'Võ Văn P', date: '2024-01-30', status: 'Chờ duyệt' },
    { id: 17, title: 'Bài viết 17', author: 'Đỗ Thị Q', date: '2024-01-31', status: 'Đã duyệt' },
    { id: 18, title: 'Bài viết 18', author: 'Hồ Văn R', date: '2024-02-01', status: 'Đã duyệt' },
    { id: 19, title: 'Bài viết 19', author: 'Trịnh Thị S', date: '2024-02-02', status: 'Chờ duyệt' },
    { id: 20, title: 'Bài viết 20', author: 'Lương Văn T', date: '2024-02-03', status: 'Đã duyệt' }
  ])
  const [groups] = useState([
    { id: 1, name: 'Nhóm học tập', members: 150, created: '2024-01-01', status: 'Hoạt động' },
    { id: 2, name: 'Nhóm thảo luận', members: 75, created: '2024-01-05', status: 'Hoạt động' },
    { id: 3, name: 'Nhóm dự án', members: 45, created: '2024-01-10', status: 'Tạm khóa' },
    { id: 4, name: 'Nhóm nghiên cứu', members: 120, created: '2024-01-12', status: 'Hoạt động' },
    { id: 5, name: 'Nhóm tin tức', members: 200, created: '2024-01-15', status: 'Hoạt động' },
    { id: 6, name: 'Nhóm giải trí', members: 180, created: '2024-01-18', status: 'Tạm khóa' },
    { id: 7, name: 'Nhóm hỗ trợ', members: 90, created: '2024-01-20', status: 'Hoạt động' },
    { id: 8, name: 'Nhóm kỹ năng', members: 110, created: '2024-01-22', status: 'Hoạt động' },
    { id: 9, name: 'Nhóm công nghệ', members: 160, created: '2024-01-25', status: 'Hoạt động' },
    { id: 10, name: 'Nhóm ngoại ngữ', members: 140, created: '2024-01-28', status: 'Tạm khóa' }
  ])
  const [backups] = useState([
    { id: 1, name: 'Backup_01012024', size: '2.5GB', date: '2024-01-01', status: 'Hoàn thành' },
    { id: 2, name: 'Backup_05012024', size: '2.8GB', date: '2024-01-05', status: 'Hoàn thành' },
    { id: 3, name: 'Backup_10012024', size: '3.1GB', date: '2024-01-10', status: 'Đang xử lý' },
    { id: 4, name: 'Backup_15012024', size: '2.9GB', date: '2024-01-15', status: 'Hoàn thành' },
    { id: 5, name: 'Backup_20012024', size: '3.3GB', date: '2024-01-20', status: 'Đang xử lý' },
    { id: 6, name: 'Backup_25012024', size: '3.0GB', date: '2024-01-25', status: 'Hoàn thành' },
    { id: 7, name: 'Backup_30012024', size: '3.2GB', date: '2024-01-30', status: 'Đang xử lý' },
    { id: 8, name: 'Backup_01022024', size: '3.4GB', date: '2024-02-01', status: 'Hoàn thành' },
    { id: 9, name: 'Backup_05022024', size: '3.1GB', date: '2024-02-05', status: 'Đang xử lý' },
    { id: 10, name: 'Backup_10022024', size: '3.5GB', date: '2024-02-10', status: 'Hoàn thành' }
  ])

  // Lưu activeTab vào localStorage mỗi khi nó thay đổi
  useEffect(() => {
    localStorage.setItem('activeTab', activeTab)
  }, [activeTab])

  useEffect(() => {
    const fetchUsers = async () => {
      if (activeTab === 'users') {
        const data = await CRUD_User()
        setUsers(data)
      }
    }
    fetchUsers()
  }, [activeTab])

  const handleDeleteUser = async (id) => {
    try {
      await CRUD_User_By_Id(id)
      // Sau khi xóa thành công, cập nhật lại danh sách users
      const updatedUsers = users.filter(user => user.id !== id)
      setUsers(updatedUsers)
    } catch (error) {
      console.error('Lỗi khi xóa người dùng:', error)
    }
  }

  const renderContent = () => {
    switch(activeTab) {
      case 'posts':
        return (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Quản lý bài viết</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tiêu đề</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tác giả</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày đăng</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {posts.map((post) => (
                    <tr key={post.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{post.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{post.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{post.author}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{post.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{post.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
    
      case 'groups':
        return (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Quản lý nhóm</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tên nhóm</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Số thành viên</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày tạo</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {groups.map((group) => (
                    <tr key={group.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{group.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{group.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{group.members}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{group.created}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{group.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )

      case 'users':
        return (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Quản lý người dùng</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tên</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{user.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{user.username}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <button 
                          className="text-red-600 hover:text-red-900"
                          onClick={() => {
                            if(window.confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
                              handleDeleteUser(user.id)
                            }
                          }}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'backup':
        return (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Sao lưu tin nhắn</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tên file</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Kích thước</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày tạo</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {backups.map((backup) => (
                    <tr key={backup.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{backup.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{backup.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{backup.size}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{backup.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{backup.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Bảng điều khiển quản trị</h1>
        
        {/* Thống kê tổng quan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Tổng người dùng</p>
                <h3 className="text-2xl font-bold">{stats.totalUsers}</h3>
              </div>
              <FaUsers className="text-3xl text-blue-500" />
            </div>
          </div>

        

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Tổng nhóm</p>
                <h3 className="text-2xl font-bold">{stats.totalGroups}</h3>
              </div>
              <FaUserFriends className="text-3xl text-purple-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Tổng khóa học</p>
                <h3 className="text-2xl font-bold">{stats.totalCourses}</h3>
              </div>
              <FaGraduationCap className="text-3xl text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Menu điều hướng */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="flex flex-wrap">
            <button
              onClick={() => setActiveTab('posts')}
              className={`px-6 py-3 ${activeTab === 'posts' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              Bài viết
            </button>
    
            <button
              onClick={() => setActiveTab('groups')}
              className={`px-6 py-3 ${activeTab === 'groups' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              Nhóm
            </button>
           
            <button
              onClick={() => setActiveTab('users')}
              className={`px-6 py-3 ${activeTab === 'users' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              Người dùng
            </button>
            <button
              onClick={() => setActiveTab('backup')}
              className={`px-6 py-3 ${activeTab === 'backup' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              Sao lưu
            </button>
          </div>
        </div>

        {/* Nội dung chính */}
        {renderContent()}
      </div>
    </div>
  )
}

export default DashboardAD